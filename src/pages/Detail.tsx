import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons } from "@ionic/react";


export const DetailPage = ({ history, match, goBack }: any) => {
  const goTo = (path: string) => {
    history.push(path);
  }

  console.log('Detail for thing', match.params.thing);

  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton goBack={goBack} defaultHref={`/`} />
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