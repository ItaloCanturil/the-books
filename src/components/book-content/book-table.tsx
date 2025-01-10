import { Table } from "@radix-ui/themes"
import Wrapper from "components/ui/wrapper"
import { useLibraryContext } from "contexts/LibraryContext"
import { BookMetaData } from "types"
import { BookDialog } from "./book-dialog"

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
      <Table.Root 
        size={{
          initial: "1",
          md: "2",
          lg: "3"
        }}
        layout="auto"
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell justify="center">ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Autor</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Páginas</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell justify="center">{item.id}</Table.Cell>
              <Table.Cell justify="center">
                <BookDialog data={item}></BookDialog>
              </Table.Cell>
              <Table.Cell justify="center">{item.author ?
                item.author
              :  handleAuthorId(item.author_id)}
              </Table.Cell>
              <Table.Cell justify="center">{item.pages}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  )
}