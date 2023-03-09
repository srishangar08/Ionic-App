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
import { ellipse, square, triangle, home, heart, codeOutline, person, timerOutline, shuffle, logoDropbox, accessibility, logoBuffer, logoApple, logoAmazon } from 'ionicons/icons';
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
import Tab8 from './pages/Tab8';
import Tab9 from './pages/Tab9';
import Tab10 from './pages/Tab10';
import Tab11 from './pages/Tab11';
import Tab12 from './pages/Tab12';
import Tab13 from './pages/Tab13';
import Tab0 from './pages/Tab0';
import Tab14 from './pages/Tab14';
import Tab15 from './pages/Tab15';
import Tab16 from './pages/Tab16';
import Tab17 from './pages/Tab17';
import Tab18 from './pages/Tab18';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab0" component={Tab0} />
          <Redirect exact from="/" to="/tab0" />
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
          <Route path="/tab8" component={Tab8} />
          <Redirect exact from="/" to="/tab8" />
          <Route path="/tab9" component={Tab9} />
          <Redirect exact from="/" to="/tab9" />
          <Route path="/tab10" component={Tab10} />
          <Redirect exact from="/" to="/tab10" />
          <Route path="/tab11" component={Tab11} />
          <Redirect exact from="/" to="/tab11" />
          <Route path="/tab12" component={Tab12} />
          <Redirect exact from="/" to="/tab12" />
          <Route path="/tab13" component={Tab13} />
          <Redirect exact from="/" to="/tab13" />
          <Route path="/tab14" component={Tab14} />
          <Redirect exact from="/" to="/tab14" />
          <Route path="/tab15" component={Tab15} />
          <Redirect exact from="/" to="/tab15" />
          <Route path="/tab16" component={Tab16} />
          <Redirect exact from="/" to="/tab16" />
          <Route path="/tab17" component={Tab17} />
          <Redirect exact from="/" to="/tab17" />
          <Route path="/tab18" component={Tab18} />
          <Redirect exact from="/" to="/tab18" />

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
          {/* <IonTabButton tab="tab0" href="/tab0">
            <IonIcon  icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab1" href="/tab1">
            <IonIcon  icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={timerOutline} />
            <IonLabel>Skip page 1</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab12" href="/tab12">
            <IonIcon icon={shuffle} />
            <IonLabel>Skip page 2</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab13" href="/tab13">
            <IonIcon icon={person} />
            <IonLabel>Skip page 3</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab14" href="/tab14">
            <IonIcon icon={square} />
            <IonLabel>Welcome</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={timerOutline} />
            <IonLabel>Skip page 1</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="tab15" href="/tab15">
            <IonIcon icon={timerOutline} />
            <IonLabel>Skip page 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab16" href="/tab16">
            <IonIcon icon={timerOutline} />
            <IonLabel>Skip page 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab17" href="/tab17">
            <IonIcon icon={timerOutline} />
            <IonLabel>Skip page 1</IonLabel>
          </IonTabButton>

          {/* <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab7" href="/tab7">
            <IonIcon icon={logoBuffer} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton> */}

          {/* <IonTabButton tab="tab9" href="/tab9">
            <IonIcon icon={logoAmazon} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab8" href="/tab8">
            <IonIcon icon={timerOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab10" href="/tab10">
            <IonIcon icon={logoBuffer} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={logoDropbox} />
            <IonLabel>Account</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab6" href="/tab6">
            <IonIcon icon={accessibility} />
            <IonLabel>Home-2</IonLabel>
          </IonTabButton> */}
          {/* <IonTabButton tab="tab11" href="/tab11">
            <IonIcon icon={logoBuffer} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>

);


export default App;
