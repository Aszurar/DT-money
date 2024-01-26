import * as Table from './Table'

import { HighLightCard } from './HighLightCard'
import { SearchForm } from './SearchForm'

export function Dashboard() {
  return (
    <div className="mx-auto max-w-app px-6">
      <section className="-mt-20 flex gap-8">
        <HighLightCard value="20.000,00" />
        <HighLightCard variant="outcome" value="12.000,00" />
        <HighLightCard variant="total" value="32.000,00" />
      </section>

      <SearchForm />

      <section className="mt-6">
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Data>Desenvolvimento de website</Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>

            <Table.Row>
              <Table.Data>Desenvolvimento de website</Table.Data>
              <Table.Data variant="outcome">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>

            <Table.Row>
              <Table.Data>Desenvolvimento de website</Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
            <Table.Row>
              <Table.Data>Desenvolvimento de website</Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
            <Table.Row>
              <Table.Data>Desenvolvimento de website</Table.Data>
              <Table.Data variant="outcome">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
            <Table.Row>
              <Table.Data>Desenvolvimento de website</Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </section>
    </div>
  )
}
