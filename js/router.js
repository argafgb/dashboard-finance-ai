/* ========================================
   ROUTER — Hash-based SPA Router
   ======================================== */

const Router = (() => {

  const routes = {
    '#dashboard':    { page: () => DashboardPage,   requiresAuth: true },
    '#transaction':  { page: () => TransactionPage,  requiresAuth: true },
    '#ledger':       { page: () => LedgerPage,       requiresAuth: true },
    '#categories':   { page: () => CategoriesPage,   requiresAuth: true },
  };

  let currentCleanup = null;

  function navigate() {
    const app = document.getElementById('app');
    const hash = location.hash || '';

    // Cleanup previous page
    if (currentCleanup) {
      currentCleanup();
      currentCleanup = null;
    }

    // Auth check
    if (!Store.isLoggedIn()) {
      app.innerHTML = LoginPage.render();
      lucide.createIcons({ nodes: [app] });
      LoginPage.bindEvents();
      return;
    }

    // Resolve route
    const route = routes[hash] || routes['#dashboard'];
    if (!hash || !routes[hash]) {
      location.hash = '#dashboard';
      return;
    }

    const page = route.page();

    // Render shell with sidebar + page content
    app.innerHTML = `
      <div class="app-shell">
        ${Sidebar.render()}
        <main class="main-content" id="main-content">
          ${page.render()}
        </main>
      </div>
    `;

    // Init icons
    lucide.createIcons({ nodes: [app] });

    // Bind sidebar events
    Sidebar.bindEvents();

    // Bind page events
    page.bindEvents();

    // Track cleanup
    if (page.cleanup) {
      currentCleanup = page.cleanup;
    }
  }

  function init() {
    window.addEventListener('hashchange', navigate);
    navigate();
  }

  return { init, navigate };
})();
