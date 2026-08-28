/**
 * Formats a number to full Indonesian Rupiah string
 * @param amount Number amount
 * @param showSign Whether to prepend '+' or '-'
 * @returns e.g. "Rp 15,000,000" or "+Rp 15,000,000"
 */
export function formatRupiah(amount: number, showSign = false): string {
  const abs = Math.abs(amount);
  const formatted = 'Rp ' + abs.toLocaleString('en-US'); // Using comma separator as shown in mockup "+Rp 15,000,000"
  if (showSign) {
    return amount >= 0 ? '+' + formatted : '-' + formatted;
  }
  return formatted;
}

/**
 * Formats a number to compact Rupiah string for KPI cards
 * @param amount Number amount
 * @returns e.g. "Rp 45.2M", "Rp 72.5M", "Rp 27.3M"
 */
export function formatRupiahCompact(amount: number): string {
  const abs = Math.abs(amount);
  if (abs >= 1_000_000_000) {
    const val = (abs / 1_000_000_000).toFixed(1).replace('.0', '');
    return `Rp ${val}B`;
  }
  if (abs >= 1_000_000) {
    const val = (abs / 1_000_000).toFixed(1).replace('.0', '');
    return `Rp ${val}M`;
  }
  if (abs >= 1_000) {
    const val = (abs / 1_000).toFixed(0);
    return `Rp ${val}K`;
  }
  return `Rp ${abs.toLocaleString('en-US')}`;
}

/**
 * Parses numeric value from a raw or formatted string
 */
export function parseRupiah(val: string | number): number {
  if (typeof val === 'number') return val;
  const cleaned = val.replace(/[^0-9]/g, '');
  return parseInt(cleaned, 10) || 0;
}

/**
 * Formats date to the exact pattern shown in mockup: "28 Aug, 14:30"
 */
export function formatDateTime(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const day = date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month}, ${hours}:${minutes}`;
  } catch {
    return dateStr;
  }
}

/**
 * Formats ISO date to YYYY-MM-DD for input[type=date]
 */
export function toInputDateFormat(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString().split('T')[0];
  try {
    return new Date(dateStr).toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Generate unique random ID
 */
export function generateId(): string {
  return 'tx_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}
