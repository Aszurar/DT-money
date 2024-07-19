import { TableRowProps } from '../../../../../dto/transaction'
import * as Table from '../../'

export function TableRowWeb({ transaction }: Readonly<TableRowProps>) {
  return (
    <>
      <Table.Data>{transaction.description}</Table.Data>
      <Table.Data variant={transaction.type}>{transaction.price}</Table.Data>
      <Table.Data>{transaction.category}</Table.Data>
      <Table.Data>{transaction.createdAt}</Table.Data>
    </>
  )
}
