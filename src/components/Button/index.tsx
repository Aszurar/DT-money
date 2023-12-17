import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"


const button = tv({
  base: `text-white font-bold px-5 py-3 cursor-pointer transition-all 
  duration-300 bg-green-500 rounded-md `,
  variants: {
    variant: {
      solid: '',
      outline: `flex items-center gap-3 px-8 py-3.5 bg-transparent border 
      border-green-300 text-green-300 font-bold 
      hover:text-white hover:bg-green-300`
    }
  },
  defaultVariants: {
    variant: 'solid'
  }
})

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>

export function Button({variant, ...props}: ButtonProps) {
  return (
    <button 
    className={button({variant})} 
    {...props}
    />
  )
}
