import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Category, Transaction, MonthSummary, NotificationItem } from '@nexus/shared-types';
import { INITIAL_CATEGORIES, INITIAL_TRANSACTIONS, DEFAULT_MONTH_SUMMARY, AVAILABLE_MONTHS } from '../utils/seedData';
import { generateId } from '../utils/formatters';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface FinanceContextType {
  categories: Category[];
  transactions: Transaction[];
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  availableMonths: Array<{ key: string; label: string }>;
  summary: MonthSummary;
  recentTransactions: Transaction[];
  filteredTransactions: Transaction[];
  activeTab: 'dashboard' | 'transactions' | 'ledger' | 'categories' | 'add-transaction';
  setActiveTab: (tab: 'dashboard' | 'transactions' | 'ledger' | 'categories' | 'add-transaction') => void;
  
  // Modals & UI States
  isAddModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
  isNotificationOpen: boolean;
  setIsNotificationOpen: (open: boolean) => void;
  toggleNotification: () => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;

  // Auth state
  isAuthenticated: boolean;
  userRole: 'admin' | 'staff' | 'viewer';
  userName: string;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, pass: string, role: 'admin' | 'staff' | 'viewer') => Promise<{ success: boolean }>;
  isLoadingSession: boolean;

  // Actions
  addTransaction: (data: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  addCategory: (name: string, type: 'income' | 'expense') => Promise<{ success: boolean; message?: string }>;
  deleteCategory: (id: string) => Promise<{ success: boolean; message?: string }>;
  
  // Notifications & Toast
  notifications: NotificationItem[];
  markNotificationsAsRead: () => void;
  toasts: ToastState[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

const LOCAL_STORAGE_TX_KEY = 'nexus_finance_transactions_v2';
const LOCAL_STORAGE_CAT_KEY = 'nexus_finance_categories_v2';

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<MonthSummary>(DEFAULT_MONTH_SUMMARY);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('nexus_finance_auth_v2') === 'true';
  });
  
  const [userRole, setUserRole] = useState<'admin' | 'staff' | 'viewer'>(() => {
    return (localStorage.getItem('nexus_finance_role_v2') as any) || 'staff';
  });

  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('nexus_finance_username_v2') || '';
  });

  const [isLoadingSession, setIsLoadingSession] = useState<boolean>(true);
  const [selectedMonth, setSelectedMonth] = useState<string>('2023-08');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'ledger' | 'categories' | 'add-transaction'>('dashboard');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Toast Helpers
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = 'toast_' + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // API Fetches
  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.ok) {
        const json = await res.json();
        setCategories(json.data || json);
      }
    } catch (e) {
      console.error('Fetch categories failed', e);
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await fetch('/api/transactions');
      if (res.ok) {
        const data = await res.json();
        setTransactions(data.data || data);
      }
    } catch (e) {
      console.error('Fetch transactions failed', e);
    }
  };

  const fetchSummary = async (month: string) => {
    if (userRole === 'staff') return;
    try {
      const res = await fetch(`/api/dashboard/summary?month=${month}`);
      if (res.ok) {
        const json = await res.json();
        setSummary(json.data);
      }
    } catch (e) {
      console.error('Fetch summary failed', e);
    }
  };

  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications');
      if (res.ok) {
        const json = await res.json();
        setNotifications(json.data || json);
      }
    } catch (e) {
      console.error('Fetch notifications failed', e);
    }
  };

  const handleLocalLogout = () => {
    setIsAuthenticated(false);
    setUserRole('staff');
    setUserName('');
    localStorage.removeItem('nexus_finance_auth_v2');
    localStorage.removeItem('nexus_finance_role_v2');
    localStorage.removeItem('nexus_finance_username_v2');
  };

  // Auth session check on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/get-session');
        if (res.ok) {
          const sessionData = await res.json();
          if (sessionData && sessionData.user) {
            setIsAuthenticated(true);
            const role = sessionData.user.role || 'staff';
            setUserRole(role);
            setUserName(sessionData.user.name);
            localStorage.setItem('nexus_finance_auth_v2', 'true');
            localStorage.setItem('nexus_finance_role_v2', role);
            localStorage.setItem('nexus_finance_username_v2', sessionData.user.name);
          } else {
            handleLocalLogout();
          }
        } else {
          handleLocalLogout();
        }
      } catch (e) {
        console.error('Session check failed', e);
      } finally {
        setIsLoadingSession(false);
      }
    };
    checkSession();
  }, []);

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchCategories();
      fetchTransactions();
      fetchNotifications();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && userRole !== 'staff') {
      fetchSummary(selectedMonth);
    }
  }, [isAuthenticated, userRole, selectedMonth]);

  // Auth actions
  const login = async (email: string, pass: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/sign-in/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
      });

      if (!response.ok) {
        const errData = await response.json();
        showToast(errData.message || 'Login gagal. Periksa kredensial Anda.', 'error');
        return false;
      }

      const sessionData = await response.json();
      setIsAuthenticated(true);
      const role = sessionData.user.role || 'staff';
      setUserRole(role);
      setUserName(sessionData.user.name);
      localStorage.setItem('nexus_finance_auth_v2', 'true');
      localStorage.setItem('nexus_finance_role_v2', role);
      localStorage.setItem('nexus_finance_username_v2', sessionData.user.name);

      if (role === 'staff') {
        setActiveTab('transactions');
      } else {
        setActiveTab('dashboard');
      }

      showToast('Autentikasi berhasil. Selamat datang di Nexus Finance!', 'success');
      return true;
    } catch (error) {
      console.error(error);
      showToast('Koneksi ke server gagal.', 'error');
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/sign-out', { method: 'POST' });
    } catch (e) {
      console.error(e);
    } finally {
      handleLocalLogout();
      showToast('Sesi Nexus Finance telah diakhiri secara aman.', 'info');
    }
  };

  const register = async (name: string, email: string, pass: string, role: 'admin' | 'staff' | 'viewer') => {
    try {
      const response = await fetch('/api/auth/sign-up/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: pass, role }),
      });

      if (!response.ok) {
        const errData = await response.json();
        showToast(errData.message || 'Pendaftaran gagal. Silakan coba lagi.', 'error');
        return { success: false };
      }

      showToast('Pendaftaran berhasil! Silakan login.', 'success');
      return { success: true };
    } catch (error) {
      console.error(error);
      showToast('Koneksi ke server gagal.', 'error');
      return { success: false };
    }
  };

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [transactions]);

  // Recent transactions (Top 5)
  const recentTransactions = useMemo(() => {
    return filteredTransactions.slice(0, 5);
  }, [filteredTransactions]);

  // Actions
  const addTransaction = async (data: Omit<Transaction, 'id'>) => {
    try {
      const { categoryName, ...apiData } = data as any;
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: apiData.amount,
          type: apiData.type,
          description: apiData.description,
          categoryId: apiData.categoryId,
          date: new Date(apiData.date).toISOString(),
          icon: apiData.icon,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        showToast(errData.error || 'Gagal menambahkan transaksi.', 'error');
        return;
      }

      showToast('Transaksi berhasil ditambahkan!', 'success');
      await fetchTransactions();
      if (userRole !== 'staff') {
        await fetchSummary(selectedMonth);
      }
    } catch (error) {
      console.error(error);
      showToast('Gagal menghubungi server.', 'error');
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      const response = await fetch(`/api/transactions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errData = await response.json();
        showToast(errData.error || 'Gagal menghapus transaksi.', 'error');
        return;
      }

      showToast('Transaksi berhasil dihapus', 'info');
      await fetchTransactions();
      if (userRole !== 'staff') {
        await fetchSummary(selectedMonth);
      }
    } catch (error) {
      console.error(error);
      showToast('Gagal menghubungi server.', 'error');
    }
  };

  const addCategory = async (name: string, type: 'income' | 'expense') => {
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, type }),
      });

      if (!response.ok) {
        const errData = await response.json();
        return { success: false, message: errData.error || 'Gagal menambahkan kategori.' };
      }

      showToast(`Kategori "${name}" berhasil dibuat!`, 'success');
      await fetchCategories();
      return { success: true };
    } catch (error) {
      console.error(error);
      showToast('Gagal menghubungi server.', 'error');
      return { success: false, message: 'Koneksi gagal' };
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const response = await fetch(`/api/categories/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errData = await response.json();
        return { success: false, message: errData.error || 'Gagal menghapus kategori.' };
      }

      showToast('Kategori berhasil dihapus', 'info');
      await fetchCategories();
      return { success: true };
    } catch (error) {
      console.error(error);
      showToast('Gagal menghubungi server.', 'error');
      return { success: false, message: 'Koneksi gagal' };
    }
  };

  const markNotificationsAsRead = async () => {
    try {
      const response = await fetch('/api/notifications/read-all', {
        method: 'PATCH',
      });
      if (response.ok) {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FinanceContext.Provider
      value={{
        categories,
        transactions,
        selectedMonth,
        setSelectedMonth,
        availableMonths: AVAILABLE_MONTHS,
        summary,
        recentTransactions,
        filteredTransactions,
        activeTab,
        setActiveTab,
        isAddModalOpen,
        openAddModal: () => setIsAddModalOpen(true),
        closeAddModal: () => setIsAddModalOpen(false),
        isNotificationOpen,
        setIsNotificationOpen,
        toggleNotification: () => setIsNotificationOpen((prev) => !prev),
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        isAuthenticated,
        userRole,
        userName,
        login,
        logout,
        register,
        isLoadingSession,
        addTransaction,
        deleteTransaction,
        addCategory,
        deleteCategory,
        notifications,
        markNotificationsAsRead,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
