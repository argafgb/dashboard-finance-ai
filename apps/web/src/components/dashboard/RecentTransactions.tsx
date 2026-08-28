import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { formatRupiah, formatDateTime } from '../../utils/formatters';

export const RecentTransactions: React.FC = () => {
  const { recentTransactions, setActiveTab } = useFinance();

  const getTransactionIcon = (iconName?: string, type?: 'income' | 'expense') => {
    if (iconName) return iconName;
    return type === 'income' ? 'payments' : 'shopping_cart';
  };

  return (
    <section className="glass-panel rounded-xl overflow-hidden">
      <div className="flex items-center justify-between p-md border-b border-[#2a2a3e]">
        <h2 className="font-headline-md text-headline-md text-on-surface">Transaksi Terakhir</h2>
        <button
          onClick={() => setActiveTab('ledger')}
          className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors flex items-center gap-xs cursor-pointer group"
        >
          Lihat Semua{' '}
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-body-md text-body-md min-w-[600px]">
          <thead className="bg-[#0a0a0f]/50 border-b border-[#2a2a3e] font-label-md text-label-md text-on-surface-variant">
            <tr>
              <th className="px-md py-sm font-normal">Deskripsi</th>
              <th className="px-md py-sm font-normal">Kategori</th>
              <th className="px-md py-sm font-normal">Tanggal</th>
              <th className="px-md py-sm font-normal text-right">Jumlah</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2a3e]/50 font-tabular-nums text-tabular-nums text-sm">
            {recentTransactions.map((tx) => {
              const isIncome = tx.type === 'income';
              const icon = getTransactionIcon(tx.icon, tx.type);

              return (
                <tr key={tx.id} className="hover:bg-[#1b1b20] transition-colors group">
                  {/* Description + Icon */}
                  <td className="px-md py-sm flex items-center gap-sm">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        isIncome ? 'bg-secondary/10 text-secondary' : 'bg-tertiary/10 text-tertiary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">{icon}</span>
                    </div>
                    <span className="text-on-surface truncate font-medium group-hover:text-primary-fixed transition-colors">
                      {tx.description}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-md py-sm text-on-surface-variant">{tx.categoryName || 'Umum'}</td>

                  {/* Date */}
                  <td className="px-md py-sm text-on-surface-variant">{formatDateTime(tx.date)}</td>

                  {/* Amount */}
                  <td
                    className={`px-md py-sm text-right font-medium ${
                      isIncome ? 'text-secondary' : 'text-tertiary'
                    }`}
                  >
                    {formatRupiah(tx.amount, true)}
                  </td>
                </tr>
              );
            })}

            {recentTransactions.length === 0 && (
              <tr>
                <td colSpan={4} className="px-md py-8 text-center text-on-surface-variant text-sm">
                  Belum ada riwayat transaksi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
