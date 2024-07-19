import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { useTransactions } from '../../../hooks/useTransactions'
import { Button } from '../../Button'
import * as Input from '../../Input'
import { Loading } from '../../Loading'

const searchFormSchema = zod.object({
  query: zod.string().trim(),
})

type SearchFormProps = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormProps) {
    await fetchTransactions(data.query)
  }

  const submitButtonContent = isSubmitting ? (
    <Loading />
  ) : (
    <>
      <MagnifyingGlass className="text-xl" weight="bold" />
      Buscar
    </>
  )

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="mt-16 flex items-center justify-between rounded-md"
    >
      <Input.Root>
        <Input.Container>
          <Input.Control
            placeholder="Busque uma transação"
            {...register('query')}
          />
        </Input.Container>
        <Input.ErrorMessage>{errors?.query?.message}</Input.ErrorMessage>
      </Input.Root>

      <Button
        type="submit"
        variant="outline"
        className="h-13.5 w-37 min-w-37"
        disabled={isSubmitting}
      >
        {submitButtonContent}
      </Button>
    </form>
  )
}
