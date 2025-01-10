import { Flex, TextField } from "@radix-ui/themes";
import { AuthorTable } from "components/author-content/author-table";
import { CreateAuthorDialog } from "components/author-content/create-author-dialog";
import { useLibraryContext } from "contexts/LibraryContext";
import { ChangeEvent } from "react";

export function AuthorContent() {
  const { authorModel, filterAuthorByName } = useLibraryContext();

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    filterAuthorByName(search)
  }

  return (
    <Flex direction="column" gap="4">
      <Flex gap="2" justify="end">
        <TextField.Root radius='full' placeholder="Procurar autor" onChange={handleFilter}/>
        
        <CreateAuthorDialog />
      </Flex>

      <AuthorTable data={authorModel}/>
    </Flex>
  )
}