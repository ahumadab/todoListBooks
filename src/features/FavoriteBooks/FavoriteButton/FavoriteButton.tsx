import { IonItemOption, IonLabel } from '@ionic/react';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';
import { IBook } from '../../../models/Book';

interface FavoriteButtonProps {
  book: IBook;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ book }) => {
  const { switchFavorite } = useContext(BookServiceContext);
  return (
    <>
      <IonItemOption onClick={() => switchFavorite(book)}>
        <IonLabel class="ion-text-wrap">
          {book.isFavorite ? "Remove Favorite" : "Add Favorite"}
        </IonLabel>
      </IonItemOption>
    </>
  );
};

export default FavoriteButton;
