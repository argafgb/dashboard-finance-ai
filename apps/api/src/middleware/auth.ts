import type { Request, Response, NextFunction } from 'express';
import { auth } from '../lib/auth.js';
import { fromNodeHeaders } from 'better-auth/node';

/**
 * Express middleware that validates the session via Better Auth.
 * On success, attaches `req.user` and `req.session` for downstream handlers.
 * On failure, returns 401 Unauthorized.
 */
export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      res.status(401).json({ error: 'Unauthorized — please sign in' });
      return;
    }

    // Attach to request for downstream usage
    (req as any).user = session.user;
    (req as any).session = session.session;

    next();
  } catch (error) {
    console.error('[Auth Middleware] Session validation failed:', error);
    res.status(401).json({ error: 'Unauthorized — invalid session' });
  }
}

/**
 * Express middleware that checks if the authenticated user has one of the allowed roles.
 * Must be used AFTER `requireAuth`.
 */
export function requireRole(allowedRoles: ('admin' | 'staff' | 'viewer')[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;
    if (!user) {
      res.status(401).json({ error: 'Unauthorized — please sign in' });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      res.status(403).json({
        error: `Forbidden — you do not have permission. Required role: ${allowedRoles.join(' or ')}`,
      });
      return;
    }

    next();
  };
}

/**
 * Helper to extract the authenticated user ID from the request.
 * Must be used after `requireAuth` middleware.
 */
export function getUserId(req: Request): string {
  const user = (req as any).user;
  if (!user?.id) {
    throw new Error('User not found on request — did you forget requireAuth middleware?');
  }
  return user.id;
}
