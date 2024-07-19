import { ComponentProps } from 'react'

type BodyProps = ComponentProps<'tbody'>

export function Body(props: BodyProps) {
  return <tbody className="flex h-full flex-col gap-4 sm:gap-2" {...props} />
}
