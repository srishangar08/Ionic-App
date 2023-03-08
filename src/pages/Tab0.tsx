import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

import './Tab0.css';

const Tab0: React.FC = () => {
  
  const history = useHistory()
  return (
    <IonPage className='front-page'>
         <IonImg className='front-page-img'  src='../assets/images/First page.png'></IonImg>
         
    {/* <IonContent>
      <IonImg className='send-image ' src='../assets/images/Send money.png'></IonImg>
      <IonText className='heading-content'><h3 className='fs'>Send Money</h3></IonText>
      <IonItem className='sendmoney-para' lines='none'>
        <p>Send money easily and with one click everything will be sent every time you make a transaction</p>
      </IonItem>
    </IonContent>
    <IonToolbar>
        <IonFooter >
          <IonItem lines='none' />
          <IonButton  onClick={() => {
              history.push('/tab12') }} color="primary" className='button' expand="full" shape="round" ><span style={{ color: '#ffffff' }}>Next Step</span></IonButton>
 <IonRow class='ion-justify-content-center'>
            <IonItem lines='none' >
              <IonButton fill='clear'><IonRouterLink className='skip-button' >Skip this step</IonRouterLink></IonButton>
            </IonItem>
          </IonRow>
        </IonFooter>
      </IonToolbar> */}
    </IonPage>
  );
};

export default Tab0;
