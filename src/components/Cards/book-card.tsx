import { Avatar, Box, Flex, Text } from "@radix-ui/themes"
import Wrapper from "components/ui/wrapper"
import { authors } from "mock/data"
import { BookMetaData } from "types"
import { authorNameById } from "utils/infoData"

interface BookCardProps {
  data: BookMetaData
}

export function BookCard({ data }: BookCardProps) {
  return (
    <Wrapper>
      <Flex gap="2" direction="column" align="center">
        <Avatar size="4" fallback="I"/>
        <Box>
          <Text as="div" size="1">Nome: {data.name}</Text>
          <Text as="div" size="1">Autor: { authorNameById(data.author_id, authors) }</Text>
          {data.pages &&
            <Text as="div" size="1">Páginas: {data.pages}</Text>
          }
        </Box>
      </Flex>
    </Wrapper>
  )
}