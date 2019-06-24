import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { ActivityPage } from './Activity';
import { SearchPage } from './Search';
import { ProfilePage } from './Profile';
import { DetailPage } from './Detail';
import { people, search, person } from 'ionicons/icons';

const AppStack: React.FunctionComponent = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/tabs" to="/tabs/activity" exact={true} />
        <Route path="/tabs/:tab(activity)" component={ActivityPage} exact={true} />
        <Route path="/tabs/:tab(search)" component={SearchPage} exact={true} />
        <Route path="/tabs/:tab(profile)" component={ProfilePage} exact={true} />
        <Route path="/tabs/:tab(activity)/detail/:thing" component={DetailPage} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="activity" href="/tabs/activity">
          <IonIcon icon={people} />
          <IonLabel>Activity</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/tabs/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppStack;
