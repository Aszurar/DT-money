import { ComponentProps } from 'react'

type ErrorMessageProps = ComponentProps<'div'>

export function ErrorMessage({ children, ...props }: ErrorMessageProps) {
  if (!children) return null

  return (
    <div {...props}>
      <span className="text-sm font-semibold text-red-300">{children}</span>
    </div>
  )
}
