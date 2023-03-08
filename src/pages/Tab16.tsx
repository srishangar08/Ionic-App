import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';

import './Tab16.css';

const Tab16: React.FC = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
   <IonContent>
    <IonText><h3 className='heading-phone'>Account Created</h3></IonText>
    <IonItem lines='none' className='paragraph-number'>
        <p>Your account has been created successfully press continue to continue using the app</p>
    </IonItem>
   <IonImg className='accountcreated-img' src='../assets/images/Account Created.png'></IonImg>
   </IonContent>
   
   <IonToolbar>
    <IonFooter>
    <IonButton onClick={() => {
              history.push('/tab4')
            }} color="primary" expand="full" shape="round">Continue</IonButton>
            <IonItem lines='none'>
                <p className='account-page'>By clicking continue, you agree to our</p> </IonItem>
                <IonItem lines='none'><IonText  className='account-terms'><p>Terms and Conditions</p></IonText></IonItem>
           
            
 
    </IonFooter>
   </IonToolbar>
    </IonPage>
  );
};

export default Tab16;
