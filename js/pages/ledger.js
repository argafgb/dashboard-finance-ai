/* ========================================
   LEDGER PAGE — Riwayat Kas
   ======================================== */

const LedgerPage = (() => {

  const PER_PAGE = 15;
  let currentPage = 1;
  let filters = {
    dateFrom: '',
    dateTo: '',
    type: 'all'
  };

  function render() {
    return `
      <div class="page-container animate-fade-in">
        <div class="page-header">
          <div>
            <h1>Riwayat Kas</h1>
            <p class="page-subtitle">Seluruh catatan transaksi pemasukan dan pengeluaran</p>
          </div>
        </div>

        <!-- Quick Filters -->
        <div class="quick-filters" id="quick-filters">
          <button class="quick-filter-btn active" data-quick="all">Semua</button>
          <button class="quick-filter-btn" data-quick="this-month">Bulan Ini</button>
          <button class="quick-filter-btn" data-quick="last-month">Bulan Lalu</button>
          <button class="quick-filter-btn" data-quick="3-months">3 Bulan Terakhir</button>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar" id="filter-bar">
          <div class="form-group">
            <label class="form-label" for="filter-date-from">Dari Tanggal</label>
            <input type="date" id="filter-date-from" class="form-input" value="${filters.dateFrom}">
          </div>
          <div class="form-group">
            <label class="form-label" for="filter-date-to">Sampai Tanggal</label>
            <input type="date" id="filter-date-to" class="form-input" value="${filters.dateTo}">
          </div>
          <div class="form-group">
            <label class="form-label" for="filter-type">Tipe</label>
            <select id="filter-type" class="form-select">
              <option value="all" ${filters.type === 'all' ? 'selected' : ''}>Semua</option>
              <option value="income" ${filters.type === 'income' ? 'selected' : ''}>Pemasukan</option>
              <option value="expense" ${filters.type === 'expense' ? 'selected' : ''}>Pengeluaran</option>
            </select>
          </div>
          <button class="btn btn-ghost btn-sm" id="filter-reset" style="margin-bottom:0;">
            <i data-lucide="rotate-ccw" style="width:14px;height:14px;"></i>
            Reset
          </button>
        </div>

        <!-- Table -->
        <div class="card">
          <div id="ledger-content">
            ${_renderTable()}
          </div>
        </div>

        <!-- Summary -->
        <div id="ledger-summary">
          ${_renderSummary()}
        </div>
      </div>
    `;
  }

  function _getFilteredData() {
    return Store.getFilteredTransactions(filters);
  }

  function _renderTable() {
    const all = _getFilteredData();
    const total = all.length;
    const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PER_PAGE;
    const pageData = all.slice(start, start + PER_PAGE);

    if (total === 0) {
      return `
        <div class="table-empty">
          <i data-lucide="search-x" style="width:48px;height:48px;"></i>
          <p style="margin-top: var(--space-md);">Tidak ada transaksi ditemukan</p>
          <p class="text-caption" style="margin-top: var(--space-xs);">Coba ubah filter atau tambahkan transaksi baru</p>
        </div>
      `;
    }

    const rowsHtml = pageData.map((t, i) => {
      const cat = Store.getCategoryById(t.categoryId);
      const isIncome = t.type === 'income';
      return `
        <tr>
          <td style="color: var(--text-tertiary);">${start + i + 1}</td>
          <td>${Utils.formatDate(t.date)}</td>
          <td>${cat ? Utils.escapeHtml(cat.name) : '<em class="text-muted">-</em>'}</td>
          <td class="description-cell">${Utils.escapeHtml(t.description || '-')}</td>
          <td class="amount-cell ${isIncome ? 'income' : 'expense'}">
            ${isIncome ? '+' : '-'}${Utils.formatRupiah(t.amount)}
          </td>
          <td>
            <span class="badge ${isIncome ? 'badge-green' : 'badge-red'}">
              ${isIncome ? 'Masuk' : 'Keluar'}
            </span>
          </td>
          <td>
            <div style="display:flex;gap:2px;">
              <button class="btn-icon edit-txn-btn" data-id="${t.id}" title="Edit">
                <i data-lucide="pencil" style="width:14px;height:14px;"></i>
              </button>
              <button class="btn-icon danger delete-txn-btn" data-id="${t.id}" title="Hapus">
                <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    let paginationHtml = '';
    if (totalPages > 1) {
      const pages = [];
      pages.push(`<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">‹</button>`);
      for (let p = 1; p <= totalPages; p++) {
        pages.push(`<button class="page-btn ${p === currentPage ? 'active' : ''}" data-page="${p}">${p}</button>`);
      }
      pages.push(`<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">›</button>`);
      paginationHtml = `<div class="pagination">${pages.join('')}</div>`;
    }

    return `
      <p class="text-caption" style="margin-bottom: var(--space-md);">Menampilkan ${total} transaksi</p>
      <div class="ledger-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tanggal</th>
              <th>Kategori</th>
              <th>Catatan</th>
              <th>Nominal</th>
              <th>Tipe</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
      ${paginationHtml}
    `;
  }

  function _renderSummary() {
    const all = _getFilteredData();
    let totalIn = 0, totalOut = 0;
    all.forEach(t => {
      if (t.type === 'income') totalIn += t.amount;
      else totalOut += t.amount;
    });

    return `
      <div class="summary-bar">
        <div class="summary-item">
          <span class="summary-label">Total Masuk</span>
          <span class="summary-value text-green">${Utils.formatRupiah(totalIn)}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Total Keluar</span>
          <span class="summary-value text-red">${Utils.formatRupiah(totalOut)}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Selisih</span>
          <span class="summary-value" style="color: ${totalIn - totalOut >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}">
            ${Utils.formatRupiah(totalIn - totalOut)}
          </span>
        </div>
      </div>
    `;
  }

  function _refresh() {
    const content = document.getElementById('ledger-content');
    const summary = document.getElementById('ledger-summary');
    if (content) {
      content.innerHTML = _renderTable();
      lucide.createIcons({ nodes: [content] });
      _bindTableEvents();
    }
    if (summary) {
      summary.innerHTML = _renderSummary();
    }
  }

  function bindEvents() {
    // Filter inputs
    const dateFrom = document.getElementById('filter-date-from');
    const dateTo = document.getElementById('filter-date-to');
    const typeSelect = document.getElementById('filter-type');

    [dateFrom, dateTo, typeSelect].forEach(el => {
      if (el) {
        el.addEventListener('change', () => {
          filters.dateFrom = dateFrom.value;
          filters.dateTo = dateTo.value;
          filters.type = typeSelect.value;
          currentPage = 1;
          _clearQuickFilterActive();
          _refresh();
        });
      }
    });

    // Quick filter buttons
    document.querySelectorAll('#quick-filters .quick-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _applyQuickFilter(btn.dataset.quick);

        // Update active
        document.querySelectorAll('#quick-filters .quick-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Reset button
    const resetBtn = document.getElementById('filter-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        filters = { dateFrom: '', dateTo: '', type: 'all' };
        currentPage = 1;
        dateFrom.value = '';
        dateTo.value = '';
        typeSelect.value = 'all';
        document.querySelectorAll('#quick-filters .quick-filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-quick="all"]').classList.add('active');
        _refresh();
      });
    }

    // Table events
    _bindTableEvents();
  }

  function _bindTableEvents() {
    // Pagination
    document.querySelectorAll('.pagination .page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page, 10);
        _refresh();
      });
    });

    // Delete
    document.querySelectorAll('.delete-txn-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        Modal.confirm('Apakah Anda yakin ingin menghapus transaksi ini?', () => {
          const result = Store.deleteTransaction(id);
          if (result.success) {
            Toast.show('Transaksi berhasil dihapus', 'success');
            _refresh();
          } else {
            Toast.show('Gagal menghapus transaksi', 'error');
          }
        });
      });
    });

    // Edit
    document.querySelectorAll('.edit-txn-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        _openEditModal(id);
      });
    });
  }

  function _openEditModal(id) {
    const txn = Store.getTransactionById(id);
    if (!txn) return;

    const incomeCategories = Store.getCategoriesByType('income');
    const expenseCategories = Store.getCategoriesByType('expense');
    const categories = txn.type === 'income' ? incomeCategories : expenseCategories;

    const catOptions = categories
      .map(c => `<option value="${c.id}" ${c.id === txn.categoryId ? 'selected' : ''}>${Utils.escapeHtml(c.name)}</option>`)
      .join('');

    Modal.open({
      title: 'Edit Transaksi',
      bodyHtml: `
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" id="edit-date" class="form-input" value="${txn.date}">
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select id="edit-category" class="form-select">
            ${catOptions}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Nominal (Rp)</label>
          <input type="text" id="edit-amount" class="form-input" value="${txn.amount.toLocaleString('id-ID')}" inputmode="numeric">
        </div>
        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Catatan</label>
          <textarea id="edit-description" class="form-textarea" rows="2">${Utils.escapeHtml(txn.description || '')}</textarea>
        </div>
      `,
      confirmText: 'Simpan Perubahan',
      onConfirm: (overlay, closeModal) => {
        const date = overlay.querySelector('#edit-date').value;
        const categoryId = overlay.querySelector('#edit-category').value;
        const amount = Utils.parseRupiah(overlay.querySelector('#edit-amount').value);
        const description = overlay.querySelector('#edit-description').value;

        if (!date || !categoryId || !amount) {
          Toast.show('Semua field wajib diisi', 'error');
          return;
        }

        const result = Store.updateTransaction(id, { date, categoryId, amount, description });
        if (result.success) {
          Toast.show('Transaksi berhasil diperbarui', 'success');
          closeModal();
          _refresh();
        } else {
          Toast.show(result.error, 'error');
        }
      },
      onOpen: (overlay) => {
        const amountInput = overlay.querySelector('#edit-amount');
        if (amountInput) Utils.bindRupiahInput(amountInput);
      }
    });
  }

  function _applyQuickFilter(quick) {
    const now = new Date();
    const dateFrom = document.getElementById('filter-date-from');
    const dateTo = document.getElementById('filter-date-to');
    const typeSelect = document.getElementById('filter-type');

    switch (quick) {
      case 'all':
        filters = { dateFrom: '', dateTo: '', type: 'all' };
        break;
      case 'this-month':
        filters.dateFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
        filters.dateTo = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        break;
      case 'last-month':
        filters.dateFrom = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString().split('T')[0];
        filters.dateTo = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0];
        break;
      case '3-months':
        filters.dateFrom = new Date(now.getFullYear(), now.getMonth() - 2, 1).toISOString().split('T')[0];
        filters.dateTo = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        break;
    }

    if (dateFrom) dateFrom.value = filters.dateFrom;
    if (dateTo) dateTo.value = filters.dateTo;
    if (typeSelect) typeSelect.value = filters.type;

    currentPage = 1;
    _refresh();
  }

  function _clearQuickFilterActive() {
    document.querySelectorAll('#quick-filters .quick-filter-btn').forEach(b => b.classList.remove('active'));
  }

  return { render, bindEvents };
})();
