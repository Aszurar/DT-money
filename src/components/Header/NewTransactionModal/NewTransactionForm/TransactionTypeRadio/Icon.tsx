import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const icon = tv({
  base: `text-2xl transition-all duration-400 
    group-data-[state=checked]:text-white`,
  variants: {
    variant: {
      income: `text-green-300 `,
      outcome: `text-red-300`,
    },
  },
})

type IconProps = VariantProps<typeof icon> &
  ComponentProps<'button'> & {
    icon: ElementType
  }

export function Icon({ icon: Icon, variant, ...props }: IconProps) {
  return (
    <span className={icon({ variant })} {...props}>
      <Icon />
    </span>
  )
}
