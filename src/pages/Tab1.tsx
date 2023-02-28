import { IonBackButton, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, bag, chevronBackSharp, ellipsisVertical, ellipsisVerticalSharp, home, logoAndroid, swapVertical } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage >

      <IonToolbar>
        <IonHeader>
          <IonItem lines='none'>

            <IonButton fill='clear'><IonIcon icon={chevronBackSharp}></IonIcon></IonButton>
            <IonTitle class='ion-text-center' className='profile-title'>Change email</IonTitle>
            <IonButton fill='clear'> <IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>
          </IonItem>
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
        <IonFooter >
          <IonItem lines='none' />
          <IonButton color="tertiary" className='button' expand="full" shape="round" >Save Email</IonButton>

        </IonFooter>
      </IonToolbar>

    </IonPage>
  );
};

export default Tab1;
