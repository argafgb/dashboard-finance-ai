import { z } from 'zod';

// ─── Category Schemas ───────────────────────────────────────────────────────

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(1, 'Category name is required')
    .max(100, 'Category name must be 100 characters or less')
    .trim(),
  type: z.enum(['income', 'expense'], {
    errorMap: () => ({ message: "Type must be 'income' or 'expense'" }),
  }),
  icon: z.string().max(50).optional().default('category'),
  color: z.string().max(20).optional().default('#a7c8ff'),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;

// ─── Transaction Schemas ────────────────────────────────────────────────────

export const createTransactionSchema = z.object({
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  type: z.enum(['income', 'expense'], {
    errorMap: () => ({ message: "Type must be 'income' or 'expense'" }),
  }),
  categoryId: z.string().uuid('Invalid category ID'),
  amount: z
    .number()
    .int('Amount must be an integer')
    .positive('Amount must be positive'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(500, 'Description must be 500 characters or less')
    .trim(),
  icon: z.string().max(50).optional().default('payments'),
});

export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;

// ─── Transaction Filter Schemas ─────────────────────────────────────────────

export const transactionFiltersSchema = z.object({
  type: z.enum(['income', 'expense']).optional(),
  categoryId: z.string().uuid().optional(),
  startDate: z
    .string()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Invalid start date',
    })
    .optional(),
  endDate: z
    .string()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Invalid end date',
    })
    .optional(),
  search: z.string().max(200).optional(),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
});

export type TransactionFilters = z.infer<typeof transactionFiltersSchema>;

// ─── Dashboard Schemas ──────────────────────────────────────────────────────

export const dashboardSummarySchema = z.object({
  month: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'Month must be in YYYY-MM format'),
});

export type DashboardSummaryQuery = z.infer<typeof dashboardSummarySchema>;

// ─── Notification Schemas ───────────────────────────────────────────────────

export const createNotificationSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must be 200 characters or less')
    .trim(),
  message: z.string().min(1, 'Message is required').trim(),
  type: z.enum(['info', 'success', 'warning']).optional().default('info'),
});

export type CreateNotificationInput = z.infer<typeof createNotificationSchema>;
