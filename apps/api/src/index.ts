import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middleware/errorHandler.js';

// Route imports
import authRoutes from './routes/auth.routes.js';
import categoryRoutes from './routes/category.routes.js';
import transactionRoutes from './routes/transaction.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import notificationRoutes from './routes/notification.routes.js';

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// ─── Global Middleware ───────────────────────────────────────────────────────

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// ─── Health Check ────────────────────────────────────────────────────────────

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ─── Routes ──────────────────────────────────────────────────────────────────

// Auth routes — Better Auth handler (must be mounted before other /api routes
// since it uses a catch-all pattern)
app.use(authRoutes);

// Application routes
app.use('/api/categories', categoryRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/notifications', notificationRoutes);

// ─── Error Handling ──────────────────────────────────────────────────────────

app.use(errorHandler);

// ─── Start Server ────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`\n🚀 Nexus Finance API running at http://localhost:${PORT}`);
  console.log(`   Health check:  http://localhost:${PORT}/api/health`);
  console.log(`   Auth:          http://localhost:${PORT}/api/auth/*`);
  console.log(`   Categories:    http://localhost:${PORT}/api/categories`);
  console.log(`   Transactions:  http://localhost:${PORT}/api/transactions`);
  console.log(`   Dashboard:     http://localhost:${PORT}/api/dashboard/summary`);
  console.log(`   Notifications: http://localhost:${PORT}/api/notifications\n`);
});

export default app;
