import { BookMetaData } from "types"
import { getData, setData } from "utils/storeLocal"

class BookModel {
  books: BookMetaData[];
  private nextId: number;

  constructor() {
    this.books = getData('book', []);
    this.nextId = 0;
  };

  addBook(book: Omit<BookMetaData, 'id'>){
    this.nextId += 1;
    const reformedBook = {
      id: this.nextId,
      ...book
    }

    this.books.push(reformedBook);

    setData('book', this.books);
  };
  
  getAllBooks() {
    return this.books;
  };
  
  deleteBookById(book_id: number) {
    const index = this.books.findIndex(boook => boook.id === book_id);
    
    if (index !== -1) {
      this.books.splice(index, 1);
    };
    
    setData('book', this.books);
  }
}

export default BookModel;