import { Category, Transaction, MonthSummary } from '@nexus/shared-types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat_jasa', name: 'Pendapatan Jasa', type: 'income', icon: 'payments', color: '#44f3a9' },
  { id: 'cat_inv', name: 'Investasi', type: 'income', icon: 'monitoring', color: '#54feb3' },
  { id: 'cat_dana', name: 'Pencairan Dana', type: 'income', icon: 'account_balance', color: '#a7c8ff' },
  { id: 'cat_lain', name: 'Pendapatan Lain-lain', type: 'income', icon: 'savings', color: '#27e199' },
  { id: 'cat_infra', name: 'Infrastruktur', type: 'expense', icon: 'shopping_cart', color: '#ffb3b0' },
  { id: 'cat_ops', name: 'Operasional', type: 'expense', icon: 'chair', color: '#fc6969' },
  { id: 'cat_gaji', name: 'Gaji Karyawan', type: 'expense', icon: 'badge', color: '#ffdad8' },
  { id: 'cat_mkt', name: 'Marketing', type: 'expense', icon: 'campaign', color: '#ffb4ab' },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx_1',
    description: 'Client Payment - TechCorp',
    categoryId: 'cat_jasa',
    categoryName: 'Pendapatan Jasa',
    date: '2023-08-28T14:30:00',
    amount: 15000000,
    type: 'income',
    icon: 'payments'
  },
  {
    id: 'tx_2',
    description: 'AWS Hosting Bill',
    categoryId: 'cat_infra',
    categoryName: 'Infrastruktur',
    date: '2023-08-27T09:15:00',
    amount: 3200000,
    type: 'expense',
    icon: 'shopping_cart'
  },
  {
    id: 'tx_3',
    description: 'Dividend Yield - Stock Port',
    categoryId: 'cat_inv',
    categoryName: 'Investasi',
    date: '2023-08-25T11:00:00',
    amount: 2450000,
    type: 'income',
    icon: 'monitoring'
  },
  {
    id: 'tx_4',
    description: 'Office Supplies Restock',
    categoryId: 'cat_ops',
    categoryName: 'Operasional',
    date: '2023-08-22T16:45:00',
    amount: 850000,
    type: 'expense',
    icon: 'chair'
  },
  {
    id: 'tx_5',
    description: 'Consulting Fee - StartupX',
    categoryId: 'cat_jasa',
    categoryName: 'Pendapatan Jasa',
    date: '2023-08-20T10:20:00',
    amount: 8500000,
    type: 'income',
    icon: 'payments'
  },
  {
    id: 'tx_6',
    description: 'Enterprise Retainer - CloudGlobal',
    categoryId: 'cat_jasa',
    categoryName: 'Pendapatan Jasa',
    date: '2023-08-16T15:00:00',
    amount: 28500000,
    type: 'income',
    icon: 'payments'
  },
  {
    id: 'tx_7',
    description: 'Cloudflare & DNS Security Suite',
    categoryId: 'cat_infra',
    categoryName: 'Infrastruktur',
    date: '2023-08-14T11:30:00',
    amount: 5250000,
    type: 'expense',
    icon: 'shopping_cart'
  },
  {
    id: 'tx_8',
    description: 'Performance Marketing Campaign Q3',
    categoryId: 'cat_mkt',
    categoryName: 'Marketing',
    date: '2023-08-10T13:45:00',
    amount: 18000000,
    type: 'expense',
    icon: 'campaign'
  },
  {
    id: 'tx_9',
    description: 'Mobile App Custom Development Milestone 2',
    categoryId: 'cat_jasa',
    categoryName: 'Pendapatan Jasa',
    date: '2023-08-05T09:00:00',
    amount: 18050000,
    type: 'income',
    icon: 'payments'
  }
];

export const AVAILABLE_MONTHS = [
  { key: '2023-08', label: 'August 2023' },
  { key: '2023-09', label: 'September 2023' },
  { key: '2023-10', label: 'October 2023' },
  { key: '2023-11', label: 'November 2023' },
  { key: '2023-12', label: 'December 2023' },
  { key: '2024-01', label: 'January 2024' }
];

export const DEFAULT_MONTH_SUMMARY: MonthSummary = {
  monthKey: '2023-08',
  label: 'August 2023',
  totalBalance: 45200000,
  totalIncome: 72500000,
  totalExpense: 27300000,
  balanceGrowthPercent: 12.5,
  incomeProgressPercent: 70,
  expenseProgressPercent: 30,
  weeklyCashflow: [
    { weekLabel: 'Minggu 1', income: 24000000, expense: 6000000, incomePercent: 80, expensePercent: 30 },
    { weekLabel: 'Minggu 2', income: 13500000, expense: 12000000, incomePercent: 45, expensePercent: 60 },
    { weekLabel: 'Minggu 3', income: 28500000, expense: 5000000, incomePercent: 95, expensePercent: 25 },
    { weekLabel: 'Minggu 4', income: 6500000, expense: 4300000, incomePercent: 65, expensePercent: 40 }
  ]
};
