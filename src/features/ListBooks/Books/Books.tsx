import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { book as bookIcon, bookOutline, star } from 'ionicons/icons';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';

const Books: React.FC = () => {
  const { books, addToFavorite } = useContext(BookServiceContext);

  return (
    <IonList>
      {books.map((book) => (
        <IonItemSliding key={book.title}>
          <IonItem>
            <IonLabel>{book.title}</IonLabel>
            {book.isFavorite && <IonIcon icon={star} slot="end" />}
            <IonIcon icon={book.readDate ? bookIcon : bookOutline} slot="end" />
          </IonItem>
          <IonItemOptions>
            <IonItemOption onClick={() => addToFavorite(book)}>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default Books;
