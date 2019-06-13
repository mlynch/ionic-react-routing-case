import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";


export const ProfilePage = () => {
  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          {/* does it make sense this page has a back button? */}
          {/* <IonBackButton defaultHref={`/`} /> */}
        </IonButtons>
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Profile page</h2>
    </IonContent>
  </>
  );
};