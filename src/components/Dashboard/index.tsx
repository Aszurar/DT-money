import { useSummary } from '../../hooks/useSummary'
import { useTransactions } from '../../hooks/useTransactions'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { HighLightCard } from './HighLightCard'
import { SearchForm } from './SearchForm'
import * as Table from './Table'

export function Dashboard() {
  const { transactions } = useTransactions()
  const summery = useSummary()
  return (
    <div className="mx-auto max-w-app px-6">
      <section className="-mt-20 flex gap-8">
        <HighLightCard value={priceFormatter.format(summery.income)} />
        <HighLightCard
          variant="outcome"
          value={priceFormatter.format(summery.outcome)}
        />
        <HighLightCard
          variant="total"
          value={priceFormatter.format(summery.balance)}
        />
      </section>

      <SearchForm />

      <section className="mt-6">
        <Table.Root>
          <Table.Body>
            {transactions.map((transaction) => (
              <Table.Row key={transaction.id}>
                <Table.Data>{transaction.description}</Table.Data>
                <Table.Data variant={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.price)}
                </Table.Data>
                <Table.Data>{transaction.category}</Table.Data>
                <Table.Data>
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </Table.Data>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </section>
    </div>
  )
}
