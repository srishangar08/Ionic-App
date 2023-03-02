import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp } from 'ionicons/icons';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonHeader>
      <IonItem lines='none'>
  
  <IonButton fill='clear'><IonIcon icon={chevronBackSharp}></IonIcon></IonButton>
    <IonTitle class='ion-text-center' className='profile-title'>Help Center</IonTitle>
   <IonButton fill='clear'> <IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>
    </IonItem>
    </IonHeader>
    </IonToolbar>
      <IonContent>
        
          <IonItem lines='none' className='search-bar'>
            <IonSearchbar placeholder='Search anything here'></IonSearchbar>
          </IonItem>
          
    {/* <IonCard mode='ios'> */}
          <IonAccordionGroup className='total-form'>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>Level Account</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>About Notification</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>Business Account</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                
              </div>
            </IonAccordion>
         
            <IonAccordion value="four">
              <IonItem slot="header" color="light">
                <IonLabel>Send Gift</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                
              </div>
            </IonAccordion>
            <IonAccordion value="five">
              <IonItem slot="header" color="light">
                <IonLabel>Request Gift</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                
              </div>
            </IonAccordion>
            <IonAccordion value="six">
              <IonItem slot="header" color="light">
                <IonLabel>How Premium Member</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                
              </div>
            </IonAccordion>
          </IonAccordionGroup>
          {/* </IonCard> */}
      </IonContent>
      
    </IonPage>
  );
};

export default Tab2;
