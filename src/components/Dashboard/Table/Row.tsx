import { ComponentProps } from 'react'

type RowProps = ComponentProps<'tr'>

export function Row(props: RowProps) {
  return (
    <tr
      className={`flex w-full border-collapse flex-col overflow-hidden 
      truncate rounded-md bg-gray-700 px-6 py-3 drop-shadow-lg sm:grid 
      sm:w-full sm:grid-cols-table sm:gap-4 sm:px-8 sm:py-5`}
      {...props}
    />
  )
}
