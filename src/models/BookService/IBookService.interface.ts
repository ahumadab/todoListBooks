import { IBook } from '../Book';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface IBookService
 */
export interface IBookService {
  saveBook(book: IBook): Promise<void>;
  getAll(): Promise<IBook[]>;
  addToFavorite(book: IBook): Promise<void>;
}
