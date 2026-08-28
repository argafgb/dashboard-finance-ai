import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { formatRupiah } from '../../utils/formatters';

export const CashflowChart: React.FC = () => {
  const { summary } = useFinance();

  return (
    <section className="glass-panel p-md rounded-xl">
      <div className="flex items-center justify-between mb-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">Arus Kas</h2>
        <div className="flex items-center gap-sm">
          <div className="flex items-center gap-xs">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_rgba(68,243,169,0.8)]" />
            <span className="font-body-sm text-body-sm text-on-surface-variant">Pemasukan</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_6px_rgba(255,179,176,0.8)]" />
            <span className="font-body-sm text-body-sm text-on-surface-variant">Pengeluaran</span>
          </div>
        </div>
      </div>

      {/* Horizontal Comparative Bar Chart */}
      <div className="space-y-md font-tabular-nums text-tabular-nums text-sm">
        {summary.weeklyCashflow.map((week, idx) => (
          <div key={idx} className="flex items-center gap-sm group">
            {/* Week label */}
            <div className="w-16 md:w-20 text-right text-on-surface-variant font-medium text-xs md:text-sm group-hover:text-on-surface transition-colors">
              {week.weekLabel}
            </div>

            {/* Bars container */}
            <div className="flex-1 flex flex-col gap-1.5 bg-[#0a0a0f]/40 p-1.5 rounded-lg border border-[#2a2a3e]/30">
              {/* Income bar */}
              <div className="relative flex items-center">
                <div
                  className="h-2 rounded-r-full bg-secondary transition-all duration-700 ease-out group-hover:opacity-90 shadow-[0_0_8px_rgba(68,243,169,0.3)]"
                  style={{ width: `${Math.max(5, week.incomePercent)}%` }}
                  title={`Pemasukan: ${formatRupiah(week.income)} (${week.incomePercent}%)`}
                />
                <span className="ml-2 text-[10px] text-on-surface-variant/70 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                  {week.incomePercent}% ({formatRupiah(week.income)})
                </span>
              </div>

              {/* Expense bar */}
              <div className="relative flex items-center">
                <div
                  className="h-2 rounded-r-full bg-tertiary transition-all duration-700 ease-out group-hover:opacity-90 shadow-[0_0_8px_rgba(255,179,176,0.3)]"
                  style={{ width: `${Math.max(5, week.expensePercent)}%` }}
                  title={`Pengeluaran: ${formatRupiah(week.expense)} (${week.expensePercent}%)`}
                />
                <span className="ml-2 text-[10px] text-on-surface-variant/70 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                  {week.expensePercent}% ({formatRupiah(week.expense)})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
