import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { bagOutline, bagSharp, banSharp, checkmarkCircle, chevronBackSharp, chevronForwardOutline, ellipsisVerticalSharp, helpCircleOutline, helpCircleSharp, mail, personCircle, personSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './Tab6.css';

const Tab6: React.FC = () => {
    
  const history = useHistory()
    return (
        <IonPage>
            <IonToolbar>
                <IonHeader>

                </IonHeader>
            </IonToolbar>
            <IonContent class="ion-text-center" >
                {/* <IonImg  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mqc-IDNtIqXe2iU0gT050zBGq8QO74h4LDoKiemrlA&s' ></IonImg> */}
                <IonIcon className='icon-size' icon={checkmarkCircle} size="large"></IonIcon>
                <IonItem lines='none'>
                    <h1 className='success'>Successfully</h1>
                </IonItem>
                {/* <IonImg  src='https://www.pngitem.com/pimgs/m/391-3918613_personal-service-platform-person-icon-circle-png-transparent.png   '></IonImg> */}
                



             
                <IonCard mode='ios'>
                <IonIcon className='icon-size-two' icon={personCircle} size="large"> </IonIcon>

                <IonItem lines='none' className=''>
                    <h1 className='success'>Male</h1></IonItem>
                <IonItem lines='none'>
                    <h5 className='success'>1543 5486 5686 </h5></IonItem>

                    <IonGrid>
                        <IonRow> 
                            <IonCol size="6"  className='name-left'>Amount fee</IonCol>
                            <IonCol size="6">$ 345</IonCol>

                            <IonCol size="6" className='name-left'>Admin fee</IonCol>
                            <IonCol size="6">$ 3100</IonCol>

                            <IonCol size="6" className='name-left'>Total fee</IonCol>
                            <IonCol size="6">$ 345</IonCol>

                        </IonRow>
                    </IonGrid>
                </IonCard>


            </IonContent>
            <IonToolbar>
                <IonFooter>
                    <IonItem lines='none' />
                    <IonButton expand="full" shape="round"  onClick={() => {
              history.push('/tab7') }}>Back to Home</IonButton>
                </IonFooter>
            </IonToolbar>



        </IonPage>
    );
};

export default Tab6;
