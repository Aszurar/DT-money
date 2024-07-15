import * as Table from '../../Table'
import { TableRowProps } from '..'

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
