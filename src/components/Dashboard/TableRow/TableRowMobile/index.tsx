import * as Table from '../../Table'
import { TableRowProps } from '..'

export function TableRowMobile({ transaction }: Readonly<TableRowProps>) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Table.Data>{transaction.description}</Table.Data>
      </div>

      <Table.Data variant={transaction.type}>{transaction.price}</Table.Data>

      <div className="mt-3 flex w-full justify-between sm:mt-0 sm:block">
        <Table.Data>{transaction.category}</Table.Data>
        <Table.Data>{transaction.createdAt}</Table.Data>
      </div>
    </>
  )
}
