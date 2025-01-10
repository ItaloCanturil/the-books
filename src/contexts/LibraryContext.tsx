import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthorMetaData, BookMetaData } from "types";
import { getData, setData } from "utils/storeLocal";

type LibraryContextProps = {
  children: ReactNode;
};

type LibraryContextType = {
  authorModel: AuthorMetaData[];
  bookModel: BookMetaData[];
  addBook: (book: Omit<BookMetaData, "id">) => void;
  addAuthor: (author: Omit<AuthorMetaData, "id">) => void;
  getAllBooks: () => void;
  getAllAuthors: () => void;
  deleteAuthorById: (author_id: number) => void;
  deleteBookById: (book_id: number) => void;
  filterBookByName: (name: string) => void;
  filterAuthorByName: (name: string) => void;
  isLoading: boolean;
};

const initialValue = {
  authorModel: [],
  bookModel: [],
  addBook: () => {},
  addAuthor: () => {},
  getAllAuthors: () => {},
  getAllBooks: () => {},
  deleteAuthorById: () => {},
  deleteBookById: () => {},
  filterBookByName: () => {},
  filterAuthorByName: () => {},
  isLoading: true,
};

export const LibraryContext = createContext<LibraryContextType>(initialValue);

export const LibraryContextProvider = ({ children }: LibraryContextProps) => {
  const [authorModel, setAuthors] = useState<AuthorMetaData[]>(
    () => initialValue.authorModel
  );
  const [bookModel, setBooks] = useState<BookMetaData[]>(
    () => initialValue.bookModel
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAuthors = getData("author", []);
    const storedBooks = getData("book", []);
    setAuthors(storedAuthors);
    setBooks(storedBooks);
    setIsLoading(false);
  }, []);

  const addBook = (book: Omit<BookMetaData, "id">) => {
    const nextId = bookModel.length
      ? bookModel[bookModel.length - 1].id + 1
      : 1;
    const reformedBook = { id: nextId, ...book };
    const updatedBooks = [...bookModel, reformedBook];

    setBooks(updatedBooks);
    setData("book", updatedBooks);
  };

  const addAuthor = (author: Omit<AuthorMetaData, "id">) => {
    const nextId = authorModel.length
      ? authorModel[authorModel.length - 1].id + 1
      : 1;
    const reformedAuthor = { id: nextId, ...author };
    const updatedAuthors = [...authorModel, reformedAuthor];

    setAuthors(updatedAuthors);
    setData("author", updatedAuthors);
  };

  const getAllAuthors = () => {
    const authors = getData("author", []);

    setAuthors(authors);
  };

  const getAllBooks = () => {
    const books = getData("book", []);

    setBooks(books);
  };

  const deleteAuthorById = (author_id: number) => {
    const filtered = authorModel.filter((a) => a.id !== author_id);

    setAuthors(filtered);
    setData("author", filtered);
  };

  const deleteBookById = (book_id: number) => {
    const filtered = bookModel.filter((b) => b.id !== book_id);

    setBooks(filtered);
    setData("book", filtered);
  };

  const filterBookByName = (name: string) => {
    if (!name) {
      getAllBooks();
      return;
    }

    const uppName = name.toUpperCase();
    const filtered = bookModel.filter((book) => {
      if(book.name.toUpperCase().includes(uppName)) {
        return book;
      }

      return;
    })

    setBooks(filtered)
  };

  const filterAuthorByName = (name: string) => {
    if (!name) {
      getAllAuthors();
      return;
    }

    const uppName = name.toUpperCase();
    const filtered = authorModel.filter((author) => {
      if(author.name.toUpperCase().includes(uppName)) {
        return author;
      }

      return;
    })

    setAuthors(filtered)
  }


  return (
    <LibraryContext.Provider
      value={{
        authorModel,
        bookModel,
        addAuthor,
        addBook,
        getAllAuthors,
        getAllBooks,
        isLoading,
        deleteAuthorById,
        deleteBookById,
        filterBookByName,
        filterAuthorByName
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibraryContext = (): LibraryContextType => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibraryContext error");
  }

  return context;
};
