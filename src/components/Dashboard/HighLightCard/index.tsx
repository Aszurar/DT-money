import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { tv, VariantProps } from 'tailwind-variants'

const highLightCard = tv({
  slots: {
    container:
      'flex flex-col bg-gray-600 w-highlightcard drop-shadow-md p-6 gap-3 rounded-md',
    icon: 'text-2.5xl self-center',
  },
  variants: {
    variant: {
      income: {
        icon: 'text-green-300',
      },
      outcome: {
        icon: 'text-red-300',
      },
      total: {
        container: 'bg-green-700',
        icon: 'text-white',
      },
    },
  },

  defaultVariants: {
    variant: 'income',
  },
})

type HighLightCardProps = VariantProps<typeof highLightCard> & {
  value: string
}

export function HighLightCard({ variant, value }: HighLightCardProps) {
  const { container, icon } = highLightCard({ variant })
  const titleVariant = variant ?? 'income'

  const title = {
    income: {
      title: 'Entradas',
      icon: <ArrowCircleUp className={icon()} />,
    },
    outcome: {
      title: 'Saídas',
      icon: <ArrowCircleDown className={icon()} />,
    },
    total: {
      title: 'Total',
      icon: <CurrencyDollar className={icon()} />,
    },
  }

  return (
    <div className={container()}>
      <header className="flex justify-between">
        <h2 className="self-start text-gray-300 ">
          {title[titleVariant].title}
        </h2>
        {title[titleVariant].icon}
      </header>

      <div className="flex">
        <strong className="text-2.5xl font-bold text-gray-100">{value}</strong>
      </div>
    </div>
  )
}
