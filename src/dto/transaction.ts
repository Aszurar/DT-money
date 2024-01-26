enum TRANSACTION_TYPE {
  income = 'income',
  outcome = 'outcome',
}

export type TransactionType = keyof typeof TRANSACTION_TYPE

const NEW_TRANSACTION_FORM_DEFAULT_VALUES = {
  description: '',
  amount: undefined,
  category: '',
  type: TRANSACTION_TYPE.income,
}

export { TRANSACTION_TYPE, NEW_TRANSACTION_FORM_DEFAULT_VALUES }
