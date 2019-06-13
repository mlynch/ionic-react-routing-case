import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";


export const SearchPage = () => {
  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          {/* does it make sense this page has a back button? */}
          {/* <IonBackButton defaultHref={`/`} /> */}
        </IonButtons>
        <IonTitle>Search</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Search page</h2>
    </IonContent>
  </>
  );
};