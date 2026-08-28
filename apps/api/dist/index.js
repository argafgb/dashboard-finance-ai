var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// src/middleware/errorHandler.ts
import { ZodError } from "zod";
var AppError = class extends Error {
  statusCode;
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
};
function errorHandler(err, _req, res, _next) {
  if (err instanceof ZodError) {
    const messages = err.errors.map((e) => `${e.path.join(".")}: ${e.message}`);
    res.status(400).json({
      error: "Validation failed",
      details: messages
    });
    return;
  }
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.message
    });
    return;
  }
  console.error("[Error Handler] Unhandled error:", err);
  res.status(500).json({
    error: "Internal server error"
  });
}

// src/routes/auth.routes.ts
import { Router } from "express";
import { toNodeHandler } from "better-auth/node";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

// src/db/index.ts
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

// src/db/schema.ts
var schema_exports = {};
__export(schema_exports, {
  account: () => account,
  categories: () => categories,
  notifications: () => notifications,
  session: () => session,
  transactions: () => transactions,
  user: () => user,
  verification: () => verification
});
import {
  pgTable,
  uuid,
  text,
  varchar,
  integer,
  boolean,
  timestamp,
  uniqueIndex,
  index
} from "drizzle-orm/pg-core";
var user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" })
});
var account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var categories = pgTable(
  "categories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    name: varchar("name", { length: 100 }).notNull(),
    type: varchar("type", { length: 10 }).notNull(),
    // 'income' | 'expense'
    icon: varchar("icon", { length: 50 }).default("category"),
    color: varchar("color", { length: 20 }).default("#a7c8ff"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow()
  },
  (table) => [
    uniqueIndex("categories_user_name_type_idx").on(
      table.userId,
      table.name,
      table.type
    )
  ]
);
var transactions = pgTable(
  "transactions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    categoryId: uuid("category_id").notNull().references(() => categories.id, { onDelete: "restrict" }),
    date: timestamp("date").notNull(),
    type: varchar("type", { length: 10 }).notNull(),
    // 'income' | 'expense'
    amount: integer("amount").notNull(),
    // stored in Rupiah (integer)
    description: varchar("description", { length: 500 }).notNull(),
    icon: varchar("icon", { length: 50 }).default("payments"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow()
  },
  (table) => [
    index("transactions_user_date_idx").on(table.userId, table.date),
    index("transactions_user_type_idx").on(table.userId, table.type)
  ]
);
var notifications = pgTable(
  "notifications",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 200 }).notNull(),
    message: text("message").notNull(),
    type: varchar("type", { length: 10 }).default("info"),
    // 'info' | 'success' | 'warning'
    isRead: boolean("is_read").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow()
  },
  (table) => [
    index("notifications_user_read_idx").on(
      table.userId,
      table.isRead,
      table.createdAt
    )
  ]
);

// src/db/index.ts
var { Pool } = pg;
var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool.on("error", (err) => {
  console.error("[DB] Unexpected pool error:", err);
  process.exit(1);
});
var db = drizzle(pool, { schema: schema_exports });

// src/lib/auth.ts
var auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification
    }
  }),
  emailAndPassword: {
    enabled: true
  },
  trustedOrigins: [process.env.CORS_ORIGIN || "http://localhost:5173"]
});

// src/routes/auth.routes.ts
var router = Router();
router.all("/api/auth/*splat", toNodeHandler(auth));
var auth_routes_default = router;

// src/routes/category.routes.ts
import { Router as Router2 } from "express";

// src/middleware/auth.ts
import { fromNodeHeaders } from "better-auth/node";
async function requireAuth(req, res, next) {
  try {
    const session2 = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers)
    });
    if (!session2) {
      res.status(401).json({ error: "Unauthorized \u2014 please sign in" });
      return;
    }
    req.user = session2.user;
    req.session = session2.session;
    next();
  } catch (error) {
    console.error("[Auth Middleware] Session validation failed:", error);
    res.status(401).json({ error: "Unauthorized \u2014 invalid session" });
  }
}
function getUserId(req) {
  const user2 = req.user;
  if (!user2?.id) {
    throw new Error("User not found on request \u2014 did you forget requireAuth middleware?");
  }
  return user2.id;
}

