import { ComponentProps } from "react"

type ControlProps = ComponentProps<"input">               

export function Control(props: ControlProps) {
  return <input 
          className="outline-none w-full ring-0 bg-transparent text-gray-300" 
          {...props} />
}
