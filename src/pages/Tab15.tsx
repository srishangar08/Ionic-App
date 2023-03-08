import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';

import './Tab15.css';

const Tab15: React.FC = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
   <IonContent>
    <IonText><h3 className='heading-phone'>Your Phone Number</h3></IonText>
    <IonItem lines='none' className='paragraph-number'>
        <p>Enter your mobile number to register an account</p>
    </IonItem>
    <IonItem  className="outline-box" fill='outline'>
        <IonInput  type='number' inputMode='numeric' pattern='[0-9]*' ></IonInput>
    </IonItem>
   </IonContent>
   <IonToolbar>
    <IonFooter>
    <IonButton onClick={() => {
              history.push('/tab4')
            }} color="primary" expand="full" shape="round">Send Code</IonButton>
 <IonButton onClick={() => {
              history.push('/tab4')
            }} color="primary" fill='outline' expand="full" shape="round">Send up with Email</IonButton>
    </IonFooter>
   </IonToolbar>
    </IonPage>
  );
};

export default Tab15;
