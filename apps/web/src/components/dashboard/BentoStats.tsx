import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { formatRupiahCompact } from '../../utils/formatters';

export const BentoStats: React.FC = () => {
  const { summary } = useFinance();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Saldo Card */}
      <div className="glass-panel p-md rounded-xl glow-primary relative overflow-hidden group glass-card-hover">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="flex justify-between items-start mb-sm relative z-10">
          <p className="font-label-md text-label-md text-on-surface-variant">Total Saldo</p>
          <span className="material-symbols-outlined text-primary-container">account_balance_wallet</span>
        </div>
        <h3 className="font-display-lg text-display-lg text-on-surface mb-xs relative z-10">
          {formatRupiahCompact(summary.totalBalance)}
        </h3>
        <div className="flex items-center gap-xs relative z-10">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20">
            <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span> +{summary.balanceGrowthPercent}%
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">vs last month</span>
        </div>
      </div>

      {/* Masuk Card */}
      <div className="glass-panel p-md rounded-xl glow-success relative overflow-hidden group glass-card-hover">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="flex justify-between items-start mb-sm relative z-10">
          <p className="font-label-md text-label-md text-on-surface-variant">Pemasukan (Masuk)</p>
          <span className="material-symbols-outlined text-secondary">arrow_downward</span>
        </div>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-xs relative z-10">
          {formatRupiahCompact(summary.totalIncome)}
        </h3>
        <div className="w-full bg-[#0a0a0f] h-1.5 rounded-full mt-sm overflow-hidden relative z-10 border border-[#2a2a3e]/40">
          <div
            className="bg-secondary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(68,243,169,0.5)]"
            style={{ width: `${summary.incomeProgressPercent}%` }}
          />
        </div>
      </div>

      {/* Keluar Card */}
      <div className="glass-panel p-md rounded-xl glow-danger relative overflow-hidden group glass-card-hover">
        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="flex justify-between items-start mb-sm relative z-10">
          <p className="font-label-md text-label-md text-on-surface-variant">Pengeluaran (Keluar)</p>
          <span className="material-symbols-outlined text-tertiary">arrow_upward</span>
        </div>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-xs relative z-10">
          {formatRupiahCompact(summary.totalExpense)}
        </h3>
        <div className="w-full bg-[#0a0a0f] h-1.5 rounded-full mt-sm overflow-hidden relative z-10 border border-[#2a2a3e]/40">
          <div
            className="bg-tertiary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(255,179,176,0.4)]"
            style={{ width: `${summary.expenseProgressPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
};
