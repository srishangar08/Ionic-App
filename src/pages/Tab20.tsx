import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, closeOutline, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';


import './Tab20.css';

const Tab20: React.FC = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
        <h3 className='verifyaccount'>Verify Account</h3>
        <p className='para-verification'>Enter 4 digit code we have sent to <span className='para-span'>+6285788773880</span></p>
        <p className='para-verification-2'>Haven't received verification code?</p>
       <IonItem>
        <IonInput type='number' class='enter-code' maxlength={1} size={1} ></IonInput>
       </IonItem>
       <IonItem>
          <IonText className='resend-code'>Resend Code</IonText>
       </IonItem>
      </IonContent>
<IonToolbar>
 <IonFooter>
 <IonButton onClick={() => {
              history.push('/tab4')
            }} color="primary" expand="full" shape="round">Verify Now</IonButton>
</IonFooter>
</IonToolbar>
    </IonPage>
  );
};


export default Tab20;
