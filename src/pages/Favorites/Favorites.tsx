import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { FavoriteList } from '../../features/FavoriteBooks';

const Favorites: React.FC = () => {
  return (
    <>
      <Menu menuLabel="Favorites" />
      <IonPage id="main-content">
        <Header titleLabel="Favorites" />
        <IonContent className="ion-padding">
          <FavoriteList />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Favorites;
