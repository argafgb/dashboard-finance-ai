import React, { useState, useRef, useEffect } from 'react';
import { useFinance } from '../../context/FinanceContext';

export const TopAppBar: React.FC = () => {
  const {
    activeTab,
    selectedMonth,
    setSelectedMonth,
    availableMonths,
    setIsMobileSidebarOpen,
    toggleNotification,
    notifications,
    showToast
  } = useFinance();

  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeMonthObj = availableMonths.find((m) => m.key === selectedMonth) || availableMonths[0];
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const pageTitles: Record<string, string> = {
    dashboard: 'Dashboard',
    transactions: 'Transaksi',
    ledger: 'Riwayat Kas',
    categories: 'Kategori Keuangan',
    'add-transaction': 'Tambah Transaksi'
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMonthDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSettingsClick = () => {
    showToast('Pengaturan Nexus Finance: Preferensi sistem telah termutakhir.', 'info');
  };

  return (
    <header className="flex-none px-margin-mobile md:px-margin-desktop py-md flex items-center justify-between border-b border-outline-variant/30 glass-panel border-x-0 border-t-0 sticky top-0 z-20 backdrop-blur-md bg-[#12121a]/80">
      <div className="flex items-center gap-sm">
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="md:hidden text-on-surface hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high cursor-pointer"
          aria-label="Buka menu navigasi"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
          {pageTitles[activeTab] || 'Dashboard'}
        </h1>
      </div>

      <div className="flex items-center gap-md">
        {/* Month Selector Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsMonthDropdownOpen((prev) => !prev)}
            className="flex items-center gap-xs px-sm py-xs border border-[#2a2a3e] rounded bg-[#0a0a0f] text-on-surface hover:border-primary-container transition-colors cursor-pointer"
            aria-expanded={isMonthDropdownOpen}
          >
            <span className="font-label-md text-label-md">{activeMonthObj.label}</span>
            <span
              className={`material-symbols-outlined text-[16px] transition-transform ${
                isMonthDropdownOpen ? 'rotate-180' : ''
              }`}
            >
              arrow_drop_down
            </span>
          </button>

          {isMonthDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#12121a] border border-[#2a2a3e] rounded-lg shadow-2xl py-1 z-50 animate-slide-down">
              <div className="px-3 py-1.5 text-[11px] font-label-md text-on-surface-variant uppercase tracking-wider border-b border-[#2a2a3e]/60">
                Pilih Periode
              </div>
              {availableMonths.map((m) => (
                <button
                  key={m.key}
                  onClick={() => {
                    setSelectedMonth(m.key);
                    setIsMonthDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer ${
                    m.key === selectedMonth ? 'text-secondary font-semibold bg-secondary-container/10' : 'text-on-surface'
                  }`}
                >
                  <span>{m.label}</span>
                  {m.key === selectedMonth && (
                    <span className="material-symbols-outlined text-secondary text-sm">check</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex gap-sm">
          {/* Notifications Button */}
          <button
            onClick={toggleNotification}
            className="relative w-8 h-8 rounded-full border border-[#2a2a3e] flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:border-primary-container/50 transition-colors cursor-pointer"
            aria-label="Notifikasi"
          >
            <span className="material-symbols-outlined text-[18px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-[#12121a]" />
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={handleSettingsClick}
            className="w-8 h-8 rounded-full border border-[#2a2a3e] flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:border-primary-container/50 transition-colors cursor-pointer"
            aria-label="Pengaturan"
          >
            <span className="material-symbols-outlined text-[18px]">settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};
