import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonPage, IonRouterOutlet, IonReactRouter, IonApp } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AppStack from './pages/AppStack';
import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';
import ResetPasswordPage from './pages/ResetPassword';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <IonApp>
        <IonReactRouter>
          <IonPage>
            <IonRouterOutlet>
              <Route path="/login" component={LoginPage} exact={true} />
              <Route path="/signup" component={SignupPage} exact={true} />
              <Route path="/reset-password" component={ResetPasswordPage} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/signup" />} />
            </IonRouterOutlet>
            <Route path="/tabs" component={AppStack} />
          </IonPage>
        </IonReactRouter>
      </IonApp>
    </Router>
  );
};

export default App;
