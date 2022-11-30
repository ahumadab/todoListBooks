import { useEffect, useState } from 'react';

import { IBook } from '../../models/Book';
import { IBookService } from '../../models/BookService';
import { BookService } from '../../models/BookService/BookService.service';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface IuseBookService
 */
export interface IuseBookService {
  books: IBook[];
  saveBook: (book: IBook) => Promise<void>;
  switchFavorite: (book: IBook) => Promise<void>;
}

const useBookService = (): IuseBookService => {
  const bookService: IBookService = new BookService();
  const [books, setBooksState] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getBooks = async () => {
    const books = await bookService.getAll();
    setBooksState(books);
  };

  const saveBook = async (book: IBook) => {
    await bookService.saveBook(book);
    setBooksState([...books, book]);
  };

  const switchFavorite = async (book: IBook) => {
    await bookService.switchFavorite(book);
    const newBooks = books.map((bookInState) => {
      if (bookInState.id === book.id) {
        bookInState.isFavorite = !book.isFavorite;
      }
      return bookInState;
    });
    setBooksState(newBooks);
  };

  return {
    books,
    saveBook,
    switchFavorite,
  };
};

export default useBookService;
