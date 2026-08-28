import React, { useState, useEffect } from 'react';
import { useFinance } from '../../context/FinanceContext';
import { TransactionType } from '@nexus/shared-types';
import { parseRupiah, toInputDateFormat } from '../../utils/formatters';

export const AddTransactionModal: React.FC = () => {
  const { isAddModalOpen, closeAddModal, categories, addTransaction, showToast } = useFinance();

  const [type, setType] = useState<TransactionType>('income');
  const [categoryId, setCategoryId] = useState('');
  const [date, setDate] = useState(toInputDateFormat());
  const [amountStr, setAmountStr] = useState('');
  const [description, setDescription] = useState('');

  // Auto-select first category matching the type
  useEffect(() => {
    const matching = categories.filter((c) => c.type === type);
    if (matching.length > 0) {
      setCategoryId(matching[0].id);
    } else {
      setCategoryId('');
    }
  }, [type, categories]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAddModalOpen) {
        closeAddModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAddModalOpen, closeAddModal]);

  if (!isAddModalOpen) return null;

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

    if (!description.trim()) {
      showToast('Masukkan deskripsi transaksi!', 'error');
      return;
    }

    if (!categoryId) {
      showToast('Pilih kategori transaksi!', 'error');
      return;
    }

    const selectedCategory = categories.find((c) => c.id === categoryId);

    addTransaction({
      date: new Date(date).toISOString(),
      type,
      categoryId,
      categoryName: selectedCategory?.name || 'General',
      amount: numericAmount,
      description: description.trim(),
      icon: selectedCategory?.icon || (type === 'income' ? 'payments' : 'shopping_cart')
    });

    // Reset and close
    setAmountStr('');
    setDescription('');
    closeAddModal();
  };

  const filteredCategories = categories.filter((c) => c.type === type);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={closeAddModal}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#12121a] border border-[#2a2a3e] rounded-xl shadow-2xl overflow-hidden z-10 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-md border-b border-[#2a2a3e] bg-[#0e0e13]/60">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30 text-primary">
              <span className="material-symbols-outlined text-lg">add_circle</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface text-lg">Tambah Transaksi Baru</h3>
          </div>
          <button
            onClick={closeAddModal}
            className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-md space-y-md">
          {/* Type Selector (Pemasukan / Pengeluaran) */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg">
            <button
              type="button"
              onClick={() => setType('income')}
              className={`py-2 px-3 rounded text-sm font-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                type === 'income'
                  ? 'bg-secondary/20 text-secondary font-bold border border-secondary/30 shadow-[0_0_12px_rgba(68,243,169,0.2)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              Pemasukan (Masuk)
            </button>
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`py-2 px-3 rounded text-sm font-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                type === 'expense'
                  ? 'bg-tertiary/20 text-tertiary font-bold border border-tertiary/30 shadow-[0_0_12px_rgba(255,179,176,0.2)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
              Pengeluaran (Keluar)
            </button>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-xs font-label-md text-on-surface-variant mb-1">
              Nominal (Rp) <span className="text-secondary">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-sm">
                Rp
              </span>
              <input
                type="text"
                value={amountStr}
                onChange={handleAmountChange}
                placeholder="15,000,000"
                className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2.5 pl-10 pr-3 text-on-surface text-base font-tabular-nums focus:outline-none focus:border-primary-container transition-colors"
                autoFocus
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-label-md text-on-surface-variant mb-1">
              Deskripsi Transaksi <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Contoh: Client Payment - TechCorp"
              className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors"
              required
            />
          </div>

          {/* Grid: Category & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            {/* Category */}
            <div>
              <label className="block text-xs font-label-md text-on-surface-variant mb-1">
                Kategori <span className="text-secondary">*</span>
              </label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors cursor-pointer"
                required
              >
                {filteredCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-label-md text-on-surface-variant mb-1">
                Tanggal Transaksi <span className="text-secondary">*</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-on-surface text-sm focus:outline-none focus:border-primary-container transition-colors cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-sm border-t border-[#2a2a3e]/60 flex items-center justify-end gap-sm">
            <button
              type="button"
              onClick={closeAddModal}
              className="px-md py-2 border border-[#2a2a3e] rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-sm font-label-md transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-lg py-2 bg-primary-container text-[#0a0a0f] rounded font-label-md font-semibold text-sm glow-primary hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">save</span>
              Simpan Transaksi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
