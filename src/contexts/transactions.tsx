import { isAfter } from 'date-fns'
import React, { createContext, useEffect, useMemo, useState } from 'react'

import { ITransaction } from '../dto/transaction'
import { getTransactions } from '../storage/transactions/get-transactions'
import { registerTransaction } from '../storage/transactions/register-transaction'

type INewTransaction = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionsContextProps {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => void
  createTransaction: (newTransaction: INewTransaction) => void
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextProps)

function TransactionsProvider({
  children,
}: Readonly<TransactionsProviderProps>) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  function fetchTransactions(query?: string) {
    const response = getTransactions()

    const DATE_B_AFTER = -1
    const DATE_B_BEFORE = 1
    const transactionsSortedAndOrderedByCreatedAtAndDesc = response.sort(
      (a, b) => {
        // ordered by createdAt and desc
        if (isAfter(new Date(b.createdAt), new Date(a.createdAt))) {
          return DATE_B_BEFORE // b is more recent, is set before a
        } else {
          return DATE_B_AFTER // b is more old, but is set after a
        }
      },
    )

    let transactionsFiltered

    if (!!query && !!query.trim()) {
      transactionsFiltered =
        transactionsSortedAndOrderedByCreatedAtAndDesc.filter((transaction) =>
          transaction.description.toLowerCase().includes(query.toLowerCase()),
        )
    }

    const transactionsResults =
      transactionsFiltered || transactionsSortedAndOrderedByCreatedAtAndDesc

    setTransactions(transactionsResults)
  }

  function createTransaction(newTransaction: INewTransaction) {
    const newTransactionWithCreatedAt = {
      ...newTransaction,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }

    registerTransaction(newTransactionWithCreatedAt)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const contextValues = useMemo(
    () => ({
      transactions,
      fetchTransactions,
      createTransaction,
    }),
    [transactions],
  )

  return (
    <TransactionsContext.Provider value={contextValues}>
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsContext, TransactionsProvider }
