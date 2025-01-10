import { Box, Flex, Grid, Section, Text } from '@radix-ui/themes'
import { LibraryContextProvider, useLibraryContext } from 'contexts/LibraryContext'
import { BookContent } from 'components/book-content'
import { AuthorContent } from 'components/author-content'
import { ToastProvider } from 'contexts/ToastContext';
import "./index.css"

function AppContent() {
  const { isLoading } = useLibraryContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex direction="column" mx="auto" maxWidth="64em" height="100%" p="4">
      <Flex direction="column" mx="auto" align="center">
        <Text size="6" weight="bold">Biblioteca interativa</Text>
        <Text size="2" weight="light">Porque cada livro conta uma história, e cada autor deixa um legado.</Text>
      </Flex>

      <Grid
        columns={{
          initial: '1',
          md: '2'
        }}
        rows={{
          initial: '2',
          md: '1'
        }}
        mt="9"
        gap="2"
        gapY={{
          initial: '9'
        }}
        flexGrow="1"
      >
        <BookContent/>
        <AuthorContent/>
      </Grid>
    </Flex>
  );
}

function App() {
  return (
    <LibraryContextProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </LibraryContextProvider>
  );
}

export default App
