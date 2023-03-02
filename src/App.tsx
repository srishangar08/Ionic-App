import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, home, heart, codeOutline, person, timerOutline, shuffle, logoDropbox, accessibility, logoBuffer } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import Tab6 from './pages/Tab6';
import Tab7 from './pages/Tab7';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} />
        <Redirect exact from="/" to="/tab1" />
        <Route path="/tab2" component={Tab2} />
        <Redirect exact from="/" to="/tab2" />
        <Route path="/tab3" component={Tab3} />
        <Redirect exact from="/" to="/tab3" />
        <Route path="/tab4" component={Tab4} />
        <Redirect exact from="/" to="/tab4" />
        <Route path="/tab5" component={Tab5} />
        <Redirect exact from="/" to="/tab5" />
        <Route path="/tab6" component={Tab6} />
        <Redirect exact from="/" to="/tab6" />
        <Route path="/tab7" component={Tab7} />
        <Redirect exact from="/" to="/tab7" />
          {/* <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/tab5">
            <Tab5 />
          </Route>
          <Route path="/tab6">
            <Tab6 />
          </Route> */}

          {/* <Route exact path="/">
            <Redirect to="/tab1" />
          </Route> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon  icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={timerOutline} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={shuffle} />
            <IonLabel>Statistic</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab7" href="/tab7">
            <IonIcon icon={logoBuffer} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={logoDropbox} />
            <IonLabel>Account</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab6" href="/tab6">
            <IonIcon icon={accessibility} />
            <IonLabel>Home-2</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>

);


export default App;
