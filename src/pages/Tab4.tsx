import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import './Tab4.css';
// import {useNavigate} 
const Tab4: React.FC = () => {
  // let navigate = useNavigate();
  return (
    <IonPage>
      <IonToolbar>
        <IonHeader>
          <IonItem lines='none'>

          <IonButton fill='clear'><IonIcon icon={chevronBackSharp}></IonIcon></IonButton>
            <IonTitle class='ion-text-center' className='profile-title'>Change Personal Profile</IonTitle>
            <IonButton fill='clear'> <IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>
          </IonItem>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonLabel className="text-title" >Name</IonLabel>
        <IonItem fill="outline" className='outline-box'>

          <IonInput type="text"></IonInput>
        </IonItem>

        <IonLabel className="text-title" >Birthday</IonLabel>
        <IonItem fill="outline" className='outline-box'>

          <IonInput type="text"></IonInput>
        </IonItem>


        <IonLabel className="text-title">Address</IonLabel>

        <IonItem fill="outline" className='outline-box'>
          <IonInput type='text'></IonInput>
        </IonItem>


        <IonLabel className="text-title">Description</IonLabel>

        <IonItem fill="outline" className='outline-box'>
          <IonTextarea></IonTextarea>
        </IonItem>
      </IonContent>
      <IonToolbar>
        <IonFooter>
        <IonItem lines='none'/>
          <IonButton color="primary"  expand="full" shape="round">Save Changes</IonButton>


        </IonFooter>


      </IonToolbar>

    </IonPage>
  );
};

export default Tab4;
