/* ========================================
   CATEGORIES PAGE — Master Data
   ======================================== */

const CategoriesPage = (() => {

  function render() {
    return `
      <div class="page-container animate-fade-in">
        <div class="page-header">
          <div>
            <h1>Kategori Transaksi</h1>
            <p class="page-subtitle">Kelola kategori pemasukan dan pengeluaran</p>
          </div>
          <button class="btn btn-primary" id="add-category-btn">
            <i data-lucide="plus" style="width:16px;height:16px;"></i>
            Tambah Kategori
          </button>
        </div>

        <div class="categories-grid" id="categories-grid">
          ${_renderSections()}
        </div>
      </div>
    `;
  }

  function _renderSections() {
    const incomeCategories = Store.getCategoriesByType('income');
    const expenseCategories = Store.getCategoriesByType('expense');

    return `
      <!-- Income Section -->
      <div class="card">
        <div class="category-section">
          <div class="category-section-header">
            <span class="section-dot green"></span>
            <h2>Pemasukan</h2>
            <span class="text-caption" style="margin-left:auto;">${incomeCategories.length} kategori</span>
          </div>
          <div class="category-list">
            ${incomeCategories.length > 0
              ? incomeCategories.map(c => _renderCategoryItem(c)).join('')
              : '<div class="category-empty">Belum ada kategori pemasukan.<br>Tambahkan yang pertama!</div>'
            }
          </div>
        </div>
      </div>

      <!-- Expense Section -->
      <div class="card">
        <div class="category-section">
          <div class="category-section-header">
            <span class="section-dot red"></span>
            <h2>Pengeluaran</h2>
            <span class="text-caption" style="margin-left:auto;">${expenseCategories.length} kategori</span>
          </div>
          <div class="category-list">
            ${expenseCategories.length > 0
              ? expenseCategories.map(c => _renderCategoryItem(c)).join('')
              : '<div class="category-empty">Belum ada kategori pengeluaran.<br>Tambahkan yang pertama!</div>'
            }
          </div>
        </div>
      </div>
    `;
  }

  function _renderCategoryItem(cat) {
    return `
      <div class="category-item" data-id="${cat.id}">
        <span class="category-name">${Utils.escapeHtml(cat.name)}</span>
        <div class="category-actions">
          <button class="btn-icon edit-cat-btn" data-id="${cat.id}" title="Edit">
            <i data-lucide="pencil" style="width:14px;height:14px;"></i>
          </button>
          <button class="btn-icon danger delete-cat-btn" data-id="${cat.id}" title="Hapus">
            <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
          </button>
        </div>
      </div>
    `;
  }

  function _refresh() {
    const grid = document.getElementById('categories-grid');
    if (grid) {
      grid.innerHTML = _renderSections();
      lucide.createIcons({ nodes: [grid] });
      _bindItemEvents();
    }
  }

  function bindEvents() {
    // Add category button
    const addBtn = document.getElementById('add-category-btn');
    if (addBtn) {
      addBtn.addEventListener('click', Utils.createRipple);
      addBtn.addEventListener('click', _openAddModal);
    }

    _bindItemEvents();
  }

  function _bindItemEvents() {
    // Edit buttons
    document.querySelectorAll('.edit-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => _startInlineEdit(btn.dataset.id));
    });

    // Delete buttons
    document.querySelectorAll('.delete-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const cat = Store.getCategoryById(id);
        Modal.confirm(
          `Hapus kategori "${cat?.name}"? Transaksi yang sudah menggunakan kategori ini tidak akan terhapus.`,
          () => {
            const result = Store.deleteCategory(id);
            if (result.success) {
              Toast.show('Kategori berhasil dihapus', 'success');
              _refresh();
            } else {
              Toast.show(result.error, 'error');
            }
          }
        );
      });
    });
  }

  function _openAddModal() {
    Modal.open({
      title: 'Tambah Kategori',
      bodyHtml: `
        <div class="form-group">
          <label class="form-label" for="new-cat-name">Nama Kategori</label>
          <input type="text" id="new-cat-name" class="form-input" placeholder="Contoh: Penjualan Produk" maxlength="50">
        </div>
        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label" for="new-cat-type">Tipe</label>
          <select id="new-cat-type" class="form-select">
            <option value="income">Pemasukan</option>
            <option value="expense">Pengeluaran</option>
          </select>
        </div>
      `,
      confirmText: 'Tambah',
      confirmClass: 'btn-success',
      onConfirm: (overlay, closeModal) => {
        const name = overlay.querySelector('#new-cat-name').value.trim();
        const type = overlay.querySelector('#new-cat-type').value;

        if (!name) {
          Toast.show('Nama kategori harus diisi', 'error');
          return;
        }

        const result = Store.addCategory(name, type);
        if (result.success) {
          Toast.show(`Kategori "${name}" berhasil ditambahkan`, 'success');
          closeModal();
          _refresh();
        } else {
          Toast.show(result.error, 'error');
        }
      }
    });
  }

  function _startInlineEdit(id) {
    const cat = Store.getCategoryById(id);
    if (!cat) return;

    const item = document.querySelector(`.category-item[data-id="${id}"]`);
    if (!item) return;

    const nameSpan = item.querySelector('.category-name');
    const originalName = cat.name;

    // Replace with input
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalName;
    input.className = 'inline-edit-input';
    input.maxLength = 50;

    nameSpan.replaceWith(input);
    input.focus();
    input.select();

    const save = () => {
      const newName = input.value.trim();
      if (!newName || newName === originalName) {
        _refresh();
        return;
      }

      const result = Store.updateCategory(id, newName);
      if (result.success) {
        Toast.show('Kategori berhasil diperbarui', 'success');
      } else {
        Toast.show(result.error, 'error');
      }
      _refresh();
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); save(); }
      if (e.key === 'Escape') { _refresh(); }
    });

    input.addEventListener('blur', save);
  }

  return { render, bindEvents };
})();
