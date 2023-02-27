import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, ellipsisVerticalSharp } from 'ionicons/icons';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>

        <IonHeader >
          <IonItem lines='none'>
            <IonIcon icon={chevronBackSharp}></IonIcon>
            <IonTitle class='ion-text-center'>Account</IonTitle>
            <IonIcon icon={ellipsisVerticalSharp}></IonIcon>
          </IonItem>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonItem lines='none' >
          <IonLabel className='outline-box'>Hide Account</IonLabel>
          <IonToggle slot='end'></IonToggle>
        </IonItem>
        <IonItem lines='none' >
          <p className='paragraph'>Make sure you can remember you password, as you'll need it to sign back in</p>

        </IonItem >

        <IonRow  className='body-content' >and ******@gmail.com</IonRow>
      </IonContent>
      <IonToolbar>
        <IonFooter>
          
            <IonButton expand="full" shape="round">Save Changes</IonButton>
            
          
            <IonButton  expand="full" shape="round">Log out</IonButton>

            
          <IonRow class='ion-justify-content-center'>
            <IonItem lines='none' >
              <IonRouterLink className='delete-button' > Delete Account</IonRouterLink>
            </IonItem>
            </IonRow>
        </IonFooter>
      </IonToolbar>

    </IonPage>
  );
};

export default Tab3;