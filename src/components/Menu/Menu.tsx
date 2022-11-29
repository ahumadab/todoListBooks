import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/react';
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
      <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>
  );
};

export default Menu;