// src/services/category.service.ts
import { eq, and, sql } from "drizzle-orm";
var CategoryService = class {
  /**
   * Get all categories for a user, optionally filtered by type.
   */
  static async getAll(userId, type) {
    const conditions = [eq(categories.userId, userId)];
    if (type) {
      conditions.push(eq(categories.type, type));
    }
    return db.select().from(categories).where(and(...conditions)).orderBy(categories.createdAt);
  }
  /**
   * Get a single category by ID, scoped to the user.
   */
  static async getById(userId, id) {
    const [category] = await db.select().from(categories).where(and(eq(categories.id, id), eq(categories.userId, userId))).limit(1);
    return category || null;
  }
  /**
   * Create a new category.
   * Throws if a category with the same name+type already exists for this user.
   */
  static async create(userId, input) {
    const [existing] = await db.select({ id: categories.id }).from(categories).where(
      and(
        eq(categories.userId, userId),
        sql`LOWER(${categories.name}) = LOWER(${input.name})`,
        eq(categories.type, input.type)
      )
    ).limit(1);
    if (existing) {
      throw new AppError(
        `Kategori "${input.name}" dengan tipe "${input.type}" sudah ada`,
        409
      );
    }
    const [created] = await db.insert(categories).values({
      userId,
      name: input.name,
      type: input.type,
      icon: input.icon,
      color: input.color
    }).returning();
    return created;
  }
  /**
   * Delete a category.
   * Throws if there are transactions referencing this category.
   */
  static async delete(userId, id) {
    const category = await this.getById(userId, id);
    if (!category) {
      throw new AppError("Kategori tidak ditemukan", 404);
    }
    const [ref] = await db.select({ count: sql`COUNT(*)` }).from(transactions).where(eq(transactions.categoryId, id));
    if (ref && ref.count > 0) {
      throw new AppError(
        "Tidak bisa menghapus kategori yang masih memiliki transaksi",
        409
      );
    }
    await db.delete(categories).where(and(eq(categories.id, id), eq(categories.userId, userId)));
  }
};

// src/lib/validation.ts
import { z } from "zod";
var createCategorySchema = z.object({
  name: z.string().min(1, "Category name is required").max(100, "Category name must be 100 characters or less").trim(),
  type: z.enum(["income", "expense"], {
    errorMap: () => ({ message: "Type must be 'income' or 'expense'" })
  }),
  icon: z.string().max(50).optional().default("category"),
  color: z.string().max(20).optional().default("#a7c8ff")
});
var createTransactionSchema = z.object({
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format"
  }),
  type: z.enum(["income", "expense"], {
    errorMap: () => ({ message: "Type must be 'income' or 'expense'" })
  }),
  categoryId: z.string().uuid("Invalid category ID"),
  amount: z.number().int("Amount must be an integer").positive("Amount must be positive"),
  description: z.string().min(1, "Description is required").max(500, "Description must be 500 characters or less").trim(),
  icon: z.string().max(50).optional().default("payments")
});
var transactionFiltersSchema = z.object({
  type: z.enum(["income", "expense"]).optional(),
  categoryId: z.string().uuid().optional(),
  startDate: z.string().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Invalid start date"
  }).optional(),
  endDate: z.string().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Invalid end date"
  }).optional(),
  search: z.string().max(200).optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10)
});
var dashboardSummarySchema = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/, "Month must be in YYYY-MM format")
});
var createNotificationSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title must be 200 characters or less").trim(),
  message: z.string().min(1, "Message is required").trim(),
  type: z.enum(["info", "success", "warning"]).optional().default("info")
});

