import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as zod from 'zod'

import {
  NEW_TRANSACTION_FORM_DEFAULT_VALUES,
  TRANSACTION_TYPE,
} from '../../../../dto/transaction'
import { useTransactions } from '../../../../hooks/useTransactions'
import { Button } from '../../../Button'
import * as Input from '../../../Input'
import { Loading } from '../../../Loading'
import * as TransactionTypeRadio from './TransactionTypeRadio'

type NewTransactionFormProps = {
  handleChangeModalStatus: (status: boolean) => void
}

const newTransactionFormSchema = zod.object({
  description: zod.string().trim().min(3, 'É necessário uma descrição'),
  price: zod
    .number({ invalid_type_error: 'É necessário o valor da transação' })
    .positive('O valor precisa ser positivo'),
  category: zod.string().trim().min(3, 'É necessário uma categoria'),
  type: zod.enum([TRANSACTION_TYPE.income, TRANSACTION_TYPE.outcome]),
})

export type NewTransactionProps = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionForm({
  handleChangeModalStatus,
}: Readonly<NewTransactionFormProps>) {
  const { createTransaction, fetchTransactions } = useTransactions()

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewTransactionProps>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: NEW_TRANSACTION_FORM_DEFAULT_VALUES,
  })

  const submitButtonContent = isSubmitting ? <Loading /> : 'Cadastrar'

  async function handleAddNewTransaction(data: NewTransactionProps) {
    try {
      createTransaction(data)
      reset()
      handleChangeModalStatus(false)
      toast.success('Transação cadastrada com sucesso!')
      fetchTransactions()
    } catch (error) {
      console.error(error)
      toast.error('Erro ao cadastrar transação')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleAddNewTransaction)}
      className="flex flex-col gap-6"
    >
      <fieldset className="space-y-4">
        <Input.Root>
          <Input.Container>
            <Input.Control
              placeholder="Descrição"
              {...register('description')}
            />
          </Input.Container>
          <Input.ErrorMessage>{errors.description?.message}</Input.ErrorMessage>
        </Input.Root>
        <Input.Root>
          <Input.Container>
            <Input.Control
              type="number"
              placeholder="Preço"
              {...register('price', { valueAsNumber: true })}
            />
          </Input.Container>
          <Input.ErrorMessage>{errors.price?.message}</Input.ErrorMessage>
        </Input.Root>

        <Input.Root>
          <Input.Container>
            <Input.Control placeholder="Categoria" {...register('category')} />
          </Input.Container>
          <Input.ErrorMessage>{errors.category?.message}</Input.ErrorMessage>
        </Input.Root>
      </fieldset>

      <fieldset>
        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <TransactionTypeRadio.Root
                value={field.value}
                onValueChange={field.onChange}
              >
                <TransactionTypeRadio.Item
                  variant={TRANSACTION_TYPE.income}
                  value={TRANSACTION_TYPE.income}
                >
                  <TransactionTypeRadio.Icon
                    icon={ArrowCircleUp}
                    variant={TRANSACTION_TYPE.income}
                  />
                  Entrada
                </TransactionTypeRadio.Item>
                <TransactionTypeRadio.Item
                  type="button"
                  variant={TRANSACTION_TYPE.outcome}
                  value={TRANSACTION_TYPE.outcome}
                >
                  <TransactionTypeRadio.Icon
                    icon={ArrowCircleDown}
                    variant={TRANSACTION_TYPE.outcome}
                  />
                  Saída
                </TransactionTypeRadio.Item>
              </TransactionTypeRadio.Root>
            )
          }}
        />
      </fieldset>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full py-4"
      >
        {submitButtonContent}
      </Button>
    </form>
  )
}
