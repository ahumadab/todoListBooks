/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @interface Book
 */
export interface IBook {
  id: string;
  title: string;
  author: string;
  addingDate: Date;
  isFavorite: boolean;
  readDate?: Date;
}
