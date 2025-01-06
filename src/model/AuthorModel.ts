import { AuthorMetaData } from "types"
import { getData, setData } from "utils/storeLocal"

class AuthorModel {
  authors: AuthorMetaData[];
  authorObj: Record<number, AuthorMetaData>;
  private nextId: number;

  constructor() {
    this.authors = getData('author', []);
    this.nextId = 0;
    this.authorObj = {}
    // this.updateAuthorsObj()
    // console.log("🚀 ~ AuthorModel ~ constructor ~ this.updateAuthorsObj():", this.authorObj)
  };

  updateAuthorsObj() {
    this.authorObj = this.authors.reduce((obj, item) => {
      return {...obj, [item.id]: item}
    }, {} as Record<number, AuthorMetaData>)
  }

  addAuthor(author: Omit<AuthorMetaData, 'id'>) {
    this.nextId = this.authors.length + 1;
    const reformedAuthor = {
      ...author,
      id: this.nextId,
    }
    this.authors.push(reformedAuthor);

    setData('author', this.authors);
  };
  
  getAllAuthors() {
    return this.authors;
  };
  
  deleteAuthorById(author_id: number) {
    const index = this.authors.findIndex(author => author.id === author_id);
    
    if (index !== -1) {
      this.authors.splice(index, 1);
    };
    
    setData('author', this.authors);
  }
}

export default AuthorModel;