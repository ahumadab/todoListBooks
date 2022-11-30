import { useEffect, useState } from 'react';

import { IBook } from '../../models/Book';
import { BookService, IBookService } from '../../models/BookService';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface IuseBookService
 */
export interface IuseBookService {
  books: IBook[];
  saveBook: (book: IBook) => Promise<void>;
  switchFavorite: (book: IBook) => Promise<void>;
  switchRead: (book: IBook) => Promise<void>;
  deleteBook: (book: IBook) => Promise<void>;
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

  const deleteBook = async (book: IBook) => {
    const bookIndex: number = books.findIndex(
      (bookInState) => bookInState.id === book.id
    );
    if (bookIndex !== -1) {
      await bookService.delete(book);
      books.splice(bookIndex, 1);
      setBooksState([...books]);
    }
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

  const switchRead = async (book: IBook) => {
    if (book.readDate) {
      book.readDate = undefined;
    } else {
      book.readDate = new Date();
    }
    await bookService.switchRead(book);
    setBooksState([...books]);
  };

  return {
    books,
    saveBook,
    switchFavorite,
    switchRead,
    deleteBook,
  };
};

export default useBookService;
