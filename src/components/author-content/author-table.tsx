import { Table } from "@radix-ui/themes";
import Wrapper from "../ui/wrapper";
import { AuthorMetaData } from "types";
import { booksByAuthor } from "utils/infoData";
import { books } from "mock/data";
import { AuthorDialog } from "components/author-content/author-dialog";

interface AuthorTableProps {
  data: AuthorMetaData[]
}

export function AuthorTable({ data }: AuthorTableProps ) {
  return (
    <Wrapper>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Books</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                <AuthorDialog data={item}></AuthorDialog>
              </Table.Cell>
              <Table.Cell>{item.email ? item.email : '-'}</Table.Cell>
              <Table.Cell>{ booksByAuthor(item.id, books) }</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  )
}