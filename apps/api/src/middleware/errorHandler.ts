import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

/**
 * Application-level error class with HTTP status codes.
 */
export class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

/**
 * Global Express error handler.
 * Handles Zod validation errors, AppErrors, and unexpected errors.
 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Zod validation errors
  if (err instanceof ZodError) {
    const messages = err.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    res.status(400).json({
      error: 'Validation failed',
      details: messages,
    });
    return;
  }

  // Known application errors
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.message,
    });
    return;
  }

  // Unexpected errors
  console.error('[Error Handler] Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
  });
}
