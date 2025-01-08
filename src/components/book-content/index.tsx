import { Box, Flex, TextField } from "@radix-ui/themes";
import { BookTable } from "components/book-content/book-table";
import { CreateBookDialog } from "components/create-book-dialog";
import { useLibraryContext } from "contexts/LibraryContext";

export function BookContent() {
  const { bookModel } = useLibraryContext();

  return (
    <Flex direction="column" gap="4">
      <Flex gap="2">
        <TextField.Root radius='large'></TextField.Root>
        
        <CreateBookDialog />
      </Flex>

      <BookTable data={bookModel}/>
    </Flex>
  )
}