const CURRENCY_FORMATTER = new Intl.NumberFormat('en-IN', {
  currency: 'INR',
  style: 'currency',
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}
