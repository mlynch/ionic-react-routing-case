import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";


export const ActivityPage = ({ history }: any) => {
  const goTo = (path: string) => {
    history.push(path);
  }

  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Activity</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Activity</h2>
      <IonButton onClick={() => goTo('/activity/detail/thing')}>Go to detail</IonButton>
    </IonContent>
  </>
  );
};