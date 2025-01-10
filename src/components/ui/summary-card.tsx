import { Flex, Text } from "@radix-ui/themes";
import Wrapper from "./wrapper";

type SummaryProps = {
  authors: number;
  books: number;
}

export function SummaryCard ({ authors, books}: SummaryProps) {
  return (
    <Flex align="center" gap="2" >
      <Wrapper width="100%">
        <Flex direction="column">
          <Text>Livros</Text>
          <Text weight="bold">{ books }</Text>
        </Flex>
      </Wrapper>
      <Wrapper width="100%">
        <Flex direction="column">
          <Text >Autores</Text>
          <Text weight="bold">{ authors }</Text>
        </Flex>
      </Wrapper>
    </Flex>
  )
}