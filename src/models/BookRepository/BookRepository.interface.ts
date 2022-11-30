import { Book } from '../Book/Book.interface';

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface BookRepository
 */
export interface BookRepository {
  getAll(): Promise<Book[]>;
  addOne(book: Book): Promise<void>;
}
