import { eq, and, sql, desc, ilike, gte, lte } from 'drizzle-orm';
import { db } from '../db/index.js';
import { transactions, categories } from '../db/schema.js';
import { AppError } from '../middleware/errorHandler.js';
import { NotificationService } from './notification.service.js';
import type { CreateTransactionInput, TransactionFilters } from '../lib/validation.js';

export class TransactionService {
  /**
   * Get paginated, filtered transactions for a user.
   * Joins category name for display.
   */
  static async getAll(userId: string, filters: TransactionFilters) {
    const conditions = [eq(transactions.userId, userId)];

    if (filters.type) {
      conditions.push(eq(transactions.type, filters.type));
    }
    if (filters.categoryId) {
      conditions.push(eq(transactions.categoryId, filters.categoryId));
    }
    if (filters.startDate) {
      conditions.push(gte(transactions.date, new Date(filters.startDate)));
    }
    if (filters.endDate) {
      conditions.push(
        lte(transactions.date, new Date(filters.endDate + 'T23:59:59'))
      );
    }
    if (filters.search) {
      conditions.push(ilike(transactions.description, `%${filters.search}%`));
    }

    const whereClause = and(...conditions);

    // Get total count
    const [countResult] = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(transactions)
      .where(whereClause);

    const total = Number(countResult?.count ?? 0);

    // Get paginated data with category join
    const offset = (filters.page - 1) * filters.limit;

    const data = await db
      .select({
        id: transactions.id,
        userId: transactions.userId,
        categoryId: transactions.categoryId,
        categoryName: categories.name,
        date: transactions.date,
        type: transactions.type,
        amount: transactions.amount,
        description: transactions.description,
        icon: transactions.icon,
        createdAt: transactions.createdAt,
        updatedAt: transactions.updatedAt,
      })
      .from(transactions)
      .leftJoin(categories, eq(transactions.categoryId, categories.id))
      .where(whereClause)
      .orderBy(desc(transactions.date))
      .limit(filters.limit)
      .offset(offset);

    return {
      data,
      total,
      page: filters.page,
      limit: filters.limit,
      totalPages: Math.ceil(total / filters.limit),
    };
  }

  /**
   * Get the most recent N transactions.
   */
  static async getRecent(userId: string, limit: number = 5) {
    return db
      .select({
        id: transactions.id,
        userId: transactions.userId,
        categoryId: transactions.categoryId,
        categoryName: categories.name,
        date: transactions.date,
        type: transactions.type,
        amount: transactions.amount,
        description: transactions.description,
        icon: transactions.icon,
        createdAt: transactions.createdAt,
      })
      .from(transactions)
      .leftJoin(categories, eq(transactions.categoryId, categories.id))
      .where(eq(transactions.userId, userId))
      .orderBy(desc(transactions.date))
      .limit(limit);
  }

  /**
   * Create a new transaction.
   * Validates that the category exists and belongs to the user.
   * Creates a notification as a side effect.
   */
  static async create(userId: string, input: CreateTransactionInput) {
    // Verify category ownership
    const [category] = await db
      .select()
      .from(categories)
      .where(
        and(
          eq(categories.id, input.categoryId),
          eq(categories.userId, userId)
        )
      )
      .limit(1);

    if (!category) {
      throw new AppError('Kategori tidak ditemukan atau bukan milik Anda', 404);
    }

    const [created] = await db
      .insert(transactions)
      .values({
        userId,
        categoryId: input.categoryId,
        date: new Date(input.date),
        type: input.type,
        amount: input.amount,
        description: input.description,
        icon: input.icon || (input.type === 'income' ? 'payments' : 'shopping_cart'),
      })
      .returning();

    // Side-effect: create a notification
    const typeLabel = input.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
    const formattedAmount = 'Rp ' + input.amount.toLocaleString('en-US');
    await NotificationService.create(userId, {
      title: `${typeLabel} Baru Dicatat`,
      message: `Transaksi "${input.description}" sebesar ${formattedAmount} telah dicatat pada kategori ${category.name}.`,
      type: input.type === 'income' ? 'success' : 'info',
    });

    return { ...created, categoryName: category.name };
  }

  /**
   * Delete a transaction by ID, scoped to user.
   */
  static async delete(userId: string, id: string) {
    const [existing] = await db
      .select({ id: transactions.id })
      .from(transactions)
      .where(and(eq(transactions.id, id), eq(transactions.userId, userId)))
      .limit(1);

    if (!existing) {
      throw new AppError('Transaksi tidak ditemukan', 404);
    }

    await db
      .delete(transactions)
      .where(and(eq(transactions.id, id), eq(transactions.userId, userId)));
  }

  /**
   * Export transactions as CSV string.
   * Uses the same filtering as getAll but returns all matching rows.
   */
  static async exportCSV(userId: string, filters: Omit<TransactionFilters, 'page' | 'limit'>) {
    const conditions = [eq(transactions.userId, userId)];

    if (filters.type) {
      conditions.push(eq(transactions.type, filters.type));
    }
    if (filters.categoryId) {
      conditions.push(eq(transactions.categoryId, filters.categoryId));
    }
    if (filters.startDate) {
      conditions.push(gte(transactions.date, new Date(filters.startDate)));
    }
    if (filters.endDate) {
      conditions.push(
        lte(transactions.date, new Date(filters.endDate + 'T23:59:59'))
      );
    }
    if (filters.search) {
      conditions.push(ilike(transactions.description, `%${filters.search}%`));
    }

    const rows = await db
      .select({
        id: transactions.id,
        date: transactions.date,
        categoryName: categories.name,
        description: transactions.description,
        type: transactions.type,
        amount: transactions.amount,
      })
      .from(transactions)
      .leftJoin(categories, eq(transactions.categoryId, categories.id))
      .where(and(...conditions))
      .orderBy(desc(transactions.date));

    if (rows.length === 0) {
      throw new AppError('Tidak ada data riwayat kas untuk diekspor', 404);
    }

    // Build CSV
    const header = 'No,ID,Tanggal,Kategori,Catatan,Tipe,Nominal';
    const csvRows = rows.map((row, idx) => {
      const typeLabel = row.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
      const dateStr = row.date instanceof Date
        ? row.date.toISOString().split('T')[0]
        : String(row.date);
      const desc = row.description.replace(/"/g, '""');
      return `"${idx + 1}","${row.id}","${dateStr}","${row.categoryName || ''}","${desc}","${typeLabel}","${row.amount}"`;
    });

    return [header, ...csvRows].join('\n');
  }
}
