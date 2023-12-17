import { MagnifyingGlass } from '@phosphor-icons/react'

import * as Table from './Table'
import * as Input from '../Input'
import { Button } from '../Button'
import { HighLightCard } from './HighLightCard'

export function Dashboard() {
  return (
    <div className="mx-auto max-w-app">
      <section className="-mt-20 flex gap-8">
        <HighLightCard value="20.000,00" />
        <HighLightCard variant="outcome" value="12.000,00" />
        <HighLightCard variant="total" value="32.000,00" />
      </section>

      <section className="mt-16 gap-4 flex justify-between">
        <Input.Root>
          <Input.Control placeholder="Busque uma transação" />
        </Input.Root>

        <Button variant="outline">
          <MagnifyingGlass className="text-xl" weight="bold" />
          Buscar
        </Button>
      </section>

      <section className="mt-6">
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Data variant="light">
                Desenvolvimento de website
              </Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>

            <Table.Row>
              <Table.Data variant="light">
                Desenvolvimento de website
              </Table.Data>
              <Table.Data variant="outcome">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>

            <Table.Row>
              <Table.Data variant="light">
                Desenvolvimento de website
              </Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
            <Table.Row>
              <Table.Data variant="light">
                Desenvolvimento de website
              </Table.Data>
              <Table.Data variant="income">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
            <Table.Row>
              <Table.Data variant="light">
                Desenvolvimento de website
              </Table.Data>
              <Table.Data variant="outcome">R$ 12.000,00</Table.Data>
              <Table.Data>Desenvolvimento</Table.Data>
              <Table.Data>20/02/2021</Table.Data>
            </Table.Row>
            <Table.Row>
              <Table.Data variant="light">
                Desenvolvimento de website
              </Table.Data>
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
