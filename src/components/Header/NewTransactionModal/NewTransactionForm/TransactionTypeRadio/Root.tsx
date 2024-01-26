import * as RadioGroup from '@radix-ui/react-radio-group'

type RootProps = RadioGroup.RadioGroupProps
export function Root({ ...props }: RootProps) {
  return (
    <RadioGroup.Root
      className={`flex items-center justify-between gap-4`}
      {...props}
    />
  )
}
