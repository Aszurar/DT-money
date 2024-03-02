import { ComponentProps } from 'react'

type RootProps = ComponentProps<'table'>

export function Root(props: RootProps) {
  return <table className="w-full min-w-table border-collapse " {...props} />
}
