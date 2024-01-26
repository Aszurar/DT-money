import { Logo } from './Logo'
import { Button } from '../Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <header className="h-header bg-gray-900 ">
      <div className="m-auto flex max-w-app items-center justify-between px-6 pt-10">
        <Logo />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Nova transação</Button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
