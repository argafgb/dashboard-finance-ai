import { Router } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../lib/auth.js';

const router = Router();

/**
 * Mount Better Auth's handler at /api/auth/*.
 * Better Auth handles: sign-up, sign-in, sign-out, get-session, etc.
 */
router.use('/api/auth', toNodeHandler(auth));

export default router;
