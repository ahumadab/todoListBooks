import { IonItem, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';
import { LongPressable, useBookOptions } from '../../BookOptions';
import { FavoriteButton, IsFavoriteIcon } from '../../FavoriteBooks';
import { ReadBookButton } from '../../ReadBook';

const Books: React.FC = () => {
  const { books } = useContext(BookServiceContext);
  const { openOptionActionSheet } = useBookOptions();

  return (
    <IonList>
      {books.map((book) => (
        <IonItemSliding key={book.title}>
          <LongPressable onLongPress={() => openOptionActionSheet(book)}>
            <IonItem>
              <IonLabel>{book.title}</IonLabel>
              <IsFavoriteIcon book={book} />
              <ReadBookButton book={book} />
            </IonItem>
            <IonItemOptions>
              <FavoriteButton book={book} />
            </IonItemOptions>
          </LongPressable>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default Books;
