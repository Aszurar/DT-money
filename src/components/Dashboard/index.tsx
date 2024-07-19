import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { HighLightCard } from './HighLightCard'
import { SearchForm } from './SearchForm'
import * as Table from './Table'
import { TableRows } from './Table/TableRow'

export function Dashboard() {
  const summery = useSummary()

  const outcomeFormatted = priceFormatter.format(summery.outcome)
  const incomeFormatted = priceFormatter.format(summery.income)
  const balanceFormatted = priceFormatter.format(summery.balance)

  return (
    <main className="h-dashboard mx-auto max-w-app px-6">
      <section
        tabIndex={0}
        className={`-mt-20 flex 
          gap-8 overflow-x-scroll px-1 pb-3 scrollbar-thin 
          scrollbar-track-transparent scrollbar-thumb-green-300 
          scrollbar-thumb-rounded-xl sm:gap-8 sm:px-0 sm:pb-0 `}
      >
        <HighLightCard value={incomeFormatted} />
        <HighLightCard variant="outcome" value={outcomeFormatted} />
        <HighLightCard variant="total" value={balanceFormatted} />
      </section>

      <SearchForm />

      <section
        tabIndex={0}
        className="phone-lg:max-h-120 mt-6  flex max-h-64 w-full flex-1 
          overflow-auto scrollbar-thin scrollbar-track-transparent 
          scrollbar-thumb-green-300 phone-md:max-h-80 phone-xl:max-h-130 
          iPhone-se:max-h-64 notebook-sm:max-h-25 notebook-sm-2:max-h-50 
          notebook-md:max-h-75 notebook-lg:max-h-100 notebook-xl:max-h-125"
      >
        <Table.Root>
          <Table.Body>
            <TableRows />
          </Table.Body>
        </Table.Root>
      </section>
    </main>
  )
}
