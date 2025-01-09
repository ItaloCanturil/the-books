import { Avatar, Box, Button, Dialog, Flex, IconButton, Text } from "@radix-ui/themes";
import { useLibraryContext } from "contexts/LibraryContext";
import { AuthorMetaData } from "types";
import { RemoveAlertDialog } from "../remove-alert-dialog";
import { useToast } from "contexts/ToastContext";

type AuthorDialogProps = {
  data: AuthorMetaData
}

export function AuthorDialog ({ data }: AuthorDialogProps ) {
  const { deleteAuthorById } = useLibraryContext();
  const { showToast } = useToast();

  const handleDelete = () => {
    deleteAuthorById(data.id)

    showToast("Autor excluido", "failure")
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="ghost">{ data.name }</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Flex justify={"between"}>
          <Dialog.Title>Informações do autor</Dialog.Title>

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
            <Text as="div" size="1">Email: { data.email }</Text>
          </Box>

          <Flex align="center" gap="6">
            <Button variant="soft">Editar</Button>
            {/* <Button color="red" variant="soft" onClick={handleDelete}>Excluir</Button> */}

            <RemoveAlertDialog label="autor" _action={handleDelete}></RemoveAlertDialog>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}