import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
  base: `group flex w-full items-center gap-2 rounded-md border p-4
    border-transparent bg-gray-900 focus-within:border
    focus-within:border-green-300
    `,
  variants: {
    isError: {
      true: `border-red-300`,
    },
  },
})

type ContainerProps = ComponentProps<'div'> & VariantProps<typeof container>

export function Container({ isError, className, ...props }: ContainerProps) {
  return <div className={container({ isError, className })} {...props} />
}
