import { Flex, TextField } from "@radix-ui/themes";
import { BookTable } from "components/book-content/book-table";
import { CreateBookDialog } from "components/create-book-dialog";
import { useLibraryContext } from "contexts/LibraryContext";
import { ChangeEvent } from "react";

export function BookContent() {
  const { bookModel, filterBookByName } = useLibraryContext();

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    filterBookByName(search)
  }

  return (
    <Flex direction="column" gap="4">
      <Flex gap="2" justify="end">
        <TextField.Root radius='full' placeholder="Procurar livro" onChange={handleFilter}/>
        
        <CreateBookDialog />
      </Flex>

      <BookTable data={bookModel}/>
    </Flex>
  )
}