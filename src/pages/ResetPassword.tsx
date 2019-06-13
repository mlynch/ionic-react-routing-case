import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/react';

interface ResetPasswordPageProps {}

const ResetPasswordPage: React.SFC<ResetPasswordPageProps> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>Reset your password, yo</IonLabel>
      </IonContent>
    </>
  );
};

export default ResetPasswordPage;