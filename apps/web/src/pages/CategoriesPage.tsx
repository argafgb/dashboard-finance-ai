import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { TransactionType, Category } from '@nexus/shared-types';

export const CategoriesPage: React.FC = () => {
  const { categories, addCategory, deleteCategory, userRole } = useFinance();
  const [newCatName, setNewCatName] = useState('');
  const [newCatType, setNewCatType] = useState<TransactionType>('income');

  const incomeCategories = categories.filter((c) => c.type === 'income');
  const expenseCategories = categories.filter((c) => c.type === 'expense');

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const res = await addCategory(newCatName.trim(), newCatType);
    if (res.success) {
      setNewCatName('');
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-lg">
      <div>
        <h2 className="font-headline-md text-headline-md text-on-surface">Kategori Keuangan</h2>
        <p className="text-on-surface-variant text-xs md:text-sm">
          Kelola klasifikasi pos pemasukan dan pos pengeluaran perusahaan.
        </p>
      </div>

      {/* Add Category Form */}
      {userRole === 'admin' && (
        <div className="glass-panel p-md rounded-xl">
          <h3 className="text-sm font-label-md text-on-surface mb-sm flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary-container text-lg">add_box</span>
            Tambah Kategori Baru
          </h3>
          <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-sm items-stretch sm:items-center">
            <input
              type="text"
              placeholder="Nama kategori, contoh: Langganan SaaS..."
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              className="flex-1 bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg py-2 px-3 text-sm text-on-surface focus:outline-none focus:border-primary-container"
              required
            />

            <div className="flex bg-[#0a0a0f] border border-[#2a2a3e] rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setNewCatType('income')}
                className={`px-3 py-1.5 rounded text-xs font-label-md transition-colors cursor-pointer ${
                  newCatType === 'income'
                    ? 'bg-secondary/20 text-secondary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Pemasukan
              </button>
              <button
                type="button"
                onClick={() => setNewCatType('expense')}
                className={`px-3 py-1.5 rounded text-xs font-label-md transition-colors cursor-pointer ${
                  newCatType === 'expense'
                    ? 'bg-tertiary/20 text-tertiary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Pengeluaran
              </button>
            </div>

            <button
              type="submit"
              className="px-lg py-2 bg-primary-container text-[#0a0a0f] rounded-lg font-label-md font-semibold text-sm glow-primary hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              Simpan Kategori
            </button>
          </form>
        </div>
      )}

      {/* Grid: Income Categories vs Expense Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {/* Income Categories */}
        <div className="glass-panel p-md rounded-xl space-y-md">
          <div className="flex items-center justify-between border-b border-[#2a2a3e] pb-sm">
            <div className="flex items-center gap-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(68,243,169,0.8)]" />
              <h3 className="font-headline-md text-base text-on-surface">Kategori Pemasukan</h3>
            </div>
            <span className="text-xs text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
              {incomeCategories.length} Kategori
            </span>
          </div>

          <div className="space-y-xs">
            {incomeCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between p-sm rounded-lg bg-[#0a0a0f]/60 border border-[#2a2a3e]/60 hover:border-secondary/30 transition-colors group"
              >
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">{cat.icon || 'savings'}</span>
                  </div>
                  <span className="font-medium text-sm text-on-surface">{cat.name}</span>
                </div>
                {userRole === 'admin' && (
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="text-on-surface-variant hover:text-error p-1 rounded hover:bg-error-container/20 transition-colors opacity-60 group-hover:opacity-100 cursor-pointer"
                    title="Hapus Kategori"
                  >
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expense Categories */}
        <div className="glass-panel p-md rounded-xl space-y-md">
          <div className="flex items-center justify-between border-b border-[#2a2a3e] pb-sm">
            <div className="flex items-center gap-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,179,176,0.8)]" />
              <h3 className="font-headline-md text-base text-on-surface">Kategori Pengeluaran</h3>
            </div>
            <span className="text-xs text-tertiary font-bold bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
              {expenseCategories.length} Kategori
            </span>
          </div>

          <div className="space-y-xs">
            {expenseCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between p-sm rounded-lg bg-[#0a0a0f]/60 border border-[#2a2a3e]/60 hover:border-tertiary/30 transition-colors group"
              >
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">{cat.icon || 'category'}</span>
                  </div>
                  <span className="font-medium text-sm text-on-surface">{cat.name}</span>
                </div>
                {userRole === 'admin' && (
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="text-on-surface-variant hover:text-error p-1 rounded hover:bg-error-container/20 transition-colors opacity-60 group-hover:opacity-100 cursor-pointer"
                    title="Hapus Kategori"
                  >
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-lg" />
    </div>
  );
};
