import * as zod from 'zod'
import * as Input from '../../Input'
import { Button } from '../../Button'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading } from '../../Loading'

const searchFormSchema = zod.object({
  query: zod.string().trim().min(1, 'Digite pelo menos 1 caractere'),
})

type SearchFormProps = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
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
      className="mt-16 flex justify-between rounded-md"
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
        className="w-37 min-w-37 h-13.5"
        disabled={isSubmitting}
      >
        {submitButtonContent}
      </Button>
    </form>
  )
}
