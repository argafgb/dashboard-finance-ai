/* ========================================
   STORE — LocalStorage CRUD Wrapper
   ======================================== */

const Store = (() => {
  const KEYS = {
    categories: 'finance_categories',
    transactions: 'finance_transactions',
    session: 'finance_session'
  };

  // ── Generic Helpers ──

  function _get(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  }

  function _set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // ── Session ──

  function isLoggedIn() {
    return localStorage.getItem(KEYS.session) === 'true';
  }

  function login(username, password) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(KEYS.session, 'true');
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem(KEYS.session);
  }

  // ── Categories ──

  function getCategories() {
    return _get(KEYS.categories);
  }

  function getCategoriesByType(type) {
    return getCategories().filter(c => c.type === type);
  }

  function getCategoryById(id) {
    return getCategories().find(c => c.id === id) || null;
  }

  function addCategory(name, type) {
    const categories = getCategories();
    // Check duplicate
    const exists = categories.some(
      c => c.name.toLowerCase() === name.toLowerCase() && c.type === type
    );
    if (exists) return { success: false, error: 'Kategori sudah ada' };

    const category = {
      id: Utils.generateId(),
      name: name.trim(),
      type, // 'income' or 'expense'
      createdAt: new Date().toISOString()
    };
    categories.push(category);
    _set(KEYS.categories, categories);
    return { success: true, data: category };
  }

  function updateCategory(id, newName) {
    const categories = getCategories();
    const idx = categories.findIndex(c => c.id === id);
    if (idx === -1) return { success: false, error: 'Kategori tidak ditemukan' };

    // Check duplicate
    const exists = categories.some(
      c => c.id !== id && c.name.toLowerCase() === newName.toLowerCase() && c.type === categories[idx].type
    );
    if (exists) return { success: false, error: 'Nama kategori sudah digunakan' };

    categories[idx].name = newName.trim();
    _set(KEYS.categories, categories);
    return { success: true, data: categories[idx] };
  }

  function deleteCategory(id) {
    const categories = getCategories();
    const filtered = categories.filter(c => c.id !== id);
    if (filtered.length === categories.length) {
      return { success: false, error: 'Kategori tidak ditemukan' };
    }
    _set(KEYS.categories, filtered);
    return { success: true };
  }

  // ── Transactions ──

  function getTransactions() {
    return _get(KEYS.transactions).sort((a, b) =>
      new Date(b.date) - new Date(a.date) || new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  function getTransactionById(id) {
    return _get(KEYS.transactions).find(t => t.id === id) || null;
  }

  function addTransaction({ date, type, categoryId, amount, description }) {
    const transactions = _get(KEYS.transactions);
    const transaction = {
      id: Utils.generateId(),
      date,
      type, // 'income' or 'expense'
      categoryId,
      amount: Math.abs(amount),
      description: (description || '').trim(),
      createdAt: new Date().toISOString()
    };
    transactions.push(transaction);
    _set(KEYS.transactions, transactions);
    return { success: true, data: transaction };
  }

  function updateTransaction(id, updates) {
    const transactions = _get(KEYS.transactions);
    const idx = transactions.findIndex(t => t.id === id);
    if (idx === -1) return { success: false, error: 'Transaksi tidak ditemukan' };

    transactions[idx] = { ...transactions[idx], ...updates, amount: Math.abs(updates.amount || transactions[idx].amount) };
    _set(KEYS.transactions, transactions);
    return { success: true, data: transactions[idx] };
  }

  function deleteTransaction(id) {
    const transactions = _get(KEYS.transactions);
    const filtered = transactions.filter(t => t.id !== id);
    if (filtered.length === transactions.length) {
      return { success: false, error: 'Transaksi tidak ditemukan' };
    }
    _set(KEYS.transactions, filtered);
    return { success: true };
  }

  // ── Computed Stats ──

  function getTotalBalance() {
    const txns = _get(KEYS.transactions);
    return txns.reduce((sum, t) => {
      return sum + (t.type === 'income' ? t.amount : -t.amount);
    }, 0);
  }

  function getMonthlyStats(year, month) {
    const txns = _get(KEYS.transactions);
    let income = 0;
    let expense = 0;

    txns.forEach(t => {
      const d = new Date(t.date);
      if (d.getFullYear() === year && d.getMonth() === month) {
        if (t.type === 'income') income += t.amount;
        else expense += t.amount;
      }
    });

    return { income, expense, net: income - expense };
  }

  function getRecentTransactions(limit = 5) {
    return getTransactions().slice(0, limit);
  }

  function getFilteredTransactions({ dateFrom, dateTo, type }) {
    let txns = getTransactions();

    if (dateFrom) {
      txns = txns.filter(t => t.date >= dateFrom);
    }
    if (dateTo) {
      txns = txns.filter(t => t.date <= dateTo);
    }
    if (type && type !== 'all') {
      txns = txns.filter(t => t.type === type);
    }

    return txns;
  }

  /**
   * Get monthly totals for the last N months (for line chart)
   * @param {number} monthsBack
   * @returns {Array<{label: string, income: number, expense: number}>}
   */
  function getMonthlyTrend(monthsBack = 6) {
    const txns = _get(KEYS.transactions);
    const result = [];
    const now = new Date();

    for (let i = monthsBack - 1; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = d.getFullYear();
      const month = d.getMonth();
      const label = d.toLocaleDateString('id-ID', { month: 'short' });

      let income = 0;
      let expense = 0;

      txns.forEach(t => {
        const td = new Date(t.date);
        if (td.getFullYear() === year && td.getMonth() === month) {
          if (t.type === 'income') income += t.amount;
          else expense += t.amount;
        }
      });

      result.push({ label, income, expense });
    }

    return result;
  }

  // ── Seed Data ──

  function seedDefaultData() {
    // Only seed if no categories exist
    if (getCategories().length > 0) return;

    const defaultCategories = [
      { name: 'Penjualan Jasa', type: 'income' },
      { name: 'Pencairan Dana', type: 'income' },
      { name: 'Pendapatan Lain-lain', type: 'income' },
      { name: 'Gaji Karyawan', type: 'expense' },
      { name: 'Biaya Server', type: 'expense' },
      { name: 'Operasional Kantor', type: 'expense' },
      { name: 'Transportasi', type: 'expense' },
      { name: 'Marketing', type: 'expense' }
    ];

    defaultCategories.forEach(c => addCategory(c.name, c.type));

    // Seed some sample transactions
    const categories = getCategories();
    const getRandomCat = (type) => {
      const cats = categories.filter(c => c.type === type);
      return cats[Math.floor(Math.random() * cats.length)];
    };

    const now = new Date();
    const sampleTransactions = [];

    // Generate 6 months of sample data
    for (let m = 5; m >= 0; m--) {
      const baseDate = new Date(now.getFullYear(), now.getMonth() - m, 1);

      // 2-4 income transactions per month
      const incomeCount = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < incomeCount; i++) {
        const day = 1 + Math.floor(Math.random() * 28);
        const cat = getRandomCat('income');
        sampleTransactions.push({
          date: new Date(baseDate.getFullYear(), baseDate.getMonth(), day).toISOString().split('T')[0],
          type: 'income',
          categoryId: cat.id,
          amount: (5 + Math.floor(Math.random() * 20)) * 1_000_000,
          description: `Pembayaran ${cat.name.toLowerCase()} bulan ${baseDate.toLocaleDateString('id-ID', { month: 'long' })}`
        });
      }

      // 3-5 expense transactions per month
      const expenseCount = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < expenseCount; i++) {
        const day = 1 + Math.floor(Math.random() * 28);
        const cat = getRandomCat('expense');
        sampleTransactions.push({
          date: new Date(baseDate.getFullYear(), baseDate.getMonth(), day).toISOString().split('T')[0],
          type: 'expense',
          categoryId: cat.id,
          amount: (1 + Math.floor(Math.random() * 15)) * 1_000_000,
          description: `${cat.name} bulan ${baseDate.toLocaleDateString('id-ID', { month: 'long' })}`
        });
      }
    }

    sampleTransactions.forEach(t => addTransaction(t));
  }

  return {
    isLoggedIn,
    login,
    logout,
    getCategories,
    getCategoriesByType,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory,
    getTransactions,
    getTransactionById,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTotalBalance,
    getMonthlyStats,
    getRecentTransactions,
    getFilteredTransactions,
    getMonthlyTrend,
    seedDefaultData
  };
})();
