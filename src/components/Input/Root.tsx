import { ComponentProps } from "react"

type RootProps = ComponentProps<"div">    

export function Root(props: RootProps) {
  return (
    <div className={`w-full bg-gray-900 p-4 rounded-md
    focus-within:ring-2 focus-within:ring-green-300`} 
    {...props}
    />
  )
}
