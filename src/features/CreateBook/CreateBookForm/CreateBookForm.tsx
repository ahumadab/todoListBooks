import { IonInputCustomEvent } from '@ionic/core';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonNote, IonText, useIonToast } from '@ionic/react';
import React, { useContext } from 'react';
import uniqid from 'uniqid';

import { BookServiceContext } from '../../../contexts/BookService.context';
import { useCreateBookForm } from '../hooks';
import styles from './CreateBookForm.module.sass';

interface CreateBookFormProps {}

const CreateBookForm: React.FC<CreateBookFormProps> = () => {
  const {
    author,
    setAuthor,
    setTitle,
    title,
    isFormValid,
    isAuthorError,
    isTitleError,
    resetForm,
  } = useCreateBookForm();
  const { saveBook } = useContext(BookServiceContext);
  const [present] = useIonToast();

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
      resetForm();
      await saveBook({
        id: uniqid(),
        author,
        title,
        addingDate: new Date(),
      });
      showConfirmCreateBook();
    }
  };

  const showConfirmCreateBook = () => {
    present({
      message: "New Book created !",
      duration: 1500,
      position: "bottom",
      keyboardClose: true,
    });
  };

  return (
    <>
      <IonText color="primary">
        <h1 className={styles.title}>Add new Book</h1>
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

export default CreateBookForm;
