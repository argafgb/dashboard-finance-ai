import React, { useState, useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { formatRupiah, formatDateTime } from '../utils/formatters';

export const LedgerPage: React.FC = () => {
  const { filteredTransactions, deleteTransaction, showToast, openAddModal } = useFinance();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter transactions
  const filteredList = useMemo(() => {
    return filteredTransactions.filter((tx) => {
      if (startDate && new Date(tx.date) < new Date(startDate)) return false;
      if (endDate && new Date(tx.date) > new Date(endDate + 'T23:59:59')) return false;
      if (typeFilter !== 'all' && tx.type !== typeFilter) return false;
      return true;
    });
  }, [filteredTransactions, startDate, endDate, typeFilter]);

  // Summaries
  const totalMasuk = useMemo(() => {
    return filteredList.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  }, [filteredList]);

  const totalKeluar = useMemo(() => {
    return filteredList.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  }, [filteredList]);

  const selisihNet = totalMasuk - totalKeluar;

  // Pagination logic
  const totalEntries = filteredList.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage) || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedList = useMemo(() => {
    const startIndex = (safePage - 1) * itemsPerPage;
    return filteredList.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredList, safePage, itemsPerPage]);

  const handleExportCSV = () => {
    if (filteredList.length === 0) {
      showToast('Tidak ada data riwayat kas untuk diekspor!', 'error');
      return;
    }

    const headers = ['No,ID,Tanggal,Kategori,Catatan,Tipe,Nominal'];
    const rows = filteredList.map((t, idx) => {
      const typeLabel = t.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
      return `"${idx + 1}","${t.id}","${t.date.split('T')[0]}","${t.categoryName || ''}","${t.description.replace(/"/g, '""')}","${typeLabel}","${t.amount}"`;
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `riwayat_kas_nexus_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Laporan Riwayat Kas berhasil diekspor ke CSV!', 'success');
  };

  const handleDelete = (id: string, desc: string) => {
    if (window.confirm(`Hapus transaksi "${desc}" dari buku kas?`)) {
      deleteTransaction(id);
      showToast(`Transaksi "${desc}" berhasil dihapus.`, 'info');
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-[#0a0a0f] select-none">
      <div className="max-w-7xl mx-auto space-y-lg">
        {/* Page Header & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md">
          <div>
            <div className="flex items-center gap-sm">
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Riwayat Kas
              </h1>
              <button
                onClick={handleExportCSV}
                title="Ekspor CSV"
                className="hidden sm:flex items-center gap-1 px-3 py-1 bg-surface-container border border-outline-variant rounded-lg text-primary text-xs font-label-md hover:border-primary-container transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                CSV
              </button>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Review and manage your financial ledger.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-sm items-center bg-surface-container-low p-sm border border-outline-variant rounded-lg">
            {/* Date inputs */}
            <div className="flex items-center space-x-xs">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px]">calendar_today</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-[#0a0a0f] border border-[#2a2a3e] text-on-surface text-body-sm rounded px-xs py-1 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none [color-scheme:dark]"
              />
              <span className="text-on-surface-variant text-body-sm">-</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-[#0a0a0f] border border-[#2a2a3e] text-on-surface text-body-sm rounded px-xs py-1 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none [color-scheme:dark]"
              />
            </div>

            <div className="h-6 w-px bg-outline-variant hidden md:block" />

            {/* Type selector */}
            <select
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value as any);
                setCurrentPage(1);
              }}
              className="bg-[#0a0a0f] border border-[#2a2a3e] text-on-surface text-body-sm rounded px-xs py-1 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none cursor-pointer"
            >
              <option value="all">Semua Tipe</option>
              <option value="income">Pemasukan</option>
              <option value="expense">Pengeluaran</option>
            </select>

            {/* Reset / Filter button */}
            {(startDate || endDate || typeFilter !== 'all') && (
              <button
                onClick={() => {
                  setStartDate('');
                  setEndDate('');
                  setTypeFilter('all');
                  setCurrentPage(1);
                }}
                className="bg-surface-variant text-on-surface hover:text-primary-container border border-outline-variant px-sm py-1 rounded text-label-md font-label-md transition-colors flex items-center space-x-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Summary Bar (Bento-style mini-cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
          {/* Total Masuk */}
          <div className="glass-panel p-md rounded-xl relative overflow-hidden group bg-[#12121a] border border-[#2a2a3e]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-secondary/20 transition-all pointer-events-none" />
            <div className="flex items-center space-x-sm mb-xs relative z-10">
              <span className="material-symbols-outlined text-secondary">arrow_downward</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Total Masuk</span>
            </div>
            <div className="font-headline-md text-headline-md text-on-surface relative z-10 font-bold text-secondary font-tabular-nums">
              {formatRupiah(totalMasuk)}
            </div>
          </div>

          {/* Total Keluar */}
          <div className="glass-panel p-md rounded-xl relative overflow-hidden group bg-[#12121a] border border-[#2a2a3e]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-tertiary-container/20 transition-all pointer-events-none" />
            <div className="flex items-center space-x-sm mb-xs relative z-10">
              <span className="material-symbols-outlined text-tertiary-container">arrow_upward</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Total Keluar</span>
            </div>
            <div className="font-headline-md text-headline-md text-on-surface relative z-10 font-bold text-tertiary font-tabular-nums">
              {formatRupiah(totalKeluar)}
            </div>
          </div>

          {/* Selisih Net */}
          <div className="glass-panel p-md rounded-xl relative overflow-hidden group bg-[#12121a] border border-[#2a2a3e]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary-container/20 transition-all pointer-events-none" />
            <div className="flex items-center space-x-sm mb-xs relative z-10">
              <span className="material-symbols-outlined text-primary-container">account_balance_wallet</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Selisih (Net)</span>
            </div>
            <div className={`font-headline-md text-headline-md relative z-10 font-bold font-tabular-nums ${selisihNet >= 0 ? 'text-primary' : 'text-tertiary'}`}>
              {formatRupiah(selisihNet)}
            </div>
          </div>
        </div>

        {/* Main Data Table */}
        <div className="glass-panel rounded-xl overflow-hidden flex flex-col bg-[#12121a] border border-[#2a2a3e] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#2a2a3e] bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                  <th className="py-sm px-md w-12 text-center">#</th>
                  <th className="py-sm px-md">Tanggal</th>
                  <th className="py-sm px-md">Kategori</th>
                  <th className="py-sm px-md">Catatan</th>
                  <th className="py-sm px-md text-right">Nominal</th>
                  <th className="py-sm px-md w-24 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-body-sm font-tabular-nums text-on-surface divide-y divide-[#2a2a3e]">
                {paginatedList.map((row, i) => {
                  const isIncome = row.type === 'income';
                  const rowNumber = (safePage - 1) * itemsPerPage + i + 1;

                  return (
                    <tr key={row.id} className="hover:bg-surface-container-high transition-colors group">
                      <td className="py-3 px-md text-center text-on-surface-variant text-xs">{rowNumber}</td>
                      <td className="py-3 px-md text-xs text-on-surface whitespace-nowrap">
                        {row.date.includes('T') ? row.date.split('T')[0] : row.date}
                      </td>
                      <td className="py-3 px-md">
                        <span className="px-2 py-1 rounded text-[11px] font-label-md border border-outline-variant bg-surface-container text-on-surface-variant">
                          {row.categoryName || 'General'}
                        </span>
                      </td>
                      <td className="py-3 px-md text-on-surface font-medium truncate max-w-[240px]">
                        {row.description}
                      </td>
                      <td className={`py-3 px-md text-right font-semibold whitespace-nowrap ${isIncome ? 'text-secondary' : 'text-tertiary'}`}>
                        {isIncome ? '+' : '-'} {formatRupiah(row.amount)}
                      </td>
                      <td className="py-3 px-md text-center">
                        <div className="flex items-center justify-center space-x-xs opacity-80 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleDelete(row.id, row.description)}
                            className="text-on-surface-variant hover:text-tertiary-container p-1 rounded hover:bg-surface-container transition-colors cursor-pointer"
                            title="Hapus transaksi"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {paginatedList.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 px-md text-center text-on-surface-variant text-sm">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-4xl text-outline-variant">receipt_long</span>
                        <p>Tidak ada data catatan kas untuk filter yang dipilih.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-[#2a2a3e] p-sm flex flex-col sm:flex-row items-center justify-between gap-sm bg-surface-container-lowest">
            <div className="text-body-sm text-on-surface-variant text-xs">
              Showing {totalEntries === 0 ? 0 : (safePage - 1) * itemsPerPage + 1} to{' '}
              {Math.min(safePage * itemsPerPage, totalEntries)} of {totalEntries} entries
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={safePage <= 1}
                className="px-2 py-1 rounded border border-[#2a2a3e] text-on-surface-variant hover:bg-surface-variant disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous page"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded font-label-md text-label-md cursor-pointer transition-colors ${
                    pageNum === safePage
                      ? 'bg-primary-container text-on-primary-container font-bold'
                      : 'border border-[#2a2a3e] text-on-surface hover:bg-surface-variant'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={safePage >= totalPages}
                className="px-2 py-1 rounded border border-[#2a2a3e] text-on-surface-variant hover:bg-surface-variant disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next page"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-lg" />
    </div>
  );
};
