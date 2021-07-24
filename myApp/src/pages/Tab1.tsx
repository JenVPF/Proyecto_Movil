import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonList, IonItem, IonLabel} from '@ionic/react';
import './Tab1.css';
import './Tabs.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="title">Sismos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList class="table">
      <IonItem class="item">
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem class="item">
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem class="item"> 
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem class="item">
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem class="item">
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
      <IonItem class="item">
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
      <IonItem class="item">
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
      <IonItem class="item">
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
