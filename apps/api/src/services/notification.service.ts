import { eq, and, desc } from 'drizzle-orm';
import { db } from '../db/index.js';
import { notifications } from '../db/schema.js';
import type { CreateNotificationInput } from '../lib/validation.js';

export class NotificationService {
  /**
   * Get all notifications for a user, ordered by newest first.
   */
  static async getAll(userId: string) {
    return db
      .select()
      .from(notifications)
      .where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.createdAt));
  }

  /**
   * Mark all notifications as read for a user.
   */
  static async markAllAsRead(userId: string) {
    await db
      .update(notifications)
      .set({ isRead: true })
      .where(
        and(
          eq(notifications.userId, userId),
          eq(notifications.isRead, false)
        )
      );
  }

  /**
   * Create a new notification.
   */
  static async create(userId: string, input: CreateNotificationInput) {
    const [created] = await db
      .insert(notifications)
      .values({
        userId,
        title: input.title,
        message: input.message,
        type: input.type,
      })
      .returning();

    return created;
  }
}
