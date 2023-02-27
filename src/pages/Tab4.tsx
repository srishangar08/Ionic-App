import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, ellipsisVerticalSharp } from 'ionicons/icons';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonHeader>
          <IonItem lines='none'>

            <IonIcon icon={chevronBackSharp}></IonIcon>
            <IonTitle className='profile-title'>Change Personal Profile</IonTitle>
            <IonIcon icon={ellipsisVerticalSharp}></IonIcon>
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
          <IonButton expand="full" shape="round">Save Changes</IonButton>


        </IonFooter>


      </IonToolbar>

    </IonPage>
  );
};

export default Tab4;
