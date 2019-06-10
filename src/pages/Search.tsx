import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";


export const SearchPage = ({ history, goBack }: any) => {
  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton goBack={goBack} defaultHref={`/`} />
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