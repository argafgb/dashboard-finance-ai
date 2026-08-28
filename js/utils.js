/* ========================================
   UTILS — Helper Functions
   ======================================== */

const Utils = (() => {

  /**
   * Format number to Indonesian Rupiah string
   * @param {number} amount
   * @param {boolean} showSign - Whether to prepend +/- sign
   * @returns {string} e.g. "Rp 1.500.000"
   */
  function formatRupiah(amount, showSign = false) {
    const abs = Math.abs(amount);
    const formatted = 'Rp ' + abs.toLocaleString('id-ID');
    if (showSign) {
      return amount >= 0 ? '+' + formatted : '-' + formatted;
    }
    return formatted;
  }

  /**
   * Format compact rupiah for large numbers
   * @param {number} amount
   * @returns {string} e.g. "Rp 45.2M" or "Rp 500K"
   */
  function formatRupiahCompact(amount) {
    const abs = Math.abs(amount);
    if (abs >= 1_000_000_000) {
      return 'Rp ' + (abs / 1_000_000_000).toFixed(1).replace('.0', '') + 'B';
    }
    if (abs >= 1_000_000) {
      return 'Rp ' + (abs / 1_000_000).toFixed(1).replace('.0', '') + 'M';
    }
    if (abs >= 1_000) {
      return 'Rp ' + (abs / 1_000).toFixed(0) + 'K';
    }
    return 'Rp ' + abs.toLocaleString('id-ID');
  }

  /**
   * Parse rupiah string back to number
   * @param {string} str - e.g. "1.500.000" or "Rp 1.500.000"
   * @returns {number}
   */
  function parseRupiah(str) {
    return parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
  }

  /**
   * Format date to Indonesian locale
   * @param {string} dateStr - ISO date string
   * @param {string} format - 'short' | 'long'
   * @returns {string}
   */
  function formatDate(dateStr, format = 'short') {
    const date = new Date(dateStr);
    if (format === 'long') {
      return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  /**
   * Get today's date as YYYY-MM-DD
   * @returns {string}
   */
  function today() {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Get first day of current month as YYYY-MM-DD
   * @returns {string}
   */
  function firstDayOfMonth() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().split('T')[0];
  }

  /**
   * Get last day of current month as YYYY-MM-DD
   * @returns {string}
   */
  function lastDayOfMonth() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).toISOString().split('T')[0];
  }

  /**
   * Get current month name in Indonesian
   * @returns {string}
   */
  function currentMonthName() {
    return new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  }

  /**
   * Generate UUID-like ID
   * @returns {string}
   */
  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Animated count-up effect
   * @param {HTMLElement} el - Target element
   * @param {number} target - Target number
   * @param {number} duration - Animation duration in ms
   * @param {function} formatter - Format function
   */
  function countUp(el, target, duration = 800, formatter = formatRupiah) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);
      el.textContent = formatter(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * Format number input to rupiah while typing
   * @param {HTMLInputElement} input
   */
  function bindRupiahInput(input) {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/[^0-9]/g, '');
      if (value) {
        e.target.value = parseInt(value).toLocaleString('id-ID');
      }
    });
  }

  /**
   * Create ripple effect on button click
   * @param {MouseEvent} e
   */
  function createRipple(e) {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }

  /**
   * Escape HTML to prevent XSS
   * @param {string} str
   * @returns {string}
   */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  return {
    formatRupiah,
    formatRupiahCompact,
    parseRupiah,
    formatDate,
    today,
    firstDayOfMonth,
    lastDayOfMonth,
    currentMonthName,
    generateId,
    countUp,
    bindRupiahInput,
    createRipple,
    escapeHtml
  };
})();
