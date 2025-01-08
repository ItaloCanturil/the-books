import { Box, Flex, TextField } from "@radix-ui/themes";
import { AuthorTable } from "components/author-content/author-table";
import { CreateAuthorDialog } from "components/create-author-dialog";
import { useLibraryContext } from "contexts/LibraryContext";

export function AuthorContent() {
  const { authorModel } = useLibraryContext();

  return (
    <Flex direction="column" gap="4">
      <Flex gap="2">
        <TextField.Root radius='large'></TextField.Root>
        
        <CreateAuthorDialog />
      </Flex>

      <AuthorTable data={authorModel}/>
    </Flex>
  )
}