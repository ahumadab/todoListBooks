import { ISaveBook } from '../../features/CreateBook/hooks/useSaveBook.hook';
import { Book } from '../Book';
import { BookRepository, Preference } from '../BookRepository';

/**
 * @author Boris Ahumada <boris.ahumada@laposte.net>
 * @class BookService
 * @classdesc
 */
export class BookService implements ISaveBook {
  private readonly _bookRepository: BookRepository;

  constructor() {
    this._bookRepository = new Preference();
  }
  public saveBook = async (book: Book) => {
    this._bookRepository.addOne(book);
  };
}
