// Currency formatting helpers — `sym` is set by the calculator page
const fmtFull = v => sym + Math.abs(v).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtS = v => { const a = Math.abs(v); if (a >= 1e9) return sym + (a / 1e9).toFixed(2) + 'bn'; if (a >= 1e6) return sym + (a / 1e6).toFixed(2) + 'm'; if (a >= 1e3) return sym + (a / 1e3).toFixed(1) + 'k'; return sym + Math.round(a).toLocaleString(); };
const fmtH = v => { const a = Math.abs(v); if (a >= 1e9) return (a / 1e9).toFixed(2) + 'bn'; if (a >= 1e6) return (a / 1e6).toFixed(2) + 'm'; return Math.round(a).toLocaleString('en-GB'); };
