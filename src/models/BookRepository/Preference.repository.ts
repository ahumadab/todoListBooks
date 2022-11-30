import { Preferences } from '@capacitor/preferences';

import { PreferencesKeys } from '../../constants';
import { Book } from '../Book';
import { BookRepository } from './BookRepository.interface';

/**
 * @author Boris Ahumada <boris.ahumada@laposte.net>
 * @class Preference
 * @classdesc
 */
export class Preference implements BookRepository {
  public async getAll(): Promise<Book[]> {
    let books: Book[] = [];
    const { value } = await Preferences.get({ key: PreferencesKeys.ALL_BOOK });
    if (value) {
      books = JSON.parse(value) as Book[];
    }

    return books;
  }
  public async addOne(book: Book): Promise<void> {
    const oldBooks = await this.getAll();
    const newBooks = [...oldBooks, book];
    await Preferences.set({
      key: PreferencesKeys.ALL_BOOK,
      value: JSON.stringify(newBooks),
    });
  }
}
