import { Router, type Request, type Response, type NextFunction } from 'express';
import { requireAuth, requireRole, getUserId } from '../middleware/auth.js';
import { TransactionService } from '../services/transaction.service.js';
import {
  createTransactionSchema,
  transactionFiltersSchema,
} from '../lib/validation.js';

const router = Router();

// All transaction routes require authentication
router.use(requireAuth);

/**
 * GET /api/transactions
 * List transactions with pagination and filters.
 */
router.get(
  '/',
  requireRole(['admin', 'staff', 'viewer']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const filters = transactionFiltersSchema.parse(req.query);

      const result = await TransactionService.getAll(userId, filters);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/transactions/recent
 * Get the 5 most recent transactions.
 */
router.get(
  '/recent',
  requireRole(['admin', 'staff', 'viewer']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 5;

      const data = await TransactionService.getRecent(userId, limit);
      res.json({ data });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/transactions/export/csv
 * Export transactions as CSV download.
 */
router.get(
  '/export/csv',
  requireRole(['admin', 'viewer']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const { type, categoryId, startDate, endDate, search } = req.query;

      const csv = await TransactionService.exportCSV(userId, {
        type: type as 'income' | 'expense' | undefined,
        categoryId: categoryId as string | undefined,
        startDate: startDate as string | undefined,
        endDate: endDate as string | undefined,
        search: search as string | undefined,
      });

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=riwayat_kas_nexus_${Date.now()}.csv`
      );
      res.send(csv);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/transactions
 * Create a new transaction.
 */
router.post(
  '/',
  requireRole(['admin', 'staff']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const input = createTransactionSchema.parse(req.body);

      const transaction = await TransactionService.create(userId, input);
      res.status(201).json({ data: transaction });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE /api/transactions/:id
 * Delete a transaction by ID.
 */
router.delete(
  '/:id',
  requireRole(['admin']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const { id } = req.params;

      await TransactionService.delete(userId, id);
      res.json({ message: 'Transaksi berhasil dihapus' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
