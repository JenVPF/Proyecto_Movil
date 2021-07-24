import {IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, IonImg} from '@ionic/react';
import './Tab3.css';
import './Tabs.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="title">Inicio Sesion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow> 
        <IonCol> 
          <IonItem class="item"> 
            {/* <IonLabel> Correo electrónico </IonLabel>  */}
            <IonInput class="input" type = "email" placeholder="Correo"></IonInput> 
          </IonItem> 
          <IonItem class="item"> 
            {/* <IonLabel> Contraseña </IonLabel>  */}
            <IonInput class="input" type = "password" placeholder="Contraseña"></IonInput> 
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
