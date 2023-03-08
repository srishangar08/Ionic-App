import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

import './Tab2.css';

const Tab13: React.FC = () => {
  
  const history = useHistory()
  return (
    <IonPage>
    <IonContent>
      <IonImg className='send-image ' src='../assets/images/Hand.png'></IonImg>
      <IonText className='heading-content'><h3 className='fs'>Easy to Use</h3></IonText>
      <IonItem className='sendmoney-para' lines='none'>
        <p>Very easy to use and easy to understand for those of you who are beginners</p>
      </IonItem>
    </IonContent>
    <IonToolbar>
        <IonFooter  >
        <IonButton onClick={() => {
              history.push('/tab14')
            }} color="primary" expand="full" shape="round">Create Account</IonButton>
 <IonButton onClick={() => {
              history.push('/tab14')
            }} color="primary" fill='outline' expand="full" shape="round">Login Now</IonButton>
            {/* <IonButton color="primary" fill="outline" expand="full" shape="round">Log out</IonButton> */}
           
        </IonFooter>
      </IonToolbar>
    </IonPage>
  );
};

export default Tab13;
