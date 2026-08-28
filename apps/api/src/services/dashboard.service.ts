import { eq, and, sql, gte, lt } from 'drizzle-orm';
import { db } from '../db/index.js';
import { transactions } from '../db/schema.js';
import type { MonthSummary, WeeklyCashflow } from '@nexus/shared-types';

export class DashboardService {
  /**
   * Compute the MonthSummary for a given user and month (YYYY-MM format).
   * Aggregates income/expense totals, computes growth vs prior month,
   * and breaks the month into 4 weekly cashflow buckets.
   */
  static async getSummary(userId: string, monthKey: string): Promise<MonthSummary> {
    const [yearStr, monthStr] = monthKey.split('-');
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);

    // Current month date range
    const startOfMonth = new Date(year, month - 1, 1);
    const startOfNextMonth = new Date(year, month, 1);

    // Previous month date range (for growth comparison)
    const startOfPrevMonth = new Date(year, month - 2, 1);

    // ─── Current month totals ─────────────────────────────────────────
    const currentTotals = await db
      .select({
        type: transactions.type,
        total: sql<number>`COALESCE(SUM(${transactions.amount}), 0)`,
      })
      .from(transactions)
      .where(
        and(
          eq(transactions.userId, userId),
          gte(transactions.date, startOfMonth),
          lt(transactions.date, startOfNextMonth)
        )
      )
      .groupBy(transactions.type);

    let totalIncome = 0;
    let totalExpense = 0;
    for (const row of currentTotals) {
      if (row.type === 'income') totalIncome = Number(row.total);
      if (row.type === 'expense') totalExpense = Number(row.total);
    }
    const totalBalance = totalIncome - totalExpense;

    // ─── Previous month balance (for growth %) ──────────────────────
    const prevTotals = await db
      .select({
        type: transactions.type,
        total: sql<number>`COALESCE(SUM(${transactions.amount}), 0)`,
      })
      .from(transactions)
      .where(
        and(
          eq(transactions.userId, userId),
          gte(transactions.date, startOfPrevMonth),
          lt(transactions.date, startOfMonth)
        )
      )
      .groupBy(transactions.type);

    let prevIncome = 0;
    let prevExpense = 0;
    for (const row of prevTotals) {
      if (row.type === 'income') prevIncome = Number(row.total);
      if (row.type === 'expense') prevExpense = Number(row.total);
    }
    const prevBalance = prevIncome - prevExpense;

    const balanceGrowthPercent =
      prevBalance !== 0
        ? parseFloat((((totalBalance - prevBalance) / Math.abs(prevBalance)) * 100).toFixed(1))
        : totalBalance > 0
          ? 100
          : 0;

    // ─── Income / Expense progress % ───────────────────────────────
    const grandTotal = totalIncome + totalExpense;
    const incomeProgressPercent = grandTotal > 0
      ? Math.min(100, Math.round((totalIncome / grandTotal) * 100))
      : 0;
    const expenseProgressPercent = grandTotal > 0
      ? Math.min(100, Math.round((totalExpense / grandTotal) * 100))
      : 0;

    // ─── Weekly cashflow breakdown (4 weeks) ────────────────────────
    const weeklyCashflow = await this.getWeeklyCashflow(
      userId,
      startOfMonth,
      startOfNextMonth,
      totalIncome,
      totalExpense
    );

    // ─── Format month label ──────────────────────────────────────────
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const label = `${monthNames[month - 1]} ${year}`;

    return {
      monthKey,
      label,
      totalBalance,
      totalIncome,
      totalExpense,
      balanceGrowthPercent,
      incomeProgressPercent,
      expenseProgressPercent,
      weeklyCashflow,
    };
  }

  /**
   * Compute weekly cashflow by splitting the month into 4 buckets:
   * Week 1: days 1-7, Week 2: 8-14, Week 3: 15-21, Week 4: 22-end.
   */
  private static async getWeeklyCashflow(
    userId: string,
    startOfMonth: Date,
    startOfNextMonth: Date,
    monthIncome: number,
    monthExpense: number
  ): Promise<WeeklyCashflow[]> {
    const year = startOfMonth.getFullYear();
    const month = startOfMonth.getMonth();

    const weekBoundaries = [
      { label: 'Minggu 1', start: new Date(year, month, 1), end: new Date(year, month, 8) },
      { label: 'Minggu 2', start: new Date(year, month, 8), end: new Date(year, month, 15) },
      { label: 'Minggu 3', start: new Date(year, month, 15), end: new Date(year, month, 22) },
      { label: 'Minggu 4', start: new Date(year, month, 22), end: startOfNextMonth },
    ];

    const weeks: WeeklyCashflow[] = [];

    for (const week of weekBoundaries) {
      const weekTotals = await db
        .select({
          type: transactions.type,
          total: sql<number>`COALESCE(SUM(${transactions.amount}), 0)`,
        })
        .from(transactions)
        .where(
          and(
            eq(transactions.userId, userId),
            gte(transactions.date, week.start),
            lt(transactions.date, week.end)
          )
        )
        .groupBy(transactions.type);

      let weekIncome = 0;
      let weekExpense = 0;
      for (const row of weekTotals) {
        if (row.type === 'income') weekIncome = Number(row.total);
        if (row.type === 'expense') weekExpense = Number(row.total);
      }

      weeks.push({
        weekLabel: week.label,
        income: weekIncome,
        expense: weekExpense,
        incomePercent:
          monthIncome > 0
            ? Math.min(100, Math.round((weekIncome / monthIncome) * 100))
            : 0,
        expensePercent:
          monthExpense > 0
            ? Math.min(100, Math.round((weekExpense / monthExpense) * 100))
            : 0,
      });
    }

    return weeks;
  }

  /**
   * Get a list of months that have transaction data for a user.
   */
  static async getAvailableMonths(userId: string) {
    const result = await db
      .select({
        monthKey: sql<string>`TO_CHAR(${transactions.date}, 'YYYY-MM')`,
      })
      .from(transactions)
      .where(eq(transactions.userId, userId))
      .groupBy(sql`TO_CHAR(${transactions.date}, 'YYYY-MM')`)
      .orderBy(sql`TO_CHAR(${transactions.date}, 'YYYY-MM') DESC`);

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    return result.map((row) => {
      const [y, m] = row.monthKey.split('-');
      return {
        key: row.monthKey,
        label: `${monthNames[parseInt(m, 10) - 1]} ${y}`,
      };
    });
  }
}
