import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

import './Tab2.css';

const Tab12: React.FC = () => {
  
  const history = useHistory()
  return (
    <IonPage>
    <IonContent>
      <IonImg className='send-image ' src='../assets/images/Request money.png'></IonImg>
      <IonText className='heading-content'><h3 className='fs'>Request Money</h3></IonText>
      <IonItem className='sendmoney-para' lines='none'>
        <p>You can request money to friends or family to send as much money as you want</p>
      </IonItem>
    </IonContent>
    <IonToolbar>
        <IonFooter >
          <IonItem lines='none' />
          <IonButton  onClick={() => {
              history.push('/tab13') }} color="primary" className='button' expand="full" shape="round" ><span style={{ color: '#ffffff' }}>Next Step</span></IonButton>
 <IonRow class='ion-justify-content-center'>
            <IonItem lines='none' >
              <IonButton fill='clear'><IonRouterLink className='skip-button' >Skip this step</IonRouterLink></IonButton>
            </IonItem>
          </IonRow>
        </IonFooter>
      </IonToolbar>
    </IonPage>
  );
};

export default Tab12;
