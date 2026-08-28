/* ========================================
   DASHBOARD PAGE
   ======================================== */

const DashboardPage = (() => {
  let barChartInstance = null;
  let lineChartInstance = null;

  function render() {
    const now = new Date();
    const balance = Store.getTotalBalance();
    const monthly = Store.getMonthlyStats(now.getFullYear(), now.getMonth());
    const recent = Store.getRecentTransactions(5);

    const recentRowsHtml = recent.length > 0
      ? recent.map(t => {
          const cat = Store.getCategoryById(t.categoryId);
          const isIncome = t.type === 'income';
          return `
            <tr>
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
            </tr>
          `;
        }).join('')
      : `
        <tr>
          <td colspan="5" class="table-empty">
            <i data-lucide="inbox"></i>
            Belum ada transaksi
          </td>
        </tr>
      `;

    return `
      <div class="page-container animate-fade-in">
        <div class="page-header">
          <div>
            <h1>Dashboard</h1>
            <p class="page-subtitle">${Utils.currentMonthName()}</p>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="stats-grid">
          <div class="stat-card blue">
            <div class="stat-icon">
              <i data-lucide="wallet" style="width:20px;height:20px;"></i>
            </div>
            <div class="stat-label">Total Saldo</div>
            <div class="stat-value" id="stat-balance" data-target="${balance}">Rp 0</div>
            <div class="stat-sub">Semua waktu</div>
          </div>

          <div class="stat-card green">
            <div class="stat-icon">
              <i data-lucide="trending-up" style="width:20px;height:20px;"></i>
            </div>
            <div class="stat-label">Pemasukan Bulan Ini</div>
            <div class="stat-value" id="stat-income" data-target="${monthly.income}">Rp 0</div>
            <div class="stat-sub">${Utils.currentMonthName()}</div>
          </div>

          <div class="stat-card red">
            <div class="stat-icon">
              <i data-lucide="trending-down" style="width:20px;height:20px;"></i>
            </div>
            <div class="stat-label">Pengeluaran Bulan Ini</div>
            <div class="stat-value" id="stat-expense" data-target="${monthly.expense}">Rp 0</div>
            <div class="stat-sub">${Utils.currentMonthName()}</div>
          </div>
        </div>

        <!-- Line Chart (Trend) -->
        <div class="dashboard-chart-line">
          <div class="card">
            <div class="card-header">
              <span class="card-title">
                <i data-lucide="activity" style="width:16px;height:16px;"></i>
                Tren Keuangan 6 Bulan Terakhir
              </span>
            </div>
            <div class="chart-container-line">
              <canvas id="trend-line-chart"></canvas>
            </div>
          </div>
        </div>

        <!-- Bottom Grid: Bar Chart + Recent Transactions -->
        <div class="dashboard-bottom">
          <div class="card">
            <div class="card-header">
              <span class="card-title">
                <i data-lucide="bar-chart-3" style="width:16px;height:16px;"></i>
                Pemasukan vs Pengeluaran
              </span>
            </div>
            <div class="chart-container">
              <canvas id="monthly-bar-chart"></canvas>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <span class="card-title">
                <i data-lucide="clock" style="width:16px;height:16px;"></i>
                Transaksi Terakhir
              </span>
            </div>
            <div class="recent-table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Kategori</th>
                    <th>Catatan</th>
                    <th>Nominal</th>
                    <th>Tipe</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentRowsHtml}
                </tbody>
              </table>
            </div>
            <a href="#ledger" class="view-all-link">
              Lihat Semua
              <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    // Count-up animations
    _animateStats();

    // Charts
    _renderLineChart();
    _renderBarChart();
  }

  function _animateStats() {
    const statEls = [
      document.getElementById('stat-balance'),
      document.getElementById('stat-income'),
      document.getElementById('stat-expense')
    ];

    statEls.forEach(el => {
      if (!el) return;
      const target = parseInt(el.dataset.target, 10) || 0;
      Utils.countUp(el, target, 800);
    });
  }

  function _renderLineChart() {
    const canvas = document.getElementById('trend-line-chart');
    if (!canvas) return;

    const trend = Store.getMonthlyTrend(6);
    const labels = trend.map(t => t.label);
    const incomeData = trend.map(t => t.income);
    const expenseData = trend.map(t => t.expense);

    // Destroy previous instance
    if (lineChartInstance) lineChartInstance.destroy();

    const ctx = canvas.getContext('2d');

    // Gradient for income line
    const incomeGradient = ctx.createLinearGradient(0, 0, 0, 300);
    incomeGradient.addColorStop(0, 'rgba(0, 214, 143, 0.3)');
    incomeGradient.addColorStop(1, 'rgba(0, 214, 143, 0.02)');

    // Gradient for expense line
    const expenseGradient = ctx.createLinearGradient(0, 0, 0, 300);
    expenseGradient.addColorStop(0, 'rgba(255, 107, 107, 0.3)');
    expenseGradient.addColorStop(1, 'rgba(255, 107, 107, 0.02)');

    lineChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Pemasukan',
            data: incomeData,
            borderColor: '#00d68f',
            backgroundColor: incomeGradient,
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#00d68f',
            pointBorderColor: '#12121a',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
          },
          {
            label: 'Pengeluaran',
            data: expenseData,
            borderColor: '#ff6b6b',
            backgroundColor: expenseGradient,
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#ff6b6b',
            pointBorderColor: '#12121a',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              color: '#8888a0',
              font: { family: 'Inter', size: 12 },
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
            }
          },
          tooltip: {
            backgroundColor: '#1a1a2e',
            titleColor: '#f0f0f5',
            bodyColor: '#8888a0',
            borderColor: '#2a2a3e',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            titleFont: { family: 'Inter', weight: '600' },
            bodyFont: { family: 'Inter' },
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + Utils.formatRupiah(context.raw);
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(42, 42, 62, 0.5)', drawBorder: false },
            ticks: { color: '#555570', font: { family: 'Inter', size: 11 } }
          },
          y: {
            grid: { color: 'rgba(42, 42, 62, 0.5)', drawBorder: false },
            ticks: {
              color: '#555570',
              font: { family: 'Inter', size: 11 },
              callback: function(value) {
                return Utils.formatRupiahCompact(value);
              }
            },
            beginAtZero: true
          }
        }
      }
    });
  }

  function _renderBarChart() {
    const canvas = document.getElementById('monthly-bar-chart');
    if (!canvas) return;

    const now = new Date();
    const monthly = Store.getMonthlyStats(now.getFullYear(), now.getMonth());

    // Destroy previous instance
    if (barChartInstance) barChartInstance.destroy();

    barChartInstance = new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Pemasukan', 'Pengeluaran'],
        datasets: [{
          data: [monthly.income, monthly.expense],
          backgroundColor: [
            'rgba(0, 214, 143, 0.7)',
            'rgba(255, 107, 107, 0.7)'
          ],
          borderColor: [
            '#00d68f',
            '#ff6b6b'
          ],
          borderWidth: 1,
          borderRadius: 6,
          barPercentage: 0.5,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a1a2e',
            titleColor: '#f0f0f5',
            bodyColor: '#8888a0',
            borderColor: '#2a2a3e',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            titleFont: { family: 'Inter', weight: '600' },
            bodyFont: { family: 'Inter' },
            callbacks: {
              label: function(context) {
                return Utils.formatRupiah(context.raw);
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(42, 42, 62, 0.5)', drawBorder: false },
            ticks: {
              color: '#555570',
              font: { family: 'Inter', size: 11 },
              callback: function(value) {
                return Utils.formatRupiahCompact(value);
              }
            },
            beginAtZero: true
          },
          y: {
            grid: { display: false },
            ticks: {
              color: '#8888a0',
              font: { family: 'Inter', size: 12, weight: '500' }
            }
          }
        }
      }
    });
  }

  function cleanup() {
    if (barChartInstance) { barChartInstance.destroy(); barChartInstance = null; }
    if (lineChartInstance) { lineChartInstance.destroy(); lineChartInstance = null; }
  }

  return { render, bindEvents, cleanup };
})();
