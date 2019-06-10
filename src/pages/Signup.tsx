import React from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonBackButton,
  IonButtons
} from "@ionic/react";

export const SignupPage = ({ history }: any) => {
  const goTo = (path: string) => {
    history.push(path);
  }

  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>Signup</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <form onSubmit={e => goTo('/activity')} action="post">
        <IonList>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput  type="email" />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput type="password" />
          </IonItem>
          <IonButton expand="block" type="submit">Sign up</IonButton>
        </IonList>
      </form>
      <div>
        <a href="/login" onClick={(e) => { e.preventDefault(); goTo('/login')}}>Log in instead</a>
      </div>
    </IonContent>
  </>
  );
}