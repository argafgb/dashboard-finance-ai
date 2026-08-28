export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  icon?: string;
  color?: string;
  createdAt?: string;
}

export interface Transaction {
  id: string;
  date: string; // ISO string e.g. "2023-08-28T14:30:00" or "2023-08-28"
  type: TransactionType;
  categoryId: string;
  categoryName?: string;
  amount: number;
  description: string;
  icon?: string;
  createdAt?: string;
}

export interface WeeklyCashflow {
  weekLabel: string; // "Minggu 1", "Minggu 2", etc.
  income: number;
  expense: number;
  incomePercent: number; // 0 - 100 for bar width
  expensePercent: number; // 0 - 100 for bar width
}

export interface MonthSummary {
  monthKey: string; // e.g. "2023-08"
  label: string; // "August 2023"
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
  balanceGrowthPercent: number;
  incomeProgressPercent: number;
  expenseProgressPercent: number;
  weeklyCashflow: WeeklyCashflow[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  type: 'info' | 'success' | 'warning';
}
