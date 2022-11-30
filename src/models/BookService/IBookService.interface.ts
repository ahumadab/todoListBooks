import { IBook } from '../Book';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface IBookService
 */
export interface IBookService {
  saveBook(book: IBook): Promise<void>;
  getAll(): Promise<IBook[]>;
  switchFavorite(book: IBook): Promise<void>;
  switchRead(book: IBook): Promise<void>;
  delete(book: IBook): Promise<void>;
}
