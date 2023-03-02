import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, ellipsisVerticalSharp } from 'ionicons/icons';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>

        <IonHeader >
          <IonItem lines='none'>
           <IonButton fill='clear'><IonIcon icon={chevronBackSharp}></IonIcon></IonButton> 
            <IonTitle class='ion-text-center'>Account</IonTitle>
           {/* 
           <IonButton fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>  */}
          </IonItem>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonItem >
          <IonLabel className='outline-box'>Hide Account</IonLabel>
          <IonToggle  slot='end'></IonToggle>
        </IonItem>
        <IonItem lines='none' >
          <p className='paragraph'>Make sure you can remember you password, as you'll need it to sign back in</p>
          
        </IonItem >
    <IonItem  lines='none' > 
    <p className='body-content'>and ******@gmail.com</p></IonItem>
         
      </IonContent>
      <IonToolbar>
        <IonFooter>
          <IonItem lines='none'/>
            <IonButton color="primary"  expand="full" shape="round">Save Changes</IonButton>
            
          
            <IonButton color="primary" fill="outline" expand="full" shape="round">Log out</IonButton>

            
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
