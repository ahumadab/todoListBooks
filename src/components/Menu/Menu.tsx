import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { home, star } from 'ionicons/icons';
import React from 'react';

interface MenuProps {
  menuLabel: string;
}

const Menu: React.FC<MenuProps> = ({ menuLabel }) => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{menuLabel}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset>
          <IonMenuToggle>
            <IonItem routerLink="/home">
              <IonIcon slot="start" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink="/create">
              <IonIcon slot="start" icon={star} />
              <IonLabel>Create</IonLabel>
            </IonItem>
            <IonItem routerLink="/favorites">
              <IonIcon slot="start" icon={star} />
              <IonLabel>Favorites</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
