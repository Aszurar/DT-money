import { ITransaction } from '../../../dto/transaction'
import { useResponsiveness } from '../../../hooks/useResponsiveness'
import { useTransactions } from '../../../hooks/useTransactions'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'
import * as Table from '../Table'
import { TableRowMobile } from './TableRowMobile'
import { TableRowWeb } from './TableRowWeb'

type TransactionProps = Omit<ITransaction, 'price'> & { price: string }

export type TableRowProps = {
  transaction: TransactionProps
}

export function TableRows() {
  const { isMobile } = useResponsiveness()

  const { transactions } = useTransactions()

  return transactions.map((transaction) => {
    const priceFormatted = priceFormatter.format(transaction.price)
    const createdAtFormatted = dateFormatter.format(
      new Date(transaction.createdAt),
    )

    const transactionData: TransactionProps = {
      ...transaction,
      createdAt: createdAtFormatted,
      price: priceFormatted,
    }

    return (
      <Table.Row key={transaction.id}>
        {isMobile ? (
          <TableRowMobile transaction={transactionData} />
        ) : (
          <TableRowWeb transaction={transactionData} />
        )}
      </Table.Row>
    )
  })
}
