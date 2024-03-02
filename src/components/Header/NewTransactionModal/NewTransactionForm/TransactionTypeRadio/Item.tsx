import * as RadioGroup from '@radix-ui/react-radio-group'
import { tv, VariantProps } from 'tailwind-variants'

const item = tv({
  base: `group w-full py-4 px-6 bg-gray-700 flex gap-2 rounded-md items-center 
      justify-center text-gray-300 font-normal transition-all duration-400
      hover:bg-gray-600 data-[state=checked]:text-white`,
  variants: {
    variant: {
      income: `data-[state=checked]:bg-green-700 
            data-[state=checked]:hover:bg-green-700 
            data-[state=checked]:hover:brightness-125`,
      outcome: `data-[state=checked]:bg-red-700 
            data-[state=checked]:hover:bg-red-700 
            data-[state=checked]:hover:brightness-125`,
    },
  },
})

type ItemProps = VariantProps<typeof item> & RadioGroup.RadioGroupItemProps

export function Item({ variant, ...props }: ItemProps) {
  return <RadioGroup.Item className={item({ variant })} {...props} />
}
