import { IonButton } from '@ionic/react';
import React from 'react';

interface CreateBookButtonProps {}

const CreateBookButton: React.FC<CreateBookButtonProps> = () => {
  return (
    <>
      <IonButton routerLink="/create">Add new Book</IonButton>
    </>
  );
};

export default CreateBookButton;
