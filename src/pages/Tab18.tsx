import { IonAccordion, IonAccordionGroup, IonBackButton, IonButton, IonCard, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDownSharp, chevronForwardSharp, ellipsisVerticalSharp, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';

import './Tab18.css';

const Tab18: React.FC = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <h3 className='changepassword'>Change Password</h3>
                <IonItem lines='none' fill='outline' className="outline-box" >
                    <IonInput
                        name="pwd"
                        type={isRevealPwd ? "text" : "password"}
                    ></IonInput>
                    <IonIcon className='eye-icon'
                        icon={isRevealPwd ? eyeOutline : eyeOffOutline}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    ></IonIcon>
                </IonItem>
                <IonItem lines='none' fill='outline' className="outline-box" >
                    <IonInput
                      placeholder='Re-Enter Password'  name="pwd"
                        type={isRevealPwd ? "text" : "password"}
                    ></IonInput></IonItem>
            </IonContent>
            <IonToolbar>
    <IonFooter>
    <IonButton onClick={() => {
              history.push('/tab4')
            }} color="primary" expand="full" shape="round">Save</IonButton>
 <IonButton onClick={() => {
              history.push('/tab4')
            }} color="primary" fill='outline' expand="full" shape="round">Cancel</IonButton>
    </IonFooter>
   </IonToolbar>


        </IonPage>
    );
};

export default Tab18;
