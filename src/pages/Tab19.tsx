import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, closeOutline, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';


import './Tab19.css';

const Tab19: React.FC = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
         <h3 className='password-header'>Create password</h3>
          <IonRow className='enter-data'>
            <IonCol> <IonInput type='text' className='form-control' maxlength={1} placeholder='0' ></IonInput></IonCol>
            <IonCol><IonInput type='text' className='form-control' maxlength={1} placeholder='0'></IonInput></IonCol>
            <IonCol><IonInput type='text' className='form-control' maxlength={1} placeholder='0'></IonInput></IonCol>
            <IonCol><IonInput type='text' className='form-control' maxlength={1} placeholder='0'></IonInput></IonCol>
          </IonRow>
         {/* <table>
    <tr>
      <td>
        <IonInput type="text" class="otp" pattern="[0-9]{6}" maxlength={1} size={1} >
        </IonInput>
      </td>
      <td>
        <IonInput type="text"  class="otp" pattern="[0-9]{6}" maxlength={1} size={} (keyup)="next(otp3)">
        </IonInput>
      </td>
      <td>
        <IonInput type="text"  class="otp" pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="next(otp4)">
        </IonInput
      </td>
      <td>
        <IonInput type="text"  class="otp" pattern="[0-9]{6}" maxlength="1" size="1">
        </IonInput
      </td>
    </tr>
  </table> */}
          
          </IonContent>
          <IonToolbar>
          <IonFooter>
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
            <IonCol></IonCol>
            {/* <IonCol><IonIcon icon={closeOutline}></IonIcon></IonCol> */}
          </IonRow>
        </IonGrid>
        </IonFooter>
        </IonToolbar> 

    </IonPage>
  );
};

export default Tab19;
