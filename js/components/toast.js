/* ========================================
   TOAST — Notification System
   ======================================== */

const Toast = (() => {
  const container = document.getElementById('toast-container');

  const ICONS = {
    success: 'check-circle',
    error: 'alert-circle',
    info: 'info'
  };

  /**
   * Show a toast notification
   * @param {string} message
   * @param {'success'|'error'|'info'} type
   * @param {number} duration - Auto-dismiss in ms
   */
  function show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i data-lucide="${ICONS[type]}" class="toast-icon" style="width:18px;height:18px;"></i>
      <span class="toast-message">${Utils.escapeHtml(message)}</span>
      <button class="toast-close" aria-label="Tutup notifikasi">
        <i data-lucide="x" style="width:14px;height:14px;"></i>
      </button>
    `;

    container.appendChild(toast);
    lucide.createIcons({ nodes: [toast] });

    // Close on click
    toast.querySelector('.toast-close').addEventListener('click', () => dismiss(toast));

    // Auto-dismiss
    if (duration > 0) {
      setTimeout(() => dismiss(toast), duration);
    }
  }

  function dismiss(toast) {
    if (!toast.parentNode) return;
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }

  return { show };
})();
