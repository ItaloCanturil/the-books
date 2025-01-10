import { Table } from "@radix-ui/themes";
import Wrapper from "../ui/wrapper";
import { AuthorMetaData } from "types";
import { booksByAuthor } from "utils/infoData";
import { AuthorDialog } from "components/author-content/author-dialog";
import { useLibraryContext } from "contexts/LibraryContext";

interface AuthorTableProps {
  data: AuthorMetaData[]
}

export function AuthorTable({ data }: AuthorTableProps ) {
  const { bookModel} = useLibraryContext();

  return (
    <Wrapper>
      <Table.Root>
        <Table.Header>
          <Table.Row >
            <Table.ColumnHeaderCell justify="center">ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">Livros</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell justify="center">{item.id}</Table.Cell>
              <Table.Cell justify="center">
                <AuthorDialog data={item}></AuthorDialog>
              </Table.Cell>
              <Table.Cell justify="center">{item.email ? item.email : '-'}</Table.Cell>
              <Table.Cell justify="center">{ booksByAuthor(item.id, bookModel) }</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  )
}