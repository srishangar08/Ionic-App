import { IonAccordion, IonAccordionGroup, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { bagOutline, bagSharp, banSharp, chevronBackSharp, chevronForwardOutline, ellipsisVerticalSharp, helpCircleOutline, helpCircleSharp, mail, personSharp } from 'ionicons/icons';
import './Tab5.css';

const Tab5: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonItem lines='none'>
                    <IonIcon icon={chevronBackSharp}></IonIcon>
                    <IonTitle class="ion-text-center" className='your-profile-title'>Your Profile</IonTitle>
                    <IonIcon icon={ellipsisVerticalSharp}></IonIcon>
                </IonItem>
                <IonItem lines='none'>
                    <h1>Account</h1>

                </IonItem>
              
                <IonItem lines='none' className='body-content'>
                    <IonIcon icon={personSharp}></IonIcon>
                    <IonLabel class="ion-text-center">Change Personal Settings</IonLabel>
                    <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem lines='none' className='body-content'>
                    <IonIcon icon={mail}></IonIcon>
                    <IonLabel class="ion-text-center">Change Email</IonLabel>
                    <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem lines='none' className='body-content'>
                    <IonIcon icon={bagSharp}></IonIcon>
                    <IonLabel class="ion-text-center" >Change Password</IonLabel>
                    <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem lines='none'>
                    <h1>More Settings</h1>
                </IonItem>
                <IonItem lines='none'  className='body-content'>
                    <IonIcon icon={ bagSharp}></IonIcon>
                    <IonLabel class="ion-text-center" >Account Security</IonLabel>
                    <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem lines='none' className='body-content'>
                    <IonIcon icon={helpCircleSharp}></IonIcon>
                    <IonLabel class="ion-text-center" >Help and Privacy</IonLabel>
                    <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonItem>
            </IonToolbar>

        </IonPage>
    );
};

export default Tab5;
