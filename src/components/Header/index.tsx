import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import { Button } from '../Button'
import { Logo } from './Logo'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false)

  function handleTransactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value)
  }

  return (
    <header className="h-header bg-gray-900 ">
      <div className="m-auto flex max-w-app items-center justify-between px-6 pt-10">
        <Logo />
        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <Button>Nova transação</Button>
          </Dialog.Trigger>

          <NewTransactionModal
            handleChangeModalStatus={handleTransactionModalOpenChange}
          />
        </Dialog.Root>
      </div>
    </header>
  )
}
