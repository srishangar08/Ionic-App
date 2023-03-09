import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';

import './Tab17.css';

const Tab17: React.FC = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
   <IonContent>
   <IonText className='heading-content'><h3 className='fs'>Forgot Password</h3></IonText>
      <IonImg className='forgotpassword-image ' src='../assets/images/ForgotPassword.png'></IonImg>
      
      <IonItem className='forgotpassword' lines='none'>
        <p>Enter your registered email below to receive password reset instruction</p>
      </IonItem>
      
      <IonLabel className='email-forgot'>Email Address</IonLabel>
      <IonItem fill='outline' className="outline-box">
      <IonInput type='email' placeholder='alexander@gmail.com' ></IonInput>
      </IonItem>
    </IonContent>
    <IonToolbar>
        <IonFooter>
            <IonButton color="primary"  expand="full" shape="round">Send Verification Coder</IonButton>
        </IonFooter>
    </IonToolbar>
    </IonPage>
  );
};

export default Tab17;
