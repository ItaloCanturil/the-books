import {Button, Container, DataList, Dialog, Flex, IconButton, Text } from "@radix-ui/themes";
import { useLibraryContext } from "contexts/LibraryContext";
import { AuthorMetaData, BookMetaData } from "types";
import { RemoveAlertDialog } from "../remove-alert-dialog";
import { useToast } from "contexts/ToastContext";
import { BookDialog } from "components/book-content/book-dialog";
import ListStyle from "components/ui/list-style";
import { CloseIcon } from "components/ui/Icons/icons";
import { useState } from "react";

type AuthorDialogProps = {
  data: AuthorMetaData
}

export function AuthorDialog ({ data }: AuthorDialogProps ) {
  const { deleteAuthorById, searchBookByAuthorId } = useLibraryContext();
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);

  const booksAuthor= searchBookByAuthorId(data.id) as unknown as BookMetaData[];

  const handleDelete = () => {
    deleteAuthorById(data.id)

    showToast("Autor excluido", "failure")
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant="ghost">{ data.name }</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Flex justify={"between"}>
          <Dialog.Title>Informações do autor</Dialog.Title>

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
              <DataList.Label>Email:</DataList.Label>
              <DataList.Value>
                <Text as="div">{ data.email }</Text>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Livros:</DataList.Label>
              <DataList.Value>
                <ListStyle>
                  {booksAuthor.map((book) => (
                    <li>
                      <BookDialog data={book}></BookDialog>
                    </li>
                  ))}
                </ListStyle>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Container>

        <Flex justify="center">
          <RemoveAlertDialog label="autor" _action={handleDelete}/>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}