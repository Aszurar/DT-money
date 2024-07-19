enum TRANSACTION_TYPE {
  income = 'income',
  outcome = 'outcome',
}

export type TransactionType = keyof typeof TRANSACTION_TYPE

export interface ITransaction {
  id: number
  description: string
  price: number
  category: string
  type: TransactionType
  createdAt: string
}

export type TransactionProps = Omit<ITransaction, 'price'> & { price: string }

export type TableRowProps = {
  transaction: TransactionProps
}

const NEW_TRANSACTION_FORM_DEFAULT_VALUES = {
  description: '',
  amount: undefined,
  category: '',
  type: TRANSACTION_TYPE.income,
}

export { NEW_TRANSACTION_FORM_DEFAULT_VALUES, TRANSACTION_TYPE }
