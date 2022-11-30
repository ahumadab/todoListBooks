import { IonIcon, IonItem, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { book as bookIcon, bookOutline } from 'ionicons/icons';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';
import { IBook } from '../../../models/Book';
import { FavoriteButton } from '../FavoriteButton';

const FavoriteList: React.FC = () => {
  const { books } = useContext(BookServiceContext);
  const favoriteBooks: IBook[] = books.filter(
    (book) => book.isFavorite === true
  );
  return (
    <>
      <IonList>
        {favoriteBooks.map((favoriteBook) => (
          <IonItemSliding key={favoriteBook.title}>
            <IonItem>
              <IonLabel>{favoriteBook.title}</IonLabel>
              <IonIcon
                icon={favoriteBook.readDate ? bookIcon : bookOutline}
                slot="end"
              />
            </IonItem>
            <IonItemOptions>
              <FavoriteButton book={favoriteBook} />
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
    </>
  );
};

export default FavoriteList;
