import { useEffect, useState } from 'react';

import { Book } from '../../models/Book/Book.interface';
import { IBookService } from '../../models/BookService';
import { BookService } from '../../models/BookService/BookService.service';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface IuseBookService
 */
export interface IuseBookService {
  books: Book[];
  saveBook: (book: Book) => Promise<void>;
}

const useBookService = (): IuseBookService => {
  const bookService: IBookService = new BookService();
  const [books, setBooksState] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const books = await bookService.getAll();
    setBooksState(books);
  };

  const saveBook = async (book: Book) => {
    await bookService.saveBook(book);
    setBooksState([...books, book]);
  };

  return {
    books,
    saveBook,
  };
};

export default useBookService;
