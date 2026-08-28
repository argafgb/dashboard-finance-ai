import React, { useState, useEffect } from 'react';
import { useFinance } from '../context/FinanceContext';
import { TransactionType } from '@nexus/shared-types';
import { parseRupiah, toInputDateFormat } from '../utils/formatters';

export const AddTransactionPage: React.FC = () => {
  const { categories, addTransaction, setActiveTab, showToast } = useFinance();

  const [type, setType] = useState<TransactionType>('income');
  const [categoryId, setCategoryId] = useState('');
  const [date, setDate] = useState(toInputDateFormat());
  const [amountStr, setAmountStr] = useState('15,000,000');
  const [description, setDescription] = useState('');

  // Auto-select first matching category when type changes
  useEffect(() => {
    const matching = categories.filter((c) => c.type === type);
    if (matching.length > 0) {
      setCategoryId(matching[0].id);
    } else {
      setCategoryId('');
    }
  }, [type, categories]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    if (!raw) {
      setAmountStr('');
      return;
    }
    const num = parseInt(raw, 10);
    setAmountStr(num.toLocaleString('en-US'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numericAmount = parseRupiah(amountStr);
    if (numericAmount <= 0) {
      showToast('Masukkan nominal transaksi yang valid!', 'error');
      return;
    }

    if (!categoryId) {
      showToast('Pilih kategori transaksi!', 'error');
      return;
    }

    const selectedCategory = categories.find((c) => c.id === categoryId);
    const finalDesc = description.trim() || selectedCategory?.name || (type === 'income' ? 'Pemasukan' : 'Pengeluaran');

    addTransaction({
      date: new Date(date).toISOString(),
      type,
      categoryId,
      categoryName: selectedCategory?.name || 'General',
      amount: numericAmount,
      description: finalDesc,
      icon: selectedCategory?.icon || (type === 'income' ? 'arrow_downward' : 'arrow_upward')
    });

    // Navigate to transactions list
    setActiveTab('transactions');
  };

  const filteredCategories = categories.filter((c) => c.type === type);

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto relative bg-[#0a0a0f] select-none">
      {/* Mobile Header (Minimal) */}
      <header className="md:hidden flex items-center justify-between px-margin-mobile h-16 border-b border-outline-variant bg-[#131318]/80 backdrop-blur-md sticky top-0 z-20">
        <button
          onClick={() => setActiveTab('transactions')}
          className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
          aria-label="Kembali"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Tambah Transaksi</h1>
        <div className="w-6" /> {/* Spacer */}
      </header>

      {/* Main Content Form Canvas */}
      <div className="px-margin-mobile md:px-margin-desktop py-lg max-w-3xl mx-auto w-full flex-1 flex flex-col">
        {/* Desktop Header */}
        <div className="hidden md:block mb-xl">
          <button
            onClick={() => setActiveTab('transactions')}
            className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors mb-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="font-label-md text-label-md">Kembali ke Transaksi</span>
          </button>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Tambah Transaksi</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            Catat aktivitas keuangan Anda dengan presisi.
          </p>
        </div>

        {/* Form Glass Panel */}
        <div className="glass-panel rounded-xl p-md md:p-xl flex flex-col gap-xl bg-[#12121a] border border-[#2a2a3e] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {/* Toggle Pill (Pemasukan / Pengeluaran) */}
          <div className="flex p-1 bg-surface-container-low rounded-full w-full border border-outline-variant/50 relative overflow-hidden">
            <div
              className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 z-0 ${
                type === 'income'
                  ? 'left-1 bg-secondary shadow-[0_0_15px_rgba(68,243,169,0.35)]'
                  : 'left-[calc(50%+2px)] bg-tertiary-container shadow-[0_0_15px_rgba(252,105,105,0.35)]'
              }`}
            />
            <button
              type="button"
              onClick={() => setType('income')}
              className={`flex-1 py-sm rounded-full font-label-md text-label-md z-10 relative flex justify-center items-center gap-xs transition-colors cursor-pointer ${
                type === 'income' ? 'text-on-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              PEMASUKAN
            </button>
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`flex-1 py-sm rounded-full font-label-md text-label-md z-10 relative flex justify-center items-center gap-xs transition-colors cursor-pointer ${
                type === 'expense' ? 'text-[#0a0a0f] font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
              PENGELUARAN
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
            {/* Date & Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {/* Date */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="tx-date">
                  Tanggal
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                    calendar_today
                  </span>
                  <input
                    id="tx-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg py-sm pl-xl pr-sm text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="tx-category">
                  Kategori
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                    category
                  </span>
                  <select
                    id="tx-category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg py-sm pl-xl pr-sm text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                    required
                  >
                    {filteredCategories.length === 0 && <option value="">Tidak ada kategori</option>}
                    {filteredCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Nominal Amount */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="tx-amount">
                Nominal
              </label>
              <div className="relative">
                <span className="absolute left-sm top-1/2 -translate-y-1/2 font-tabular-nums text-tabular-nums text-outline font-semibold">
                  Rp
                </span>
                <input
                  id="tx-amount"
                  type="text"
                  value={amountStr}
                  onChange={handleAmountChange}
                  placeholder="0"
                  className="w-full bg-surface-dim border border-outline-variant rounded-lg py-md pl-xl pr-sm text-on-surface font-display-lg text-headline-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/30 font-semibold"
                  required
                />
              </div>
            </div>

            {/* Notes / Description */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="tx-notes">
                Catatan (Opsional)
              </label>
              <textarea
                id="tx-notes"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tambahkan deskripsi transaksi..."
                rows={3}
                className="w-full bg-surface-dim border border-outline-variant rounded-lg py-sm px-sm text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-sm mt-sm border-t border-outline-variant/30">
              <button
                type="submit"
                className="w-full bg-primary-container text-[#0a0a0f] font-semibold text-[16px] py-md rounded-lg flex items-center justify-center gap-sm shadow-lg hover:shadow-[0_0_20px_rgba(76,154,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">save</span>
                Simpan Transaksi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
