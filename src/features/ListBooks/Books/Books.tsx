import { IonItem, IonList } from '@ionic/react';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts/BookService.context';

const Books: React.FC = () => {
  const { books } = useContext(BookServiceContext);
  return (
    <IonList>
      {books.map((book) => (
        <IonItem key={book.title}>{book.title}</IonItem>
      ))}
    </IonList>
  );
};

export default Books;
