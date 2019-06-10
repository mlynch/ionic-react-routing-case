import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route } from 'react-router';
import { ActivityPage } from './Activity';
import { SearchPage } from './Search';
import { ProfilePage } from './Profile';
import { DetailPage } from './Detail';

const AppStack: React.SFC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(activity)" component={ActivityPage} exact={true} />
        <Route path="/:tab(search)" component={SearchPage} exact={true} />
        <Route path="/:tab(profile)" component={ProfilePage} exact={true} />
        <Route path="/:tab(detail)/:thing" component={DetailPage} exact={true} />
        <Route path="/:username" component={ProfilePage} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="activity" href="/activity">
          <IonIcon name="bolt" />
          <IonLabel>Activity</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search">
          <IonIcon name="search" />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon name="person" />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default AppStack;