import { IonContent, IonList, IonPage, IonText } from '@ionic/react';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { CreateBookButton } from '../../features/CreateBook';
import { Books } from '../../features/ListBooks';
import styles from './Home.module.sass';

const Home: React.FC = () => {
  return (
    <>
      <Menu menuLabel="Home" />
      <IonPage id="main-content">
        <Header titleLabel="Home" />
        <IonContent className="ion-padding">
          <IonText color="primary">
            <h1 className={styles.title}>Todo List Books</h1>
          </IonText>
          <CreateBookButton />
          <IonList>
            <Books
              books={[
                { author: "", title: "aze" },
                { author: "", title: "qsd" },
                { author: "", title: "wxc" },
              ]}
            />
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
