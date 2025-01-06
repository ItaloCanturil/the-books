import AuthorModel from "model/AuthorModel";
import BookModel from "model/BookModel";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type LibraryContextProps = {
  children: ReactNode
}

type LibraryContextType = {
  authorModel: AuthorModel;
  bookModel: BookModel;
}

const initialValue = {
  authorModel: new AuthorModel(),
  bookModel: new BookModel(),
}

export const LibraryContext = createContext<LibraryContextType>(initialValue);

export const LibraryContextProvider = ({ children }: LibraryContextProps) => {
  const [authorModel] = useState(() => new AuthorModel());
  const [bookModel] = useState(() => new BookModel());

  const contextValue = useMemo(() => ({ authorModel, bookModel}), [authorModel, bookModel])

  return <LibraryContext.Provider value={contextValue}>{ children }</LibraryContext.Provider>
}

export const useLibraryContext = (): LibraryContextType => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error('useLibraryContext error');
  }

  return context;
}