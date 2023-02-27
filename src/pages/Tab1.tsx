import { IonBackButton, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, bag, chevronBackSharp, ellipsisVertical, ellipsisVerticalSharp, home, logoAndroid, swapVertical } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage >

      <IonToolbar>
        <IonHeader>
          <IonItem lines='none' className='title'>
            <IonIcon icon={chevronBackSharp}></IonIcon>
            <IonTitle class="ion-text-center">Change Email</IonTitle>



            <IonIcon icon={ellipsisVerticalSharp}></IonIcon>

          </IonItem  >
        </IonHeader>
      </IonToolbar>

      <IonContent>
        <IonLabel className="text-title">Current email</IonLabel>

        <IonItem fill="outline" className="outline-box">

          <IonInput type="email" ></IonInput>
        </IonItem>


        <IonLabel className="text-title" >New email</IonLabel>
        <IonItem fill="outline" className="outline-box">
          <IonInput type="email" ></IonInput>
        </IonItem>


        <IonLabel className="text-title">Enter your email Password</IonLabel>
        <IonIcon name='eye' item-right></IonIcon>
        <IonItem fill="outline" className="outline-box">
          <IonInput type="password" ></IonInput>
        </IonItem>
      </IonContent>

      <IonToolbar>
        <IonFooter>
          <IonButton expand="full" shape="round" >Save Email</IonButton>

        </IonFooter>
      </IonToolbar>

    </IonPage>
  );
};

export default Tab1;
