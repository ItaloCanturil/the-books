import { Button, Dialog, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { useLibraryContext } from "contexts/LibraryContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const authorDialogSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().email({ message: "Email inválido"}),
})

type AuthorDialogSchema = z.infer<typeof authorDialogSchema>

export function CreateAuthorDialog() {
  const { authorModel } = useLibraryContext();

  const { register, handleSubmit, formState: { errors } } = useForm<AuthorDialogSchema>({
    resolver: zodResolver(authorDialogSchema)
  })
  
  const handleAddAuthor: SubmitHandler<AuthorDialogSchema> = (data) => {
    authorModel.addAuthor(data);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Adicionar Autor</Button>
      </Dialog.Trigger>
      
      <Dialog.Content asChild>
        <form onSubmit={handleSubmit(handleAddAuthor)}>
          <Flex justify={"between"}>
            <Dialog.Title>Adicionar Autor</Dialog.Title>

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
              <Text as="div" mb="1" weight="bold">Email:</Text>
              <TextField.Root
                placeholder="Adicione seu email"
                {...register('email')}       
              />
              {errors.email &&
                <Text as="div" color="red" size="2">{ errors.email.message }</Text>
              }
            </label>

            <Button type="submit" onClick={handleSubmit(handleAddAuthor)}>Adicionar</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}