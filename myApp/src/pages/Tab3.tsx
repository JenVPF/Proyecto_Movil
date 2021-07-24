import {IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow> 
        <IonCol> 
          <IonItem> 
            <IonLabel position = "floating"> Correo electrónico </IonLabel> 
            <IonInput type = "email"></IonInput> 
          </IonItem> 
          <IonItem> 
            <IonLabel position = "floating"> Contraseña </IonLabel> 
            <IonInput type = "password"></IonInput> 
          </IonItem> 
        </IonCol> 
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton expand="block">Login</IonButton>
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default Tab3;
