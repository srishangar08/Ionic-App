import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

import './Tab3.css';

const Tab3: React.FC = () => {

  const history = useHistory()
  return (
    <IonPage>
      <IonToolbar>

        <IonHeader >
          <IonItem lines='none'>
            <IonButton fill='clear' onClick={() => {
              history.push('/tab2')
            }}><IonIcon icon={chevronBackSharp}></IonIcon></IonButton>
            <IonTitle class='ion-text-center'>Account</IonTitle>
            <IonButton fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>
          </IonItem>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonItem >
          <IonLabel className='outline-box'>Hide Account</IonLabel>
          <IonToggle slot='end'></IonToggle>
        </IonItem>
        <IonItem lines='none' className='paragraph' >
          <p >Make sure you can remember you password, as you'll need it to sign back in</p>

        </IonItem >
        <IonText className='body-content'>
          <p>and ******@gmail.com</p></IonText>

      </IonContent>
      <IonToolbar>
        <IonFooter>
          <IonItem lines='none' />
          <IonButton onClick={() => {
            history.push('/tab4')
          }} color="primary" expand="full" shape="round">Save Changes</IonButton>


          <IonButton color="primary" fill="outline" expand="full" shape="round">Log out</IonButton>


          <IonRow class='ion-justify-content-center'>
            <IonItem lines='none' >
              <IonButton fill='clear'><IonRouterLink className='delete-button' > Delete Account</IonRouterLink></IonButton>
            </IonItem>
          </IonRow>
        </IonFooter>
      </IonToolbar>

    </IonPage>
  );
};

export default Tab3;
