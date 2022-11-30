import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import React from 'react';

import { IBook } from '../../../models/Book';

interface IsFavoriteIconProps {
  book: IBook;
}

const IsFavoriteIcon: React.FC<IsFavoriteIconProps> = ({ book }) => {
  return <>{book.isFavorite && <IonIcon icon={star} slot="end" />}</>;
};

export default IsFavoriteIcon;
