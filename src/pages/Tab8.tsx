import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from 'cluster';
import { count } from 'console';
import { addCircle, home, removeCircle, banSharp, checkmarkCircle, chevronBackSharp, chevronForwardOutline, ellipsisVerticalSharp, helpCircleOutline, helpCircleSharp, mail, personCircle, personSharp, logoAmplify, keypadSharp, closeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab7.css';

const Tab8: React.FC = () => {
  const [count, setCount] = useState(0);
  const history = useHistory()
  return (
    <IonPage >
      <IonToolbar>
        <IonHeader>
          <IonItem lines='none' >
            <IonButton fill='clear'  onClick={() => {
              history.push('/tab7') }}>
            <IonIcon  
             icon={chevronBackSharp}  ></IonIcon></IonButton>
            <IonTitle class='ion-text-center'>Send Money</IonTitle>
          
            <IonButton fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>  

          </IonItem>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonText class='ion-text-center' className='text'>Amount of Money</IonText>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IonButton fill='clear' color='primary' onClick={() => setCount(count - 1)}><IonIcon size='large' icon={removeCircle}></IonIcon></IonButton>
          <p>{count}</p>
          <IonButton fill='clear' color='primary' onClick={() => setCount(count + 1)}><IonIcon size='large' icon={addCircle}></IonIcon></IonButton>
        </div>
        <IonItem lines='none' >
          <IonButton fill='clear'><IonIcon size='large' icon={personCircle}></IonIcon></IonButton>

          <p>My Name</p>

          <IonButton className='button-sendmoney' fill='clear' size='large' slot='end'><IonIcon icon={keypadSharp}> </IonIcon></IonButton>
        </IonItem>
        <IonItem lines='none' />
        <IonButton expand='full' shape="round"   onClick={() => {
              history.push('/tab9') }}>Send Money</IonButton>
        <IonLabel className="text">Description</IonLabel>

        <IonItem fill="outline" className='outline-box'>
          <IonTextarea></IonTextarea>
        </IonItem>
        <IonGrid className='ion-text-center'>
          <IonRow className='ion-padding-bottom'>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
          </IonRow>
          <IonRow className='ion-padding-bottom'>
            <IonCol>4</IonCol>
            <IonCol>5</IonCol>
            <IonCol>6</IonCol>
          </IonRow>
          <IonRow className='ion-padding-bottom'>
            <IonCol>7</IonCol>
            <IonCol>8</IonCol>
            <IonCol>9</IonCol>
          </IonRow>
          <IonRow className='ion-padding-bottom'>
            <IonCol></IonCol>
            <IonCol>0</IonCol>
            <IonCol><IonIcon icon={closeOutline}></IonIcon></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab8;
