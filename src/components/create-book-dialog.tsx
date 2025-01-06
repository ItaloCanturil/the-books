import { Button, Dialog, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useLibraryContext } from "contexts/LibraryContext"

const bookDialogSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  author: z.string().min(1, "Nome obrigatório"),
  pages: z.string(),
})

type BookDialogSchema = z.infer<typeof bookDialogSchema>

export function CreateBookDialog() {
  const { bookModel } = useLibraryContext();

  const { register, handleSubmit, formState: { errors } } = useForm<BookDialogSchema>({
    resolver: zodResolver(bookDialogSchema)
  })
  
  const handleAddBook: SubmitHandler<BookDialogSchema> = (data) => {
    console.log("🚀 ~ CreateBookDialog ~ data:", data)
    bookModel.addBook({...data, author_id: 1});
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Adicionar Livro</Button>
      </Dialog.Trigger>
      
      <Dialog.Content asChild>
        <form onSubmit={handleSubmit(handleAddBook)}>
          <Flex justify={"between"}>
            <Dialog.Title>Adicionar Livro</Dialog.Title>

            <Dialog.Close>
              <IconButton size="1" variant="soft">
                X
              </IconButton>
            </Dialog.Close>
          </Flex>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" mb="1" weight="bold">Nome:</Text>
              <TextField.Root
                placeholder="Adicione seu nome"
                {...register('name')}
              />
              {errors.name &&
                <Text as="div" color="red" size="2">{ errors.name.message }</Text>
              }
            </label>
            <label>
              <Text as="div" mb="1" weight="bold">Autor:</Text>
              <TextField.Root
                placeholder="Nome do livro"
                {...register('author')}
              />
              {errors.author &&
                <Text as="div" color="red" size="2">{ errors.author.message }</Text>
              }
            </label>
            <label>
              <Text as="div" mb="1" weight="bold">Páginas:</Text>
              <TextField.Root
                placeholder="Quantidade de páginas"
                {...register('pages')}
              />
              {errors.pages &&
                <Text as="div" color="red" size="2">{ errors.pages.message }</Text>
              }
            </label>

            {/* <Select.Root>
              <Select.Trigger placeholder=""></Select.Trigger>
            </Select.Root> */}

            <Button type="submit" onClick={handleSubmit(handleAddBook)}>Adicionar</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}