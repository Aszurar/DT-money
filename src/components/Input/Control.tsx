import { ComponentProps, forwardRef, useImperativeHandle, useRef } from 'react'

type ControlProps = ComponentProps<'input'>

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  ({ ...props }, outerRef) => {
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(outerRef, () => innerRef.current!, [])

    return (
      <input
        type="text"
        ref={innerRef}
        className={`w-full bg-transparent text-gray-300
          outline-none ring-0 placeholder:font-normal
          placeholder:text-gray-500
          `}
        {...props}
      />
    )
  },
)
Control.displayName = 'Control'
