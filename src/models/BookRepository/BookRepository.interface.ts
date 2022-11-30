import { IBook } from '../Book';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface BookRepository
 */
export interface BookRepository {
  getAll(): Promise<IBook[]>;
  addOne(book: IBook): Promise<void>;
  update(books: IBook[]): Promise<void>;
}
