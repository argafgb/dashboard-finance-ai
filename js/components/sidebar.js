/* ========================================
   SIDEBAR — Navigation Component
   ======================================== */

const Sidebar = (() => {

  const NAV_ITEMS = [
    { hash: '#dashboard',    icon: 'layout-dashboard', label: 'Dashboard' },
    { hash: '#transaction',  icon: 'plus-circle',      label: 'Transaksi' },
    { hash: '#ledger',       icon: 'book-open',        label: 'Riwayat Kas' },
    { hash: '#categories',   icon: 'tags',             label: 'Kategori' }
  ];

  /**
   * Render the sidebar into the app shell
   * @returns {string} HTML string
   */
  function render() {
    const currentHash = location.hash || '#dashboard';

    const navItemsHtml = NAV_ITEMS.map(item => {
      const isActive = currentHash === item.hash;
      return `
        <a href="${item.hash}" class="nav-item ${isActive ? 'active' : ''}" data-nav="${item.hash}">
          <i data-lucide="${item.icon}" style="width:20px;height:20px;"></i>
          <span class="nav-label">${item.label}</span>
        </a>
      `;
    }).join('');

    return `
      <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle menu">
        <i data-lucide="menu" style="width:20px;height:20px;"></i>
      </button>

      <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand">
          <div class="brand-icon">💰</div>
          <div class="brand-text">
            <span class="brand-name">Finance AI</span>
            <span class="brand-label">Dashboard MVP</span>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div class="nav-section-label">Menu Utama</div>
          ${navItemsHtml}
        </nav>

        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="user-avatar">A</div>
            <div class="user-info">
              <span class="user-name">Admin</span>
              <span class="user-role">Administrator</span>
            </div>
          </div>
          <a href="#" class="nav-item" id="logout-btn">
            <i data-lucide="log-out" style="width:20px;height:20px;"></i>
            <span class="nav-label">Keluar</span>
          </a>
        </div>
      </aside>

      <div class="sidebar-overlay" id="sidebar-overlay"></div>
    `;
  }

  /**
   * Bind sidebar events (call after rendering)
   */
  function bindEvents() {
    // Mobile toggle
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (toggle) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    }

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Modal.confirm('Apakah Anda yakin ingin keluar?', () => {
          Store.logout();
          location.hash = '';
          Router.navigate();
        });
      });
    }

    // Close sidebar on nav click (mobile)
    document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
      item.addEventListener('click', () => {
        if (sidebar) sidebar.classList.remove('open');
      });
    });
  }

  /**
   * Update active state without full re-render
   */
  function updateActive() {
    const currentHash = location.hash || '#dashboard';
    document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
      if (item.dataset.nav === currentHash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  return { render, bindEvents, updateActive };
})();
