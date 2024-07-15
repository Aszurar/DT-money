import { ITransaction } from '../../dto/transaction'
import { TRANSACTION_COLLECTION } from '../storageConfig'

export function getTransactions() {
  const transactions = localStorage.getItem(TRANSACTION_COLLECTION)
  const transactionsFormatted: ITransaction[] = transactions
    ? JSON.parse(transactions)
    : []

  return transactionsFormatted
}
