import { IonIcon } from '@ionic/react';
import { book as bookIcon, bookOutline } from 'ionicons/icons';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';
import { IBook } from '../../../models/Book';

interface ReadBookButtonProps {
  book: IBook;
}

const ReadBookButton: React.FC<ReadBookButtonProps> = ({ book }) => {
  const { switchRead } = useContext(BookServiceContext);
  return (
    <>
      <IonIcon
        icon={book.readDate ? bookIcon : bookOutline}
        slot="end"
        onClick={() => switchRead(book)}
      />
    </>
  );
};

export default ReadBookButton;
