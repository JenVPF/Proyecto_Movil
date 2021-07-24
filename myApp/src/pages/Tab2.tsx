import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Integrantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel class="text">Diego Tapia</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="text">Jennifer Portiño</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
