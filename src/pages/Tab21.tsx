import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, closeOutline, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';


import './Tab21.css';

const Tab21: React.FC = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
      <IonHeader className='welcome-backpage'>

        <IonImg className='img1' src='../assets/images/Shieldpay.png'></IonImg>
        <IonRow>
          <IonCol><IonImg className='img2' src='../assets/images/Layer2.png'></IonImg></IonCol>
          <IonImg className='img3' src='../assets/images/Layer1.png'></IonImg>
        </IonRow>
      </IonHeader>
      <IonContent>
        <h3 className='welcome-backcontent'>Welcome Back!</h3>
        <IonLabel className="text-title" >Email Address</IonLabel>
        <IonItem fill="outline" className="outline-box">
          <IonInput type="email" placeholder='alexander@gmail.com'></IonInput>

        </IonItem>


        <IonLabel className="text-title">Password</IonLabel>
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
        {/* <IonItem lines='none'>Forget Password</IonItem> */}
      </IonContent>
      <IonToolbar>
        <IonFooter >
          <IonItem lines='none' />
          <IonButton onClick={() => {
            history.push('/tab15')
          }} color="primary" className='button' expand="full" shape="round" ><span style={{ color: '#ffffff' }}>Sign in</span></IonButton>
          <IonText>
            <p className='welcome-para'>Don't have an account ? <span className='welcome-span'>Sign Up</span></p>
          </IonText>
        </IonFooter>
      </IonToolbar>
    </IonPage>
  );
};


export default Tab21;
