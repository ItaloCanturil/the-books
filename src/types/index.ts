export type BookMetaData = {
  id: number;
  name: string;
  author_id: number;
  author?: string;
  pages?: number
}

export type AuthorMetaData = {
  id: number;
  name: string;
  email?: string;
}