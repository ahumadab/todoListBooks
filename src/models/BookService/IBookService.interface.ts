import { Book } from '../Book';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface IBookService
 */
export interface IBookService {
  saveBook(book: Book): Promise<void>;
  getAll(): Promise<Book[]>;
}
