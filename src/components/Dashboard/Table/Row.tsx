import { ComponentProps } from "react"

type RowProps = ComponentProps<"tr">

export function Row(props: RowProps) {
  return (
    <tr 
    className={`w-full my-2 grid grid-cols-table gap-4 bg-gray-700 px-8 py-5 
    drop-shadow-lg rounded-md border-collapse overflow-hidden`}
    {...props}
    />
  )
}