import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab4.css';
// import {useNavigate} 
const Tab4: React.FC = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  // let navigate = useNavigate();
  return (
    <IonPage>
      <IonToolbar>
        <IonHeader>
          <IonItem lines='none'>

            <IonButton fill='clear'  onClick={() => {
              history.push('/tab3') }}><IonIcon icon={chevronBackSharp}></IonIcon></IonButton> 
            <IonTitle class='ion-text-center'>Editing Profile</IonTitle>
            <IonButton fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton> 
          </IonItem>
        </IonHeader>
      </IonToolbar>
      <IonContent >
        <IonLabel className="text-title-1" >First Name</IonLabel>
        <IonItem fill="outline" className='outline-box'>

          <IonInput type="text"></IonInput>

        </IonItem>
        

        <IonLabel className="text-title-2" >Last Name</IonLabel>
        <IonItem fill="outline" className='outline-box'>

          <IonInput type="text"></IonInput>
        </IonItem>


        <IonLabel className="text-title-3">Email</IonLabel>

        <IonItem fill="outline" className='outline-box'>
          <IonInput type='email'></IonInput>
        </IonItem>
        <IonLabel className="text-title-3">Mobile</IonLabel>

        <IonItem fill="outline" className='outline-box'>
          <IonInput type='tel'></IonInput>
        </IonItem>

        <IonLabel className="text-title-4">Address</IonLabel>

        <IonItem fill="outline" className='outline-box'>
          <IonTextarea></IonTextarea>
        </IonItem>
      </IonContent>
      <IonToolbar>
        <IonFooter>
          <IonItem lines='none' />
          <IonButton color="primary" expand="full" shape="round" onClick={() => {
            history.push('/tab5')
          }}>Update</IonButton>


        </IonFooter>


      </IonToolbar>

    </IonPage>
  );
};

export default Tab4;
