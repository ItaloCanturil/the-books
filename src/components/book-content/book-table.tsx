import { Table } from "@radix-ui/themes"
import Wrapper from "components/ui/wrapper"
import { useLibraryContext } from "contexts/LibraryContext"
import { BookMetaData } from "types"

interface BookTableProps {
  data: BookMetaData[]
}

export function BookTable({ data }: BookTableProps) {
  const { authorModel } = useLibraryContext();
  
  
  const handleAuthorId = (author_id: number) => {
    const author = authorModel.find((author) => author.id === author_id);

    return author ? author.name : 'Desconhecido'
  }

  return (
    <Wrapper>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Autor</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Páginas</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{handleAuthorId(item.author_id) }</Table.Cell>
              <Table.Cell>{item.pages}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  )
}