import { Logo } from './Logo'
import { Button } from '../Button'

export function Header() {
  return (
    <header className="bg-gray-900 h-header ">
      <div className="max-w-app m-auto flex justify-between pt-10 items-center">
        <Logo />
        <Button>Nova transação</Button>
      </div>
    </header>
  )
}
