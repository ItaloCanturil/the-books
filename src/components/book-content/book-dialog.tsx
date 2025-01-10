import { Button, Container, DataList, Dialog, Flex, IconButton, Text } from "@radix-ui/themes";
import { AuthorDialog } from "components/author-content/author-dialog";
import { RemoveAlertDialog } from "components/remove-alert-dialog";
import { CloseIcon } from "components/ui/Icons/icons";
import { useLibraryContext } from "contexts/LibraryContext";
import { useToast } from "contexts/ToastContext";
import { useState } from "react";
import { BookMetaData } from "types";

type BookDialogProps = {
  data: BookMetaData
}

export function BookDialog ({ data }: BookDialogProps ) {
  const { deleteBookById, searchAuthorByAuthorId } = useLibraryContext();
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);
  const authorsBook = data.author_id !== -1 ? searchAuthorByAuthorId(data.author_id) : null;

  const handleDelete = () => {
    deleteBookById(data.id);

    showToast("Livro excluido", "failure");
    setOpen(false);
  }

  

  const renderAuthor = () => {
    if (data.author && data.author_id === -1) {
      return data.author
    }

    if (!data.author && authorsBook) {
      return <AuthorDialog data={authorsBook}></AuthorDialog>
    }

    return "Desconhecido"
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant="ghost">{ data.name }</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Flex justify={"between"}>
          <Dialog.Title>Informações do livro</Dialog.Title>

          <Dialog.Close>
            <IconButton size="1" variant="soft">
              <CloseIcon/>
            </IconButton>
          </Dialog.Close>
        </Flex>

        <Container my="5">
          <DataList.Root>
            <DataList.Item>
              <DataList.Label>Nome:</DataList.Label>
              <DataList.Value>
                <Text as="div">{ data.name }</Text>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Autor:</DataList.Label>
              <DataList.Value>
                {renderAuthor()}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Páginas:</DataList.Label>
              <DataList.Value>
                <Text as="div">{ data.pages }</Text>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Container>


          <Flex justify="center">
            <RemoveAlertDialog label="livro" _action={handleDelete}/>
          </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}