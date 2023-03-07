import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

import './Tab2.css';

const Tab2: React.FC = () => {
  
  const history = useHistory()
  return (
    <IonPage>
     <IonContent>
      {/* <IonItem className='img-sendmoney'> */}
      <IonImg className='img-sendmoney' src='../assets/images/Send money.png'></IonImg>
      {/* </IonItem> */}
      <IonText > <h2>Send Money</h2></IonText>
     </IonContent>
    </IonPage>
  );
};

export default Tab2;
