import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: `flex text-white font-bold px-5 py-3 cursor-pointer transition-all 
  duration-300 bg-green-500 rounded-md hover:bg-green-300  justify-center
  disabled:cursor-not-allowed disabled:opacity-60 items-center
  disabled:hover:bg-green-500 
  `,
  variants: {
    variant: {
      outline: `flex  gap-3 px-8 py-3.5 bg-gray-900 border 
      border-green-300 text-green-300 font-bold h-fit
      hover:text-white 
      disabled:hover:bg-gray-900 disabled:hover:opacity-60`,
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
