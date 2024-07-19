import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const tooltip = tv({
  slots: {
    container: `rounded-md bg-white px-3 py-1.5 text-sm font-medium text-green-300 
       transition-all duration-[200ms] animate-opacity box-shadow-tooltip
       dark:bg-zinc-900`,
    arrow: 'fill-white dark:fill-zinc-900',
  },
  variants: {
    variant: {
      outline: {
        container: 'border border-green-300',
        arrow: 'fill-green-300 dark:fill-green-300',
      },
      solid: {
        container: '',
        arrow: '',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

type LinkButtonProps = VariantProps<typeof tooltip> & {
  children: ReactNode
  label: string
  asChild?: boolean
}

export function Root({
  label,
  children,
  asChild = false,
  variant,
}: LinkButtonProps) {
  const { arrow, container } = tooltip({ variant })
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild={asChild}>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className={container()}
            aria-label="."
          >
            {label}
            <Tooltip.Arrow className={arrow()} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
