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
  IonButtons,
  IonBackButton
} from "@ionic/react";

export const LoginPage = ({ history, match, goBack }: any) => {
  const goTo = (path: string) => {
    history.push(path);
  }

  return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton goBack={goBack} defaultHref={`/`} />
        </IonButtons>
        <IonTitle>Login</IonTitle>
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
          <IonButton padding={true} expand="block" type="submit">Log in</IonButton>
        </IonList>
      </form>
      <div>
        <a href="#" onClick={(e) => { e.preventDefault(); goTo('/signup')}}>Create account instead</a>
        <a href="#" onClick={(e) => { e.preventDefault(); goTo('/reset-password')}}>Forgot your password?</a>
      </div>
    </IonContent>
  </>
  );
}