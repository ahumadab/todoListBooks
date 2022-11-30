import { Preferences } from '@capacitor/preferences';

import { PreferencesKeys } from '../../constants';
import { IBook } from '../Book';
import { BookRepository } from './BookRepository.interface';

/**
 * @author Boris Ahumada <boris.ahumada@laposte.net>
 * @class Preference
 * @classdesc
 */
export class Preference implements BookRepository {
  public async update(books: IBook[]): Promise<void> {
    await Preferences.set({
      key: PreferencesKeys.ALL_BOOK,
      value: JSON.stringify(books),
    });
  }

  public async getAll(): Promise<IBook[]> {
    let books: IBook[] = [];
    const { value } = await Preferences.get({ key: PreferencesKeys.ALL_BOOK });
    if (value) {
      books = JSON.parse(value) as IBook[];
    }
    return books;
  }

  public async addOne(book: IBook): Promise<void> {
    const oldBooks = await this.getAll();
    const newBooks = [...oldBooks, book];
    await this.update(newBooks);
  }
}
