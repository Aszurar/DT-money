import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"


const data = tv({
  base: "text-gray-300 font-normal",
  variants: {
    variant: {
      income: "text-green-300",
      outcome: "text-red-300",
      light: ""
    }
  },
  defaultVariants: {
    variant: "light"
  }
})

type DataProps = ComponentProps<"td"> & VariantProps<typeof data>

export function Data({ variant, ...props }: DataProps) {
  return (
    <td className={data({ variant })} {...props} />
  )
}