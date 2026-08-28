import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { formatRupiah, formatDateTime } from '../utils/formatters';
import { Transaction, Category } from '@nexus/shared-types';

export const TransactionsPage: React.FC = () => {
  const { filteredTransactions, openAddModal, deleteTransaction, categories, userRole } = useFinance();
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const displayedTransactions = filteredTransactions.filter((tx) => {
    if (filterType !== 'all' && tx.type !== filterType) return false;
    if (selectedCat !== 'all' && tx.categoryId !== selectedCat) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        tx.description.toLowerCase().includes(q) ||
        (tx.categoryName && tx.categoryName.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-md">
      {/* Header with CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Manajemen Transaksi</h2>
          <p className="text-on-surface-variant text-xs md:text-sm">
            Kelola pencatatan kas masuk dan kas keluar dengan pembukuan real-time.
          </p>
        </div>
        {userRole !== 'viewer' && (
          <button
            onClick={openAddModal}
            className="bg-primary-container text-[#0a0a0f] font-label-md text-sm py-2 px-4 rounded-lg glow-primary font-semibold hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
          >
            <span className="material-symbols-outlined text-[18px]">add</span> Tambah Transaksi
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-md rounded-xl flex flex-col md:flex-row items-stretch md:items-center gap-md justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Cari transaksi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 pl-10 pr-4 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-sm flex-wrap">
          {/* Type Filter Buttons */}
          <div className="flex bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg p-0.5">
            {(['all', 'income', 'expense'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1.5 rounded text-xs font-label-md capitalize transition-colors cursor-pointer ${
                  filterType === t
                    ? 'bg-surface-container-high text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {t === 'all' ? 'Semua' : t === 'income' ? 'Masuk' : 'Keluar'}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-1.5 px-3 text-xs text-on-surface focus:outline-none focus:border-primary-container cursor-pointer"
          >
            <option value="all">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <section className="glass-panel rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-md text-body-md min-w-[700px]">
            <thead className="bg-[#0a0a0f]/50 border-b border-[#2a2a3e] font-label-md text-label-md text-on-surface-variant">
              <tr>
                <th className="px-md py-sm font-normal">Deskripsi</th>
                <th className="px-md py-sm font-normal">Kategori</th>
                <th className="px-md py-sm font-normal">Tanggal</th>
                <th className="px-md py-sm font-normal text-right">Jumlah</th>
                {userRole === 'admin' && <th className="px-md py-sm font-normal text-center w-16">Aksi</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a3e]/50 font-tabular-nums text-tabular-nums text-sm">
              {displayedTransactions.map((tx) => {
                const isIncome = tx.type === 'income';
                return (
                  <tr key={tx.id} className="hover:bg-[#1b1b20] transition-colors group">
                    <td className="px-md py-sm flex items-center gap-sm">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isIncome ? 'bg-secondary/10 text-secondary' : 'bg-tertiary/10 text-tertiary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {tx.icon || (isIncome ? 'payments' : 'shopping_cart')}
                        </span>
                      </div>
                      <span className="text-on-surface font-medium truncate">{tx.description}</span>
                    </td>
                    <td className="px-md py-sm text-on-surface-variant">
                      <span className="inline-block px-2 py-0.5 rounded text-xs bg-surface-container border border-outline-variant/30">
                        {tx.categoryName || 'Umum'}
                      </span>
                    </td>
                    <td className="px-md py-sm text-on-surface-variant">{formatDateTime(tx.date)}</td>
                    <td
                      className={`px-md py-sm text-right font-medium ${
                        isIncome ? 'text-secondary' : 'text-tertiary'
                      }`}
                    >
                      {formatRupiah(tx.amount, true)}
                    </td>
                    {userRole === 'admin' && (
                      <td className="px-md py-sm text-center">
                        <button
                          onClick={() => deleteTransaction(tx.id)}
                          className="text-on-surface-variant hover:text-error p-1 rounded hover:bg-error-container/20 transition-colors cursor-pointer"
                          title="Hapus Transaksi"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}

              {displayedTransactions.length === 0 && (
                <tr>
                  <td colSpan={userRole === 'admin' ? 5 : 4} className="px-md py-12 text-center text-on-surface-variant text-sm">
                    Tidak ada transaksi yang cocok dengan filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="h-lg" />
    </div>
  );
};
