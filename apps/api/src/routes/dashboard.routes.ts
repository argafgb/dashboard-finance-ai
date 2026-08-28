import { Router, type Request, type Response, type NextFunction } from 'express';
import { requireAuth, requireRole, getUserId } from '../middleware/auth.js';
import { DashboardService } from '../services/dashboard.service.js';
import { dashboardSummarySchema } from '../lib/validation.js';

const router = Router();

// All dashboard routes require authentication
router.use(requireAuth);

/**
 * GET /api/dashboard/summary?month=YYYY-MM
 * Get the monthly financial summary for the authenticated user.
 */
router.get(
  '/summary',
  requireRole(['admin', 'viewer']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req);
    const { month } = dashboardSummarySchema.parse(req.query);

    const summary = await DashboardService.getSummary(userId, month);
    res.json({ data: summary });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/dashboard/months
 * Get the list of months that have transaction data.
 */
router.get(
  '/months',
  requireRole(['admin', 'viewer']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);

      const months = await DashboardService.getAvailableMonths(userId);
      res.json({ data: months });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
