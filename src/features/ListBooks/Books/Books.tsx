import { IonIcon, IonItem, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { book as bookIcon, bookOutline } from 'ionicons/icons';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';
import { FavoriteButton, IsFavoriteIcon } from '../../FavoriteBooks';

const Books: React.FC = () => {
  const { books } = useContext(BookServiceContext);

  return (
    <IonList>
      {books.map((book) => (
        <IonItemSliding key={book.title}>
          <IonItem>
            <IonLabel>{book.title}</IonLabel>
            <IsFavoriteIcon book={book} />
            <IonIcon icon={book.readDate ? bookIcon : bookOutline} slot="end" />
          </IonItem>
          <IonItemOptions>
            <FavoriteButton book={book} />
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default Books;
