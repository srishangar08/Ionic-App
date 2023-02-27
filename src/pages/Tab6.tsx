import { IonAccordion, IonAccordionGroup, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { bagOutline, bagSharp, banSharp, checkmarkCircle, chevronBackSharp, chevronForwardOutline, ellipsisVerticalSharp, helpCircleOutline, helpCircleSharp, mail, personCircle, personSharp } from 'ionicons/icons';
import './Tab6.css';

const Tab6: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonHeader>

                </IonHeader>
            </IonToolbar>
            <IonContent class="ion-text-center" >
                <IonImg   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mqc-IDNtIqXe2iU0gT050zBGq8QO74h4LDoKiemrlA&s' ></IonImg>
                {/* <IonIcon className='icon-size' icon={checkmarkCircle}  size="large"></IonIcon> */}
                <IonItem lines='none'>
                    <h1>Successfully</h1>
                </IonItem>
                <IonImg src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'></IonImg>
                    {/* <IonIcon icon={personCircle} size="large"> </IonIcon> */}

                
                <IonItem lines='none'>Male</IonItem>
                <IonItem lines='none'>1543 5486 5686</IonItem>
                <IonItem lines='none'>Amount fee <IonItem lines='none' slot='end'>$ 345</IonItem></IonItem>
                <IonItem>Admin fee<IonItem lines='none' slot='end'>$ 50</IonItem></IonItem>
                <IonItem>Total<IonItem slot='end'>$ 395</IonItem></IonItem>
            </IonContent>
       <IonToolbar>
        <IonFooter>
            <IonButton expand="full" shape="round">Back to Home</IonButton>
        </IonFooter>
       </IonToolbar>



        </IonPage>
    );
};

export default Tab6;
