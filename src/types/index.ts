export type BookMetaData = {
  id: number;
  name: string;
  author_id: number;
  pages?: string
}

export type AuthorMetaData = {
  id: number;
  name: string;
  email?: string;
}