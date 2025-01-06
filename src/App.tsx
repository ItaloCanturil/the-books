import { Box, Flex, Grid, Text, TextField } from '@radix-ui/themes'
import { CreateAuthorDialog } from './components/create-author-dialog'
import { CreateBookDialog } from './components/create-book-dialog'
import { BookCard } from './components/Cards/book-card'
import { UserTable } from './components/ui/user-table'
// import { authors, books } from './mock/data'
import { LibraryContextProvider, useLibraryContext } from 'contexts/LibraryContext'

function App() {
  const { authorModel, bookModel } = useLibraryContext();
  const books = bookModel.getAllBooks();
  console.log("🚀 ~ App ~ books:", books)
  const authors = authorModel.getAllAuthors();

  return (
    <>
      <LibraryContextProvider>
        <Flex direction="column" mx="auto" width="64em">
          <Text size="6" weight="bold">Biblioteca</Text>

          <Flex my="2" justify="between" gap="2">
            <Flex gap="2">
              <TextField.Root radius='large'></TextField.Root>

              <CreateAuthorDialog/>
            </Flex>
            <Flex gap="2">
              <TextField.Root radius='large'></TextField.Root>

              <CreateBookDialog/>
            </Flex>
          </Flex>

          <Grid columns="3" gap="2" mt="2">
            {books.map((book) => (
              <BookCard key={book.id} data={book}/>
            ))}
          </Grid>

          <Box mt="2">
            <UserTable data={authors} ></UserTable>
          </Box>
        </Flex>
      </LibraryContextProvider>
    </>
  )
}

export default App
