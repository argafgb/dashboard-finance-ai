import React from 'react';
import { useFinance } from '../../context/FinanceContext';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, openAddModal, isMobileSidebarOpen, setIsMobileSidebarOpen, showToast, logout, userRole, userName } = useFinance();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', fill: true },
    { id: 'transactions', label: 'Transaksi', icon: 'swap_horiz', fill: false },
    { id: 'ledger', label: 'Riwayat Kas', icon: 'history', fill: false },
    { id: 'categories', label: 'Kategori', icon: 'category', fill: false },
  ].filter((item) => {
    if (userRole === 'staff') {
      return item.id !== 'dashboard' && item.id !== 'categories';
    }
    return true;
  });

  const handleNavClick = (tabId: 'dashboard' | 'transactions' | 'ledger' | 'categories' | 'add-transaction') => {
    setActiveTab(tabId);
    setIsMobileSidebarOpen(false);
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
  };

  const handleHelp = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('Pusat Bantuan Nexus: Dokumentasi dan panduan keuangan telah dibuka.', 'info');
  };

  const sidebarContent = (
    <div className="flex flex-col h-full py-md px-xs">
      {/* Header */}
      <div className="px-md mb-xl flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30 shrink-0">
            <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
          </div>
          <div className="overflow-hidden">
            <h2 className="font-headline-md text-headline-md text-primary truncate text-lg">Nexus Finance</h2>
          </div>
        </div>
        {/* Mobile close button */}
        <button
          onClick={() => setIsMobileSidebarOpen(false)}
          className="md:hidden text-on-surface-variant hover:text-on-surface p-1"
          aria-label="Tutup menu"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      {/* User Info & CTA */}
      <div className="px-md mb-lg">
        <div className="flex items-center gap-sm mb-md p-sm glass-panel rounded-lg hover:border-primary/40 transition-colors">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant shrink-0 bg-surface-container-high flex items-center justify-center">
            {/* High fidelity cyberpunk gradient avatar */}
            <div className="w-full h-full bg-gradient-to-tr from-primary-container via-secondary to-primary flex items-center justify-center text-[#0a0a0f] font-bold text-xs">
              {userName ? userName.substring(0, 2).toUpperCase() : 'NF'}
            </div>
          </div>
          <div className="overflow-hidden">
            <p className="font-label-md text-label-md text-on-surface truncate">{userName || 'Premium User'}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-[10px] truncate capitalize">
              Plan: {userRole}
            </p>
          </div>
        </div>
        
        {/* Add Transaction Button */}
        {userRole !== 'viewer' && (
          <button
            onClick={openAddModal}
            className="w-full bg-primary-container text-[#0a0a0f] font-label-md text-label-md py-sm rounded glow-primary hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-xs font-semibold cursor-pointer shadow-lg"
          >
            <span className="material-symbols-outlined text-[16px]">add</span> Add Transaction
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <ul className="flex-1 space-y-xs overflow-y-auto px-xs">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id as any)}
                className={`w-full text-left flex items-center gap-sm px-sm py-sm rounded-r-full font-label-md text-label-md transition-all active:scale-[0.98] duration-150 cursor-pointer ${
                  isActive
                    ? 'text-secondary font-bold bg-secondary-container/10 border-r-4 border-secondary'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive && item.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Footer Links */}
      <div className="mt-auto pt-md border-t border-outline-variant/30 px-xs space-y-xs">
        <button
          onClick={handleHelp}
          className="w-full flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all text-left font-label-md text-label-md cursor-pointer"
        >
          <span className="material-symbols-outlined">help</span>
          Help
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-sm px-sm py-sm rounded-lg text-error hover:bg-error-container/20 transition-all text-left font-label-md text-label-md cursor-pointer"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>

        {/* King Arga Signature Badge */}
        <div className="pt-2 px-1">
          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container/60 border border-[#2a2a3e] hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">👑</span>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold text-primary tracking-wider uppercase truncate">KING ARGA</p>
                <p className="text-[8px] text-on-surface-variant uppercase tracking-widest truncate">System Edition</p>
              </div>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_#44f3a9]" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <nav className="hidden md:flex bg-surface-container-low text-secondary font-label-md text-label-md left-0 h-screen w-64 border-r border-outline-variant shrink-0 flex-col z-20">
        {sidebarContent}
      </nav>

      {/* Mobile Drawer Backdrop and Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <nav className="relative w-72 bg-surface-container-low border-r border-outline-variant flex flex-col h-full shadow-2xl z-10 animate-fade-in">
            {sidebarContent}
          </nav>
        </div>
      )}
    </>
  );
};
