import { IonInputCustomEvent } from '@ionic/core';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonNote, IonText, useIonToast } from '@ionic/react';
import React, { useContext } from 'react';

import { BookServiceContext } from '../../../contexts';
import { IBook } from '../../../models/Book';
import { useUpdateBookForm } from '../hooks';
import styles from './UpdateBookForm.module.sass';

interface UpdateBookFormProps {
  bookToUpdate: IBook;
}

const UpdateBookForm: React.FC<UpdateBookFormProps> = ({ bookToUpdate }) => {
  const {
    author,
    setAuthor,
    setTitle,
    title,
    isFormValid,
    isAuthorError,
    isTitleError,
  } = useUpdateBookForm(bookToUpdate);
  const { updateBook } = useContext(BookServiceContext);
  const [createToast] = useIonToast();

  const titleHandler: (event: IonInputCustomEvent<InputEvent>) => void = (
    event
  ) => {
    if (typeof event.target.value === "string") {
      setTitle(event.target.value);
    }
  };
  const authorHandler: (event: IonInputCustomEvent<InputEvent>) => void = (
    event
  ) => {
    if (typeof event.target.value === "string") {
      setAuthor(event.target.value);
    }
  };
  const validateHandler = async () => {
    if (isFormValid()) {
      await updateBook({
        ...bookToUpdate,
        author,
        title,
      });
      showConfirmUpdateBook();
    }
  };

  const showConfirmUpdateBook = () => {
    createToast({
      message: "Book updated !",
      duration: 1500,
      position: "bottom",
      keyboardClose: true,
    });
  };

  return (
    <>
      <IonText color="primary">
        <h1 className={styles.title}>Update Book</h1>
      </IonText>
      <IonList>
        <IonItem className={`${isTitleError && "ion-invalid"}`}>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput
            placeholder="Title"
            onIonInput={titleHandler}
            value={title}
          />
          <IonNote slot="error">Enter a valid title</IonNote>
        </IonItem>

        <IonItem className={`${isAuthorError && "ion-invalid"}`}>
          <IonLabel position="stacked">Author</IonLabel>
          <IonInput
            placeholder="Author"
            onIonInput={authorHandler}
            value={author}
          />
          <IonNote slot="error">Enter a valid Author</IonNote>
        </IonItem>
      </IonList>
      <IonButton expand="block" onIonFocus={validateHandler}>
        Validate
      </IonButton>
    </>
  );
};

export default UpdateBookForm;
