import { Box, Text } from '@radix-ui/themes'
import { books, authors } from './mock/data'
import { AuthorCard } from './components/Cards/AuthorCard'

function App() {

  return (
    <>
      <Text size="6">Biblioteca</Text>

      <Box mt="2">
        {authors.map((author) => (
          <AuthorCard key={author.id} id={author.id} name={author.name} email={author.email}/>
        ))}
      </Box>
    </>
  )
}

export default App
