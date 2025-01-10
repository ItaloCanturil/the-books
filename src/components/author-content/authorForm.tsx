import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { AuthorMetaData } from "types";
import { useLibraryContext } from "contexts/LibraryContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "contexts/ToastContext"
const authorDialogSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().email({ message: "Email inválido"}),
})

type AuthorDialogSchema = z.infer<typeof authorDialogSchema>

export function AuthorForm ({ author, afterSave}: { author?: AuthorMetaData, afterSave: () => void}) {

  const { addAuthor } = useLibraryContext();
  const { showToast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<AuthorDialogSchema>({
    resolver: zodResolver(authorDialogSchema)
  })
  
  const handleAddAuthor: SubmitHandler<AuthorDialogSchema> = (data) => {
    addAuthor(data);

    showToast("Autor adicionado", "success");
    afterSave();
  }

  return (
    <form onSubmit={handleSubmit(handleAddAuthor)}>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" mb="1" weight="bold">Nome:</Text>
          <TextField.Root
            placeholder="Adicione seu nome"
            {...register('name')}
            defaultValue={author?.name}
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
            defaultValue={author?.email}
          />
          {errors.email &&
            <Text as="div" color="red" size="2">{ errors.email.message }</Text>
          }
        </label>

        <Button
          type="submit"
        >
            Adicionar
        </Button>
      </Flex>
    </form>
  )
}