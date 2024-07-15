import { ITransaction } from '../../dto/transaction'
import { TRANSACTION_COLLECTION } from '../storageConfig'
import { getTransactions } from './get-transactions'

export function registerTransaction(newTransaction: ITransaction) {
  const transactions = getTransactions()
  const transactionsFormatted = JSON.stringify([
    ...transactions,
    newTransaction,
  ])

  localStorage.setItem(TRANSACTION_COLLECTION, transactionsFormatted)
}
