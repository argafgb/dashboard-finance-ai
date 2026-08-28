import { Router, type Request, type Response, type NextFunction } from 'express';
import { requireAuth, getUserId } from '../middleware/auth.js';
import { NotificationService } from '../services/notification.service.js';

const router = Router();

// All notification routes require authentication
router.use(requireAuth);

/**
 * GET /api/notifications
 * List all notifications for the authenticated user.
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req);

    const notifications = await NotificationService.getAll(userId);
    res.json({ data: notifications });
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/notifications/read-all
 * Mark all notifications as read.
 */
router.patch('/read-all', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req);

    await NotificationService.markAllAsRead(userId);
    res.json({ message: 'Semua pemberitahuan ditandai dibaca' });
  } catch (error) {
    next(error);
  }
});

export default router;
