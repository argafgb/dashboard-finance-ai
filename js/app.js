/* ========================================
   APP — Entry Point
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Seed default data on first visit
  Store.seedDefaultData();

  // Boot router
  Router.init();
});
