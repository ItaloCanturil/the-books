import { Flex, Text } from '@radix-ui/themes'
import { LibraryContextProvider, useLibraryContext } from 'contexts/LibraryContext'
import { BookContent } from 'components/book-content'
import { AuthorContent } from 'components/author-content'

function AppContent() {
  const { isLoading } = useLibraryContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex direction="column" mx="auto" width="64em">
      <Text size="6" weight="bold">Biblioteca</Text>

      <Flex mt="2" justify="between">
        <BookContent/>
        <AuthorContent/>
      </Flex>
    </Flex>
  );
}

function App() {
  return (
    <LibraryContextProvider>
      <AppContent />
    </LibraryContextProvider>
  );
}

export default App
