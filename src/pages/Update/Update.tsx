import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { UpdateBookForm } from '../../features/UpdateBook';
import { IBook } from '../../models/Book';

const Update: React.FC = () => {
  const { state: bookToUpdate } = useLocation<IBook>();

  return (
    <>
      <Menu menuLabel="Create" />
      <IonPage id="main-content">
        <Header titleLabel="Create" />
        <IonContent className="ion-padding">
          {bookToUpdate && <UpdateBookForm bookToUpdate={bookToUpdate} />}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Update;
