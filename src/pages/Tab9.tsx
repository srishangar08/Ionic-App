import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from 'cluster';
import { count } from 'console';
import { addCircle, home, removeCircle, banSharp, checkmarkCircle, chevronBackSharp, chevronForwardOutline, ellipsisVerticalSharp, helpCircleOutline, helpCircleSharp, mail, personCircle, personSharp, logoAmplify, keypadSharp, closeOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Tab7.css';

const Tab9: React.FC = () => {
   
    return (
        <IonPage >
          <IonToolbar>
            <IonHeader>
            <IonItem lines='none'>
                    <IonButton fill='clear'><IonIcon icon={chevronBackSharp}></IonIcon></IonButton> 
            <IonTitle class='ion-text-center'>History</IonTitle>
        
           <IonButton fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton> 
           </IonItem>
           </IonHeader>
           </IonToolbar>
           <IonContent>
            <IonItem className='row-items'>
           <IonGrid>
        <IonRow>
          <IonButton fill='clear'><IonCol>All</IonCol></IonButton>
          <IonCol>Send</IonCol>
          <IonCol>Request</IonCol>
        </IonRow>
      </IonGrid>
      </IonItem>
         
           </IonContent>
          
        
        </IonPage>
    );
};

export default Tab9;
