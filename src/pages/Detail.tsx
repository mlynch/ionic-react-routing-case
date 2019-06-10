import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from "@ionic/react";


export const DetailPage = ({ history, match }: any) => {

  console.log('Detail for thing', match.params.thing);

  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/signup`} />
        </IonButtons>
        <IonTitle>Detail</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Detail</h2>
    </IonContent>
  </>
  );
};