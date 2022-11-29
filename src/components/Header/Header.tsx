import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface HeaderProps {
  titleLabel: string;
}

const Header: React.FC<HeaderProps> = ({ titleLabel }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{titleLabel}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
