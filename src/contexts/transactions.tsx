import React, { createContext, useEffect, useMemo, useState } from 'react'

import { ITransaction } from '../dto/transaction'
import { api } from '../lib/api'

type INewTransaction = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionsContextProps {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (newTransaction: INewTransaction) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextProps)

function TransactionsProvider({
  children,
}: Readonly<TransactionsProviderProps>) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get<ITransaction[]>('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createTransaction(newTransaction: INewTransaction) {
    const newTransactionWithCreatedAt = {
      ...newTransaction,
      createdAt: new Date(),
    }

    const response = await api.post(
      '/transactions',
      newTransactionWithCreatedAt,
    )

    setTransactions((prevTransactions) => [response.data, ...prevTransactions])
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
