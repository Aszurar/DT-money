import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionForm } from './NewTransactionForm'

type NewTransactionModalProps = {
  handleChangeModalStatus: (status: boolean) => void
}

export function NewTransactionModal({
  handleChangeModalStatus,
}: NewTransactionModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-dark-50">
        <Dialog.Content
          className={`sm:border-0.5 fixed bottom-0 flex w-full flex-col 
            gap-2 rounded-t-2xl bg-gray-800 px-6 py-8 sm:bottom-auto 
            sm:left-1/2 sm:top-1/2 sm:mx-auto sm:my-0 sm:max-w-modal 
            sm:-translate-x-1/2 sm:-translate-y-1/2 sm:gap-8 
            sm:rounded-md sm:border-purple-300 sm:p-12`}
        >
          <header>
            <Dialog.Title className="text-2xl font-bold text-gray-100">
              Nova Transação
            </Dialog.Title>
            <Dialog.Close
              aria-label="Fechar"
              className={`group absolute right-6 top-6 flex h-8 w-8 cursor-pointer 
                items-center justify-center rounded-md transition-all duration-200 
                hover:bg-gray-700`}
            >
              <X className="text-2xl text-gray-500 group-hover:text-gray-300" />
            </Dialog.Close>
          </header>

          <Dialog.Description>
            <NewTransactionForm
              handleChangeModalStatus={handleChangeModalStatus}
            />
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
