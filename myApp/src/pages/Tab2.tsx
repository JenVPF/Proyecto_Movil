import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonItem, IonList } from '@ionic/react';
import {sunny, moon} from 'ionicons/icons';
import './Tab2.css';
import './Tabs.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="title">Integrantes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="none">
          <IonIcon class="icon" icon={sunny}/>
          <IonLabel class="label">Diego Tapia</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonIcon class="icon" icon={moon}/>
          <IonLabel class="label">Jennifer Portiño</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
