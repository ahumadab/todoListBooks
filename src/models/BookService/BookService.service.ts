import { IBook } from '../Book';
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
  public async switchFavorite(book: IBook): Promise<void> {
    const books = await this._bookRepository.getAll();
    const bookFound = books.find((bookInRepo) => bookInRepo.id === book.id);
    if (bookFound) {
      bookFound.isFavorite = !book.isFavorite;
      this._bookRepository.update(books);
    }
  }

  public async saveBook(book: IBook): Promise<void> {
    this._bookRepository.addOne(book);
  }

  public async getAll(): Promise<IBook[]> {
    return this._bookRepository.getAll();
  }
}
