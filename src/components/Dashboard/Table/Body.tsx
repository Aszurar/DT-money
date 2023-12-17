import { ComponentProps } from "react"

type BodyProps = ComponentProps<"tbody">

export function Body(props: BodyProps) {
  return (
    <tbody className="max-h-80 overflow-y-auto block overflow-auto" {...props} />
  )
}