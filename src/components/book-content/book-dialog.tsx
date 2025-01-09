import { Avatar, Box, Button, Dialog, Flex, IconButton, Text } from "@radix-ui/themes";
import { RemoveAlertDialog } from "components/remove-alert-dialog";
import { useLibraryContext } from "contexts/LibraryContext";
import { useToast } from "contexts/ToastContext";
import { BookMetaData } from "types";

type BookDialogProps = {
  data: BookMetaData
}

export function BookDialog ({ data }: BookDialogProps ) {
  const { authorModel, deleteBookById } = useLibraryContext();
  const { showToast } = useToast();

  const handleDelete = () => {
    deleteBookById(data.id);

    showToast("Livro excluido", "failure");
  }

  const handleAuthorId = (author_id: number) => {
    const author = authorModel.find((author) => author.id === author_id);

    return author ? author.name : 'Desconhecido'
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="ghost">{ data.name }</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Flex justify={"between"}>
          <Dialog.Title>Informações do livro</Dialog.Title>

          <Dialog.Close>
            <IconButton size="1" variant="soft">
              X
            </IconButton>
          </Dialog.Close>
        </Flex>

        <Flex direction="column" gap="3" align="center">
          <Avatar size="4" fallback="I"/>
          <Box>
            <Text as="div" size="1">Nome: {data.name}</Text>
            <Text as="div" size="1">Autor: {data.author ?
                data.author
              :  handleAuthorId(data.author_id)}
            </Text>
            <Text as="div" size="1">Páginas: {data.pages}</Text>

          </Box>

          <Flex align="center" gap="6">
            {/* <Button variant="soft">Editar</Button> */}

            <RemoveAlertDialog label="livro" _action={handleDelete}></RemoveAlertDialog>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}