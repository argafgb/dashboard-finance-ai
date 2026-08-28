/* ========================================
   LOGIN PAGE
   ======================================== */

const LoginPage = (() => {

  function render() {
    return `
      <div class="login-layout">
        <div class="login-card">
          <div class="login-logo">
            <div class="logo-icon">💰</div>
            <h1>Dashboard Finance AI</h1>
            <p>Masuk untuk mengelola keuangan perusahaan</p>
          </div>

          <form class="login-form" id="login-form">
            <div class="form-group">
              <label class="form-label" for="login-username">Username</label>
              <div class="input-wrapper">
                <i data-lucide="user" class="input-icon" style="width:16px;height:16px;"></i>
                <input
                  type="text"
                  id="login-username"
                  class="form-input"
                  placeholder="Masukkan username"
                  autocomplete="username"
                  required
                >
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="login-password">Password</label>
              <div class="input-wrapper">
                <i data-lucide="lock" class="input-icon" style="width:16px;height:16px;"></i>
                <input
                  type="password"
                  id="login-password"
                  class="form-input"
                  placeholder="Masukkan password"
                  autocomplete="current-password"
                  required
                >
                <button type="button" class="toggle-password" id="toggle-password" aria-label="Tampilkan password">
                  <i data-lucide="eye" style="width:16px;height:16px;"></i>
                </button>
              </div>
            </div>

            <div id="login-error" class="form-error" style="display:none; margin-bottom: var(--space-md);"></div>

            <button type="submit" class="btn btn-success" id="login-submit">
              <i data-lucide="log-in" style="width:16px;height:16px;"></i>
              Masuk
            </button>
          </form>

          <p style="text-align:center; margin-top: var(--space-lg); font-size: var(--fs-caption); color: var(--text-tertiary);">
            Demo: username <strong style="color:var(--text-secondary);">admin</strong> / password <strong style="color:var(--text-secondary);">admin</strong>
          </p>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const form = document.getElementById('login-form');
    const errorEl = document.getElementById('login-error');
    const togglePw = document.getElementById('toggle-password');
    const pwInput = document.getElementById('login-password');

    // Toggle password visibility
    if (togglePw) {
      togglePw.addEventListener('click', () => {
        const isPassword = pwInput.type === 'password';
        pwInput.type = isPassword ? 'text' : 'password';
        togglePw.innerHTML = `<i data-lucide="${isPassword ? 'eye-off' : 'eye'}" style="width:16px;height:16px;"></i>`;
        lucide.createIcons({ nodes: [togglePw] });
      });
    }

    // Form submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        if (!username || !password) {
          errorEl.textContent = 'Username dan password harus diisi';
          errorEl.style.display = 'block';
          return;
        }

        const success = Store.login(username, password);
        if (success) {
          Toast.show('Selamat datang, Admin!', 'success');
          location.hash = '#dashboard';
          Router.navigate();
        } else {
          errorEl.textContent = 'Username atau password salah';
          errorEl.style.display = 'block';
          pwInput.value = '';
          pwInput.focus();
        }
      });
    }
  }

  return { render, bindEvents };
})();
