import { IonIcon } from '@ionic/react';
import { arrowBack, arrowBackCircle, arrowBackCircleOutline, arrowBackCircleSharp, arrowBackOutline, arrowBackSharp, arrowDownOutline } from 'ionicons/icons';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div>
       <p>Current Mail</p>
        </div>
    </div>
  );
};

export default ExploreContainer;