// src/routes/category.routes.ts
var router2 = Router2();
router2.use(requireAuth);
router2.get("/", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const type = req.query.type;
    const categories2 = await CategoryService.getAll(userId, type);
    res.json({ data: categories2 });
  } catch (error) {
    next(error);
  }
});
router2.post("/", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const input = createCategorySchema.parse(req.body);
    const category = await CategoryService.create(userId, input);
    res.status(201).json({ data: category });
  } catch (error) {
    next(error);
  }
});
router2.delete("/:id", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const { id } = req.params;
    await CategoryService.delete(userId, id);
    res.json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    next(error);
  }
});
var category_routes_default = router2;

// src/routes/transaction.routes.ts
import { Router as Router3 } from "express";

// src/services/transaction.service.ts
import { eq as eq3, and as and3, sql as sql2, desc as desc2, ilike, gte, lte } from "drizzle-orm";

// src/services/notification.service.ts
import { eq as eq2, and as and2, desc } from "drizzle-orm";
var NotificationService = class {
  /**
   * Get all notifications for a user, ordered by newest first.
   */
  static async getAll(userId) {
    return db.select().from(notifications).where(eq2(notifications.userId, userId)).orderBy(desc(notifications.createdAt));
  }
  /**
   * Mark all notifications as read for a user.
   */
  static async markAllAsRead(userId) {
    await db.update(notifications).set({ isRead: true }).where(
      and2(
        eq2(notifications.userId, userId),
        eq2(notifications.isRead, false)
      )
    );
  }
  /**
   * Create a new notification.
   */
  static async create(userId, input) {
    const [created] = await db.insert(notifications).values({
      userId,
      title: input.title,
      message: input.message,
      type: input.type
    }).returning();
    return created;
  }
};

