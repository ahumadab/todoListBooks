import { Book } from '../../../models/Book';
import { BookService } from '../../../models/BookService';

export interface ISaveBook {
  saveBook: (book: Book) => Promise<void>;
}

const useSaveBook = (): ISaveBook => {
  const bookService = new BookService();

  const saveBook = async (book: Book) => {
    await bookService.saveBook(book);
  };

  return {
    saveBook,
  };
};

export default useSaveBook;
