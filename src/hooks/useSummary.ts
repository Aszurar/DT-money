import { useTransactions } from './useTransactions'

export function useSummary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.balance += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.balance -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      balance: 0,
    },
  )

  return summary
}
