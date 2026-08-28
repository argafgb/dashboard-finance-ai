/* ========================================
   TRANSACTION FORM PAGE
   ======================================== */

const TransactionPage = (() => {

  let currentType = 'income';

  function render() {
    const incomeCategories = Store.getCategoriesByType('income');
    const expenseCategories = Store.getCategoriesByType('expense');

    const categoriesOptions = (currentType === 'income' ? incomeCategories : expenseCategories)
      .map(c => `<option value="${c.id}">${Utils.escapeHtml(c.name)}</option>`)
      .join('');

    return `
      <div class="page-container animate-fade-in">
        <div class="page-header">
          <div>
            <h1>Tambah Transaksi</h1>
            <p class="page-subtitle">Catat pemasukan atau pengeluaran baru</p>
          </div>
        </div>

        <div class="transaction-form-card">
          <div class="card">
            <form id="transaction-form">
              <!-- Type Toggle -->
              <div class="form-group">
                <label class="form-label">Tipe Transaksi</label>
                <div class="toggle-pills" id="type-toggle">
                  <button type="button" class="toggle-pill ${currentType === 'income' ? 'active-income' : ''}" data-type="income">
                    <i data-lucide="trending-up" style="width:14px;height:14px;"></i>
                    Pemasukan
                  </button>
                  <button type="button" class="toggle-pill ${currentType === 'expense' ? 'active-expense' : ''}" data-type="expense">
                    <i data-lucide="trending-down" style="width:14px;height:14px;"></i>
                    Pengeluaran
                  </button>
                </div>
              </div>

              <!-- Date -->
              <div class="form-group">
                <label class="form-label" for="txn-date">Tanggal Transaksi</label>
                <input type="date" id="txn-date" class="form-input" value="${Utils.today()}" required>
              </div>

              <!-- Category -->
              <div class="form-group">
                <label class="form-label" for="txn-category">Kategori</label>
                <select id="txn-category" class="form-select" required>
                  <option value="">— Pilih Kategori —</option>
                  ${categoriesOptions}
                </select>
                <p class="form-hint" id="category-hint" style="display:none;">
                  Belum ada kategori. <a href="#categories">Buat kategori dulu</a>.
                </p>
              </div>

              <!-- Amount -->
              <div class="form-group">
                <label class="form-label" for="txn-amount">Nominal (Rp)</label>
                <input type="text" id="txn-amount" class="form-input" placeholder="0" inputmode="numeric" required>
              </div>

              <!-- Description -->
              <div class="form-group">
                <label class="form-label" for="txn-description">Catatan / Deskripsi</label>
                <textarea id="txn-description" class="form-textarea" rows="3" placeholder="Keterangan singkat tentang transaksi ini..."></textarea>
              </div>

              <!-- Submit -->
              <button type="submit" class="btn btn-success" id="txn-submit" style="width:100%; padding: 12px;">
                <i data-lucide="save" style="width:16px;height:16px;"></i>
                Simpan Transaksi
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    // Type toggle
    const togglePills = document.querySelectorAll('#type-toggle .toggle-pill');
    togglePills.forEach(pill => {
      pill.addEventListener('click', () => {
        currentType = pill.dataset.type;
        _updateTypeUI();
        _updateCategoryOptions();
      });
    });

    // Rupiah formatting on amount input
    const amountInput = document.getElementById('txn-amount');
    if (amountInput) {
      Utils.bindRupiahInput(amountInput);
    }

    // Show hint if no categories
    _checkCategoryHint();

    // Form submit
    const form = document.getElementById('transaction-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        _handleSubmit();
      });
    }

    // Ripple on submit button
    const submitBtn = document.getElementById('txn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', Utils.createRipple);
    }
  }

  function _updateTypeUI() {
    document.querySelectorAll('#type-toggle .toggle-pill').forEach(pill => {
      pill.classList.remove('active-income', 'active-expense');
      if (pill.dataset.type === currentType) {
        pill.classList.add(currentType === 'income' ? 'active-income' : 'active-expense');
      }
    });
  }

  function _updateCategoryOptions() {
    const select = document.getElementById('txn-category');
    if (!select) return;

    const categories = Store.getCategoriesByType(currentType);
    select.innerHTML = '<option value="">— Pilih Kategori —</option>' +
      categories.map(c => `<option value="${c.id}">${Utils.escapeHtml(c.name)}</option>`).join('');

    _checkCategoryHint();
  }

  function _checkCategoryHint() {
    const hint = document.getElementById('category-hint');
    const categories = Store.getCategoriesByType(currentType);
    if (hint) {
      hint.style.display = categories.length === 0 ? 'block' : 'none';
    }
  }

  function _handleSubmit() {
    const date = document.getElementById('txn-date').value;
    const categoryId = document.getElementById('txn-category').value;
    const amountRaw = document.getElementById('txn-amount').value;
    const description = document.getElementById('txn-description').value;

    // Validate
    if (!date) { Toast.show('Tanggal harus diisi', 'error'); return; }
    if (!categoryId) { Toast.show('Pilih kategori terlebih dahulu', 'error'); return; }

    const amount = Utils.parseRupiah(amountRaw);
    if (!amount || amount <= 0) { Toast.show('Nominal harus lebih dari 0', 'error'); return; }

    // Simulate brief loading
    const submitBtn = document.getElementById('txn-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Menyimpan...';

    setTimeout(() => {
      const result = Store.addTransaction({
        date,
        type: currentType,
        categoryId,
        amount,
        description
      });

      if (result.success) {
        Toast.show(
          `Transaksi ${currentType === 'income' ? 'pemasukan' : 'pengeluaran'} berhasil disimpan!`,
          'success'
        );
        _resetForm();
      } else {
        Toast.show('Gagal menyimpan transaksi', 'error');
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i data-lucide="save" style="width:16px;height:16px;"></i> Simpan Transaksi';
      lucide.createIcons({ nodes: [submitBtn] });
    }, 500);
  }

  function _resetForm() {
    const form = document.getElementById('transaction-form');
    if (form) form.reset();
    document.getElementById('txn-date').value = Utils.today();
    document.getElementById('txn-amount').value = '';
    document.getElementById('txn-description').value = '';
    _updateCategoryOptions();
  }

  return { render, bindEvents };
})();
