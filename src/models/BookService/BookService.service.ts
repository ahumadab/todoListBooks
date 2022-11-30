import { Book } from '../Book';
import { BookRepository, Preference } from '../BookRepository';
import { IBookService } from './IBookService.interface';

/**
 * @author Boris Ahumada <boris.ahumada@laposte.net>
 * @class BookService
 * @classdesc
 */
export class BookService implements IBookService {
  private readonly _bookRepository: BookRepository;

  constructor() {
    this._bookRepository = new Preference();
  }
  public async saveBook(book: Book): Promise<void> {
    this._bookRepository.addOne(book);
  }

  public async getAll(): Promise<Book[]> {
    return this._bookRepository.getAll();
  }
}
