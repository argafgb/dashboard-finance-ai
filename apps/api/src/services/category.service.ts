import { eq, and, sql } from 'drizzle-orm';
import { db } from '../db/index.js';
import { categories, transactions } from '../db/schema.js';
import { AppError } from '../middleware/errorHandler.js';
import type { CreateCategoryInput } from '../lib/validation.js';

export class CategoryService {
  /**
   * Get all categories for a user, optionally filtered by type.
   */
  static async getAll(userId: string, type?: 'income' | 'expense') {
    const conditions = [eq(categories.userId, userId)];
    if (type) {
      conditions.push(eq(categories.type, type));
    }

    return db
      .select()
      .from(categories)
      .where(and(...conditions))
      .orderBy(categories.createdAt);
  }

  /**
   * Get a single category by ID, scoped to the user.
   */
  static async getById(userId: string, id: string) {
    const [category] = await db
      .select()
      .from(categories)
      .where(and(eq(categories.id, id), eq(categories.userId, userId)))
      .limit(1);

    return category || null;
  }

  /**
   * Create a new category.
   * Throws if a category with the same name+type already exists for this user.
   */
  static async create(userId: string, input: CreateCategoryInput) {
    // Check for duplicate
    const [existing] = await db
      .select({ id: categories.id })
      .from(categories)
      .where(
        and(
          eq(categories.userId, userId),
          sql`LOWER(${categories.name}) = LOWER(${input.name})`,
          eq(categories.type, input.type)
        )
      )
      .limit(1);

    if (existing) {
      throw new AppError(
        `Kategori "${input.name}" dengan tipe "${input.type}" sudah ada`,
        409
      );
    }

    const [created] = await db
      .insert(categories)
      .values({
        userId,
        name: input.name,
        type: input.type,
        icon: input.icon,
        color: input.color,
      })
      .returning();

    return created;
  }

  /**
   * Delete a category.
   * Throws if there are transactions referencing this category.
   */
  static async delete(userId: string, id: string) {
    // Verify ownership
    const category = await this.getById(userId, id);
    if (!category) {
      throw new AppError('Kategori tidak ditemukan', 404);
    }

    // Check for referencing transactions
    const [ref] = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(transactions)
      .where(eq(transactions.categoryId, id));

    if (ref && ref.count > 0) {
      throw new AppError(
        'Tidak bisa menghapus kategori yang masih memiliki transaksi',
        409
      );
    }

    await db
      .delete(categories)
      .where(and(eq(categories.id, id), eq(categories.userId, userId)));
  }
}
