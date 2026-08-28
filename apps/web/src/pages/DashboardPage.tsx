import React from 'react';
import { BentoStats } from '../components/dashboard/BentoStats';
import { CashflowChart } from '../components/dashboard/CashflowChart';
import { RecentTransactions } from '../components/dashboard/RecentTransactions';

export const DashboardPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-xl">
      {/* Top Stats Row (Bento Style) */}
      <BentoStats />

      {/* Middle Section: Cashflow Chart */}
      <CashflowChart />

      {/* Bottom Section: Transactions Table */}
      <RecentTransactions />

      {/* Bottom padding */}
      <div className="h-lg" />
    </div>
  );
};
