/* ============================================================
   AdSums — format.js
   Number formatting utilities shared across all calculators.
   Exposes a global `AdSums.fmt` object.
   ============================================================ */

window.AdSums = window.AdSums || {};

AdSums.fmt = {

  // Current currency symbol — set by each page's currency switcher
  sym: '£',

  // Full precision: £1,234.56
  full(v) {
    return this.sym + Math.abs(v).toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  },

  // Short: £1.2k, £3.4m, £1.2bn
  short(v) {
    const a = Math.abs(v);
    if (a >= 1e9) return this.sym + (a / 1e9).toFixed(2) + 'bn';
    if (a >= 1e6) return this.sym + (a / 1e6).toFixed(2) + 'm';
    if (a >= 1e3) return this.sym + (a / 1e3).toFixed(1) + 'k';
    return this.sym + Math.round(a).toLocaleString('en-GB');
  },

  // Hero display (no symbol — symbol shown separately in HTML)
  hero(v) {
    const a = Math.abs(v);
    if (a >= 1e9) return (a / 1e9).toFixed(2) + 'bn';
    if (a >= 1e6) return (a / 1e6).toFixed(2) + 'm';
    return Math.round(a).toLocaleString('en-GB');
  },

  // Percentage: 12.34%
  pct(v, dp = 2) {
    return v.toFixed(dp) + '%';
  },

  // Years + months string: 13y 4m
  duration(years) {
    const y = Math.floor(years);
    const m = Math.round((years - y) * 12);
    return y + 'y' + (m > 0 ? ' ' + m + 'm' : '');
  }

};
