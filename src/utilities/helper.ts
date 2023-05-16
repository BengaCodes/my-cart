const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'GBP',
  style: 'currency'
})

export function formatCurreny(price: number): string {
  return CURRENCY_FORMATTER.format(price)
}
