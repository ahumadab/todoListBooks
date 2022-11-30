import { useIonActionSheet } from '@ionic/react';
import { arrowBackOutline, pencilOutline, shareSocialOutline, trashOutline } from 'ionicons/icons';

import { IBook } from '../../../models/Book';

const useBookOptions = () => {
  const [createActionSheet] = useIonActionSheet();
  const presentAlert = () => {
    console.log("Delete");
  };
  const update = () => {
    console.log("update");
  };
  const share = () => {
    console.log("share");
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
          handler: presentAlert,
        },
        {
          text: "Update",
          data: {
            action: "update",
          },
          icon: pencilOutline,
          handler: update,
        },
        {
          text: "Share",
          data: {
            action: "share",
          },
          icon: shareSocialOutline,
          handler: share,
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
