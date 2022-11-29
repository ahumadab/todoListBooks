import { IonItem, IonList } from '@ionic/react';
import React from 'react';

import { Book } from '../../../models/Book';

interface BooksProps {
  books: Book[];
}

const Books: React.FC<BooksProps> = ({ books }) => {
  return (
    <IonList>
      {books.map((book) => (
        <IonItem key={book.title}>{book.title}</IonItem>
      ))}
    </IonList>
  );
};

export default Books;
