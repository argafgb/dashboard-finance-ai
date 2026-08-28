import { Router, type Request, type Response, type NextFunction } from 'express';
import { requireAuth, requireRole, getUserId } from '../middleware/auth.js';
import { CategoryService } from '../services/category.service.js';
import { createCategorySchema } from '../lib/validation.js';

const router = Router();

// All category routes require authentication
router.use(requireAuth);

/**
 * GET /api/categories
 * List all categories for the authenticated user.
 * Optional query param: ?type=income|expense
 */
router.get(
  '/',
  requireRole(['admin', 'staff', 'viewer']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req);
    const type = req.query.type as 'income' | 'expense' | undefined;

    const categories = await CategoryService.getAll(userId, type);
    res.json({ data: categories });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/categories
 * Create a new category.
 */
router.post(
  '/',
  requireRole(['admin']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const input = createCategorySchema.parse(req.body);

      const category = await CategoryService.create(userId, input);
      res.status(201).json({ data: category });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE /api/categories/:id
 * Delete a category by ID.
 */
router.delete(
  '/:id',
  requireRole(['admin']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = getUserId(req);
      const { id } = req.params;

      await CategoryService.delete(userId, id);
      res.json({ message: 'Kategori berhasil dihapus' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
