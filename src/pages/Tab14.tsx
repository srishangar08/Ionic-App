import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';

import './Tab14.css';

const Tab14: React.FC = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
    <IonContent >
        
       <IonText ><h1 className='heading-content'>Welcome !</h1></IonText> 
       <IonLabel className="text-title-1">Full Name</IonLabel>

<IonItem fill="outline" className="outline-box">

  <IonInput type="email" ></IonInput>
</IonItem>


<IonLabel className="text-title-1" >Email Address</IonLabel>
<IonItem fill="outline" className="outline-box">
  <IonInput type="email" ></IonInput>
</IonItem>


<IonLabel className="text-title-1">Password</IonLabel>
<IonIcon name='eye' item-right></IonIcon>
<IonItem fill="outline" className="outline-box">
  <IonInput
    name="pwd"
    type={isRevealPwd ? "text" : "password"}
  ></IonInput>
  <IonIcon className='eye-icon'
    icon={isRevealPwd ? eyeOutline : eyeOffOutline}
    onClick={() => setIsRevealPwd(prevState => !prevState)}
  />
</IonItem>
<IonItem className='md-text' lines='none'>
      <IonCheckbox className='md-check' slot="start"></IonCheckbox>
      <IonLabel>I have agree to our <IonRouterLink>Terms and Conditions</IonRouterLink></IonLabel>
    </IonItem>
    </IonContent>
    <IonToolbar>
    <IonFooter>
    <IonButton onClick={() => {
              history.push('/tab15')
            }} color="primary" expand="full" shape="round">Sign Up</IonButton>
 <IonButton onClick={() => {
              history.push('/tab15')
            }} color="primary" fill='outline' expand="full" shape="round">With Phone Number</IonButton>
            <IonItem><IonText className='last-text'>Already have an Account ?            <span className='sign-up'> Sign in</span>  </IonText></IonItem> 
    </IonFooter>
   
        </IonToolbar>
   
    </IonPage>
  );
};

export default Tab14;
