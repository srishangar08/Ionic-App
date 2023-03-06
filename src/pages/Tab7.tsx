import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from 'cluster';
import { count } from 'console';
import { addCircle, home, removeCircle, banSharp, checkmarkCircle, chevronBackSharp, chevronForwardOutline, ellipsisVerticalSharp, helpCircleOutline, helpCircleSharp, mail, personCircle, personSharp, logoAmplify, keypadSharp } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab7.css';

const Tab7: React.FC = () => {
    const [count, setCount] = useState(0);
    
  const history = useHistory()
    return (
        <IonPage className='ion-justify-content-center' >


            <IonToolbar>
                <IonHeader>

                    <IonItem lines='none'>

                        <IonButton fill='clear' onClick={() => {
              history.push('/tab6') }}><IonIcon icon={chevronBackSharp}></IonIcon></IonButton>
                        <IonTitle class='ion-text-center'>Send Money</IonTitle>
                        <IonButton fill='clear'><IonIcon icon={ellipsisVerticalSharp}></IonIcon></IonButton>
                    </IonItem>
                </IonHeader>
            </IonToolbar>



            <IonContent >
                <IonText className='text'>Set the nominal send</IonText>
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
                <IonGrid >
                    <IonRow   >
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@50 </IonButton></IonCol>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@100</IonButton></IonCol>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@150</IonButton></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@200 </IonButton></IonCol>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@250</IonButton></IonCol>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@300</IonButton></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@350 </IonButton></IonCol>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@400</IonButton></IonCol>
                        <IonCol size='4'><IonButton color='secondary' className='button-rows'>@450</IonButton></IonCol>
                    </IonRow>

                </IonGrid>
                <IonText className='text'>Sent to</IonText>
                <IonItem lines='none'>
                    <IonIcon size='large' icon={personCircle}></IonIcon>
                    <IonText className='text'>My Name</IonText>
                    <IonButton fill='clear' size='large' slot='end'><IonIcon icon={keypadSharp}> </IonIcon></IonButton>
                </IonItem>
                <IonToolbar>
                    <IonFooter>
                        <IonItem lines='none' />
                        <IonButton expand='full' shape="round"  onClick={() => {
              history.push('/tab1') }}>Back to Home</IonButton>
                    </IonFooter>
                </IonToolbar>

            </IonContent>
        </IonPage>
    );
};

export default Tab7;
