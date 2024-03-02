import { ComponentProps } from 'react'

type BodyProps = ComponentProps<'tbody'>

export function Body(props: BodyProps) {
  return (
    <tbody
      className="block max-h-80 overflow-auto overflow-y-auto"
      {...props}
    />
  )
}
