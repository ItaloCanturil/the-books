export type BookMetaData = {
  id: number;
  name: string;
  author_id: number;
  pages?: number
}

export type AuthorMetaData = {
  id: number;
  name: string;
  email?: string;
}