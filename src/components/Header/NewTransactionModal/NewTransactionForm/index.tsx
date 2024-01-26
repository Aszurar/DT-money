import * as zod from 'zod'
import * as Input from '../../../Input'
import { Button } from '../../../Button'
import * as TransactionTypeRadio from './TransactionTypeRadio'
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading } from '../../../Loading'
import {
  NEW_TRANSACTION_FORM_DEFAULT_VALUES,
  TRANSACTION_TYPE,
} from '../../../../dto/transaction'

const newTransactionFormSchema = zod.object({
  description: zod.string().trim().min(3, 'É necessário uma descrição'),
  amount: zod
    .number({ invalid_type_error: 'É necessário o valor da transação' })
    .positive('O valor precisa ser positivo'),
  category: zod.string().trim().min(3, 'É necessário uma categoria'),
  type: zod.enum([TRANSACTION_TYPE.income, TRANSACTION_TYPE.outcome]),
})

export type NewTransactionProps = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionForm() {
  const {
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
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
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
              {...register('amount', { valueAsNumber: true })}
            />
          </Input.Container>
          <Input.ErrorMessage>{errors.amount?.message}</Input.ErrorMessage>
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
          render={(props) => {
            console.log(props)
            return (
              <TransactionTypeRadio.Root
              // value={field.value}
              // onValueChange={field.onChange}
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
