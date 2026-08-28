import React from 'react';
import { FinanceProvider, useFinance } from './context/FinanceContext';
import { Sidebar } from './components/layout/Sidebar';
import { TopAppBar } from './components/layout/TopAppBar';
import { DashboardPage } from './pages/DashboardPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { LedgerPage } from './pages/LedgerPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AddTransactionPage } from './pages/AddTransactionPage';
import { AddTransactionModal } from './components/modals/AddTransactionModal';
import { NotificationDrawer } from './components/modals/NotificationDrawer';
import { ToastContainer } from './components/common/Toast';

import { LoginPage } from './pages/LoginPage';

const MainAppContent: React.FC = () => {
  const { isAuthenticated, activeTab, isLoadingSession } = useFinance();

  if (isLoadingSession) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-on-surface">
        <div className="w-10 h-10 border-4 border-[#4c9aff] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-on-surface-variant font-label-md text-xs tracking-wider uppercase">Loading Session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <LoginPage />
        <ToastContainer />
      </>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f] text-on-surface font-body-md text-body-md antialiased select-none">
      {/* SideNavBar (Shared Component) */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* TopAppBar Context */}
        <TopAppBar />

        {/* Page Content Switcher */}
        {activeTab === 'dashboard' && <DashboardPage />}
        {activeTab === 'transactions' && <TransactionsPage />}
        {activeTab === 'ledger' && <LedgerPage />}
        {activeTab === 'categories' && <CategoriesPage />}
        {activeTab === 'add-transaction' && <AddTransactionPage />}
      </main>

      {/* Global Modals & Overlays */}
      <AddTransactionModal />
      <NotificationDrawer />
      <ToastContainer />

      {/* Floating Watermark Badge */}
      <div className="fixed bottom-3 right-4 z-30 pointer-events-none select-none hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121a]/85 backdrop-blur-md border border-[#2a2a3e] shadow-[0_0_12px_rgba(76,154,255,0.15)] opacity-85">
        <span className="text-xs">👑</span>
        <span className="text-[10px] font-bold tracking-wider bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent uppercase">
          KING ARGA
        </span>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <FinanceProvider>
      <MainAppContent />
    </FinanceProvider>
  );
};

export default App;
