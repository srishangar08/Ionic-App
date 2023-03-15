import { IonBackButton, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, bag, chevronBackSharp, ellipsisVertical, ellipsisVerticalSharp, eyeOffOutline, eyeOutline, home, logoAndroid, swapVertical } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab1.css';

const Tab1: React.FC = () => {

  const history = useHistory()
  // const []
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <IonPage >

      <IonToolbar>
        <IonHeader>
          <IonItem lines='none'>

            <IonButton fill='clear'><IonIcon icon={chevronBackSharp}></IonIcon></IonButton>
            <IonTitle class='ion-text-center'>Change Email</IonTitle>
            <IonButton onClick={() => {
            history.push('/tab5')
          }} fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>
          </IonItem>
        </IonHeader>
      </IonToolbar>

      <IonContent>
        <IonLabel className="text-title">Current email</IonLabel>

        <IonItem fill="outline" className="outline-box">

          <IonInput type="email" ></IonInput>
        </IonItem>


        <IonLabel className="text-title" >New email</IonLabel>
        <IonItem fill="outline" className="outline-box">
          <IonInput type="email" ></IonInput>
        </IonItem>


        <IonLabel className="text-title">Enter your email Password</IonLabel>
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
      </IonContent>

      <IonToolbar>
        <IonFooter >
          <IonItem lines='none' />
          <IonButton onClick={() => {
            history.push('/tab2')
          }} color="primary" className='button' expand="full" shape="round" ><span style={{ color: '#ffffff' }}>Save Email</span></IonButton>

        </IonFooter>
      </IonToolbar>

    </IonPage>
  );
};

export default Tab1;