// src/services/transaction.service.ts
var TransactionService = class {
  /**
   * Get paginated, filtered transactions for a user.
   * Joins category name for display.
   */
  static async getAll(userId, filters) {
    const conditions = [eq3(transactions.userId, userId)];
    if (filters.type) {
      conditions.push(eq3(transactions.type, filters.type));
    }
    if (filters.categoryId) {
      conditions.push(eq3(transactions.categoryId, filters.categoryId));
    }
    if (filters.startDate) {
      conditions.push(gte(transactions.date, new Date(filters.startDate)));
    }
    if (filters.endDate) {
      conditions.push(
        lte(transactions.date, /* @__PURE__ */ new Date(filters.endDate + "T23:59:59"))
      );
    }
    if (filters.search) {
      conditions.push(ilike(transactions.description, `%${filters.search}%`));
    }
    const whereClause = and3(...conditions);
    const [countResult] = await db.select({ count: sql2`COUNT(*)` }).from(transactions).where(whereClause);
    const total = Number(countResult?.count ?? 0);
    const offset = (filters.page - 1) * filters.limit;
    const data = await db.select({
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
      updatedAt: transactions.updatedAt
    }).from(transactions).leftJoin(categories, eq3(transactions.categoryId, categories.id)).where(whereClause).orderBy(desc2(transactions.date)).limit(filters.limit).offset(offset);
    return {
      data,
      total,
      page: filters.page,
      limit: filters.limit,
      totalPages: Math.ceil(total / filters.limit)
    };
  }
  /**
   * Get the most recent N transactions.
   */
  static async getRecent(userId, limit = 5) {
    return db.select({
      id: transactions.id,
      userId: transactions.userId,
      categoryId: transactions.categoryId,
      categoryName: categories.name,
      date: transactions.date,
      type: transactions.type,
      amount: transactions.amount,
      description: transactions.description,
      icon: transactions.icon,
      createdAt: transactions.createdAt
    }).from(transactions).leftJoin(categories, eq3(transactions.categoryId, categories.id)).where(eq3(transactions.userId, userId)).orderBy(desc2(transactions.date)).limit(limit);
  }
  /**
   * Create a new transaction.
   * Validates that the category exists and belongs to the user.
   * Creates a notification as a side effect.
   */
  static async create(userId, input) {
    const [category] = await db.select().from(categories).where(
      and3(
        eq3(categories.id, input.categoryId),
        eq3(categories.userId, userId)
      )
    ).limit(1);
    if (!category) {
      throw new AppError("Kategori tidak ditemukan atau bukan milik Anda", 404);
    }
    const [created] = await db.insert(transactions).values({
      userId,
      categoryId: input.categoryId,
      date: new Date(input.date),
      type: input.type,
      amount: input.amount,
      description: input.description,
      icon: input.icon || (input.type === "income" ? "payments" : "shopping_cart")
    }).returning();
    const typeLabel = input.type === "income" ? "Pemasukan" : "Pengeluaran";
    const formattedAmount = "Rp " + input.amount.toLocaleString("en-US");
    await NotificationService.create(userId, {
      title: `${typeLabel} Baru Dicatat`,
      message: `Transaksi "${input.description}" sebesar ${formattedAmount} telah dicatat pada kategori ${category.name}.`,
      type: input.type === "income" ? "success" : "info"
    });
    return { ...created, categoryName: category.name };
  }
  /**
   * Delete a transaction by ID, scoped to user.
   */
  static async delete(userId, id) {
    const [existing] = await db.select({ id: transactions.id }).from(transactions).where(and3(eq3(transactions.id, id), eq3(transactions.userId, userId))).limit(1);
    if (!existing) {
      throw new AppError("Transaksi tidak ditemukan", 404);
    }
    await db.delete(transactions).where(and3(eq3(transactions.id, id), eq3(transactions.userId, userId)));
  }
  /**
   * Export transactions as CSV string.
   * Uses the same filtering as getAll but returns all matching rows.
   */
  static async exportCSV(userId, filters) {
    const conditions = [eq3(transactions.userId, userId)];
    if (filters.type) {
      conditions.push(eq3(transactions.type, filters.type));
    }
    if (filters.categoryId) {
      conditions.push(eq3(transactions.categoryId, filters.categoryId));
    }
    if (filters.startDate) {
      conditions.push(gte(transactions.date, new Date(filters.startDate)));
    }
    if (filters.endDate) {
      conditions.push(
        lte(transactions.date, /* @__PURE__ */ new Date(filters.endDate + "T23:59:59"))
      );
    }
    if (filters.search) {
      conditions.push(ilike(transactions.description, `%${filters.search}%`));
    }
    const rows = await db.select({
      id: transactions.id,
      date: transactions.date,
      categoryName: categories.name,
      description: transactions.description,
      type: transactions.type,
      amount: transactions.amount
    }).from(transactions).leftJoin(categories, eq3(transactions.categoryId, categories.id)).where(and3(...conditions)).orderBy(desc2(transactions.date));
    if (rows.length === 0) {
      throw new AppError("Tidak ada data riwayat kas untuk diekspor", 404);
    }
    const header = "No,ID,Tanggal,Kategori,Catatan,Tipe,Nominal";
    const csvRows = rows.map((row, idx) => {
      const typeLabel = row.type === "income" ? "Pemasukan" : "Pengeluaran";
      const dateStr = row.date instanceof Date ? row.date.toISOString().split("T")[0] : String(row.date);
      const desc3 = row.description.replace(/"/g, '""');
      return `"${idx + 1}","${row.id}","${dateStr}","${row.categoryName || ""}","${desc3}","${typeLabel}","${row.amount}"`;
    });
    return [header, ...csvRows].join("\n");
  }
};

// src/routes/transaction.routes.ts
var router3 = Router3();
router3.use(requireAuth);
router3.get("/", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const filters = transactionFiltersSchema.parse(req.query);
    const result = await TransactionService.getAll(userId, filters);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
router3.get("/recent", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 5;
    const data = await TransactionService.getRecent(userId, limit);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});
router3.get("/export/csv", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const { type, categoryId, startDate, endDate, search } = req.query;
    const csv = await TransactionService.exportCSV(userId, {
      type,
      categoryId,
      startDate,
      endDate,
      search
    });
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=riwayat_kas_nexus_${Date.now()}.csv`
    );
    res.send(csv);
  } catch (error) {
    next(error);
  }
});
router3.post("/", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const input = createTransactionSchema.parse(req.body);
    const transaction = await TransactionService.create(userId, input);
    res.status(201).json({ data: transaction });
  } catch (error) {
    next(error);
  }
});
router3.delete("/:id", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const { id } = req.params;
    await TransactionService.delete(userId, id);
    res.json({ message: "Transaksi berhasil dihapus" });
  } catch (error) {
    next(error);
  }
});
var transaction_routes_default = router3;

// src/routes/dashboard.routes.ts
import { Router as Router4 } from "express";

// src/services/dashboard.service.ts
import { eq as eq4, and as and4, sql as sql3, gte as gte2, lt } from "drizzle-orm";
var DashboardService = class {
  /**
   * Compute the MonthSummary for a given user and month (YYYY-MM format).
   * Aggregates income/expense totals, computes growth vs prior month,
   * and breaks the month into 4 weekly cashflow buckets.
   */
  static async getSummary(userId, monthKey) {
    const [yearStr, monthStr] = monthKey.split("-");
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);
    const startOfMonth = new Date(year, month - 1, 1);
    const startOfNextMonth = new Date(year, month, 1);
    const startOfPrevMonth = new Date(year, month - 2, 1);
    const currentTotals = await db.select({
      type: transactions.type,
      total: sql3`COALESCE(SUM(${transactions.amount}), 0)`
    }).from(transactions).where(
      and4(
        eq4(transactions.userId, userId),
        gte2(transactions.date, startOfMonth),
        lt(transactions.date, startOfNextMonth)
      )
    ).groupBy(transactions.type);
    let totalIncome = 0;
    let totalExpense = 0;
    for (const row of currentTotals) {
      if (row.type === "income") totalIncome = Number(row.total);
      if (row.type === "expense") totalExpense = Number(row.total);
    }
    const totalBalance = totalIncome - totalExpense;
    const prevTotals = await db.select({
      type: transactions.type,
      total: sql3`COALESCE(SUM(${transactions.amount}), 0)`
    }).from(transactions).where(
      and4(
        eq4(transactions.userId, userId),
        gte2(transactions.date, startOfPrevMonth),
        lt(transactions.date, startOfMonth)
      )
    ).groupBy(transactions.type);
    let prevIncome = 0;
    let prevExpense = 0;
    for (const row of prevTotals) {
      if (row.type === "income") prevIncome = Number(row.total);
      if (row.type === "expense") prevExpense = Number(row.total);
    }
    const prevBalance = prevIncome - prevExpense;
    const balanceGrowthPercent = prevBalance !== 0 ? parseFloat(((totalBalance - prevBalance) / Math.abs(prevBalance) * 100).toFixed(1)) : totalBalance > 0 ? 100 : 0;
    const grandTotal = totalIncome + totalExpense;
    const incomeProgressPercent = grandTotal > 0 ? Math.min(100, Math.round(totalIncome / grandTotal * 100)) : 0;
    const expenseProgressPercent = grandTotal > 0 ? Math.min(100, Math.round(totalExpense / grandTotal * 100)) : 0;
    const weeklyCashflow = await this.getWeeklyCashflow(
      userId,
      startOfMonth,
      startOfNextMonth,
      totalIncome,
      totalExpense
    );
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const label = `${monthNames[month - 1]} ${year}`;
    return {
      monthKey,
      label,
      totalBalance,
      totalIncome,
      totalExpense,
      balanceGrowthPercent,
      incomeProgressPercent,
      expenseProgressPercent,
      weeklyCashflow
    };
  }
  /**
   * Compute weekly cashflow by splitting the month into 4 buckets:
   * Week 1: days 1-7, Week 2: 8-14, Week 3: 15-21, Week 4: 22-end.
   */
  static async getWeeklyCashflow(userId, startOfMonth, startOfNextMonth, monthIncome, monthExpense) {
    const year = startOfMonth.getFullYear();
    const month = startOfMonth.getMonth();
    const weekBoundaries = [
      { label: "Minggu 1", start: new Date(year, month, 1), end: new Date(year, month, 8) },
      { label: "Minggu 2", start: new Date(year, month, 8), end: new Date(year, month, 15) },
      { label: "Minggu 3", start: new Date(year, month, 15), end: new Date(year, month, 22) },
      { label: "Minggu 4", start: new Date(year, month, 22), end: startOfNextMonth }
    ];
    const weeks = [];
    for (const week of weekBoundaries) {
      const weekTotals = await db.select({
        type: transactions.type,
        total: sql3`COALESCE(SUM(${transactions.amount}), 0)`
      }).from(transactions).where(
        and4(
          eq4(transactions.userId, userId),
          gte2(transactions.date, week.start),
          lt(transactions.date, week.end)
        )
      ).groupBy(transactions.type);
      let weekIncome = 0;
      let weekExpense = 0;
      for (const row of weekTotals) {
        if (row.type === "income") weekIncome = Number(row.total);
        if (row.type === "expense") weekExpense = Number(row.total);
      }
      weeks.push({
        weekLabel: week.label,
        income: weekIncome,
        expense: weekExpense,
        incomePercent: monthIncome > 0 ? Math.min(100, Math.round(weekIncome / monthIncome * 100)) : 0,
        expensePercent: monthExpense > 0 ? Math.min(100, Math.round(weekExpense / monthExpense * 100)) : 0
      });
    }
    return weeks;
  }
  /**
   * Get a list of months that have transaction data for a user.
   */
  static async getAvailableMonths(userId) {
    const result = await db.select({
      monthKey: sql3`TO_CHAR(${transactions.date}, 'YYYY-MM')`
    }).from(transactions).where(eq4(transactions.userId, userId)).groupBy(sql3`TO_CHAR(${transactions.date}, 'YYYY-MM')`).orderBy(sql3`TO_CHAR(${transactions.date}, 'YYYY-MM') DESC`);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return result.map((row) => {
      const [y, m] = row.monthKey.split("-");
      return {
        key: row.monthKey,
        label: `${monthNames[parseInt(m, 10) - 1]} ${y}`
      };
    });
  }
};

// src/routes/dashboard.routes.ts
var router4 = Router4();
router4.use(requireAuth);
router4.get("/summary", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const { month } = dashboardSummarySchema.parse(req.query);
    const summary = await DashboardService.getSummary(userId, month);
    res.json({ data: summary });
  } catch (error) {
    next(error);
  }
});
router4.get("/months", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const months = await DashboardService.getAvailableMonths(userId);
    res.json({ data: months });
  } catch (error) {
    next(error);
  }
});
var dashboard_routes_default = router4;

// src/routes/notification.routes.ts
import { Router as Router5 } from "express";
var router5 = Router5();
router5.use(requireAuth);
router5.get("/", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    const notifications2 = await NotificationService.getAll(userId);
    res.json({ data: notifications2 });
  } catch (error) {
    next(error);
  }
});
router5.patch("/read-all", async (req, res, next) => {
  try {
    const userId = getUserId(req);
    await NotificationService.markAllAsRead(userId);
    res.json({ message: "Semua pemberitahuan ditandai dibaca" });
  } catch (error) {
    next(error);
  }
});
var notification_routes_default = router5;

// src/index.ts
var app = express();
var PORT = parseInt(process.env.PORT || "3001", 10);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    uptime: process.uptime()
  });
});
app.use(auth_routes_default);
app.use("/api/categories", category_routes_default);
app.use("/api/transactions", transaction_routes_default);
app.use("/api/dashboard", dashboard_routes_default);
app.use("/api/notifications", notification_routes_default);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`
\u{1F680} Nexus Finance API running at http://localhost:${PORT}`);
  console.log(`   Health check:  http://localhost:${PORT}/api/health`);
  console.log(`   Auth:          http://localhost:${PORT}/api/auth/*`);
  console.log(`   Categories:    http://localhost:${PORT}/api/categories`);
  console.log(`   Transactions:  http://localhost:${PORT}/api/transactions`);
  console.log(`   Dashboard:     http://localhost:${PORT}/api/dashboard/summary`);
  console.log(`   Notifications: http://localhost:${PORT}/api/notifications
`);
});
var index_default = app;
export {
  index_default as default
};
