import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { CreateBookForm } from '../../features/CreateBook';

const Create: React.FC = () => {
  return (
    <>
      <Menu menuLabel="Create" />
      <IonPage id="main-content">
        <Header titleLabel="Create" />
        <IonContent className="ion-padding">
          <CreateBookForm />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Create;
