/* ========================================
   MODAL — Reusable Modal System
   ======================================== */

const Modal = (() => {
  const container = document.getElementById('modal-container');

  /**
   * Open a modal dialog
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.bodyHtml - Inner HTML for the modal body
   * @param {string} options.confirmText - Confirm button label
   * @param {string} options.confirmClass - Confirm button CSS class
   * @param {function} options.onConfirm - Callback when confirmed
   * @param {function} options.onOpen - Callback after modal is rendered (for binding events)
   */
  function open({ title, bodyHtml, confirmText = 'Simpan', confirmClass = 'btn-primary', onConfirm, onOpen }) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box animate-scale-in">
        <div class="modal-header">
          <h3>${Utils.escapeHtml(title)}</h3>
          <button class="btn-icon modal-close-btn" aria-label="Tutup modal">
            <i data-lucide="x" style="width:18px;height:18px;"></i>
          </button>
        </div>
        <div class="modal-body">
          ${bodyHtml}
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost modal-cancel-btn">Batal</button>
          <button class="btn ${confirmClass} modal-confirm-btn">${Utils.escapeHtml(confirmText)}</button>
        </div>
      </div>
    `;

    container.appendChild(overlay);
    lucide.createIcons({ nodes: [overlay] });

    // Close handlers
    const closeModal = () => overlay.remove();

    overlay.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    overlay.querySelector('.modal-cancel-btn').addEventListener('click', closeModal);

    // Click outside to close
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // ESC key to close
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);

    // Confirm handler
    overlay.querySelector('.modal-confirm-btn').addEventListener('click', () => {
      if (onConfirm) onConfirm(overlay, closeModal);
    });

    // onOpen callback
    if (onOpen) onOpen(overlay);

    // Auto-focus first input
    const firstInput = overlay.querySelector('input, select, textarea');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  /**
   * Open a confirmation dialog
   * @param {string} message
   * @param {function} onConfirm
   */
  function confirm(message, onConfirm) {
    open({
      title: 'Konfirmasi',
      bodyHtml: `<p style="color: var(--text-secondary); line-height: 1.6;">${Utils.escapeHtml(message)}</p>`,
      confirmText: 'Ya, Lanjutkan',
      confirmClass: 'btn-danger',
      onConfirm: (overlay, closeModal) => {
        onConfirm();
        closeModal();
      }
    });
  }

  return { open, confirm };
})();
