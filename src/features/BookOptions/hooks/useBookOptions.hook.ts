import { Share } from '@capacitor/share';
import { useIonActionSheet, useIonAlert } from '@ionic/react';
import { arrowBackOutline, pencilOutline, shareSocialOutline, trashOutline } from 'ionicons/icons';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { BookServiceContext } from '../../../contexts';
import { IBook } from '../../../models/Book';

const useBookOptions = () => {
  const [createActionSheet] = useIonActionSheet();
  const [createAlert] = useIonAlert();
  const { deleteBook } = useContext(BookServiceContext);
  const { push } = useHistory();

  const presentAlertDelete = (book: IBook) => {
    createAlert({
      header: "Alert",
      subHeader: `Delete ${book.title}`,
      message: "Are you sure about that",
      buttons: [
        {
          text: "Abort",
          role: "cancel",
        },
        {
          text: "Yes",
          role: "destructive",
          handler: () => {
            deleteBook(book);
          },
        },
      ],
    });
  };
  const update = (book: IBook) => {
    push("/update", book);
  };

  const share = async (book: IBook) => {
    const hasRead = book.readDate;
    let text: string;
    if (hasRead) {
      text = `I have read this Book ${book.title} by ${book.author}.`;
      if (book.isFavorite) {
        text += "\nAnd it's one of my favorites !";
      }
    } else {
      text = `I'm gonna read this Book ${book.title} by ${book.author}.`;
    }
    await Share.share({
      title: "Look at me! I can read !",
      text: text,
      dialogTitle: "Share with buddies",
    });
  };

  const openOptionActionSheet = (book: IBook) => {
    createActionSheet({
      header: "Parameters",
      subHeader: book.title,
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          data: {
            action: "delete",
          },
          icon: trashOutline,
          handler: () => presentAlertDelete(book),
        },
        {
          text: "Update",
          data: {
            action: "update",
          },
          icon: pencilOutline,
          handler: () => update(book),
        },
        {
          text: "Share",
          data: {
            action: "share",
          },
          icon: shareSocialOutline,
          handler: () => share(book),
        },
        {
          text: "Cancel",
          role: "cancel",
          data: {
            action: "cancel",
          },
          icon: arrowBackOutline,
        },
      ],
    });
  };

  return {
    openOptionActionSheet,
  };
};

export default useBookOptions;
