import { AuthorMetaData, BookMetaData } from "types";

export const booksByAuthor = (author_id: number, books: BookMetaData[]) => {
  const quantity = books.filter((num) => {
    if (num.author_id === author_id) return num
  })

  return quantity.length;
};

export const authorNameById = (author_id: number, authors: AuthorMetaData[]) => {
  const find =  authors.find((author) => author.id === author_id);

  return find?.name ? find.name : 'Sem autor'
}