import { ComponentProps } from 'react'

type RowProps = ComponentProps<'tr'>

export function Row(props: RowProps) {
  return (
    <tr
      className={`my-2 grid w-full border-collapse grid-cols-table gap-4 overflow-hidden rounded-md 
    bg-gray-700 px-8 py-5 drop-shadow-lg`}
      {...props}
    />
  )
}
