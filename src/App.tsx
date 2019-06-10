import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonPage } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AppStack from './pages/AppStack';
import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';

const App: React.SFC = () => {
  return (
    <Router>
      <IonPage>
        <Route path="/" component={AppStack} />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/signup" component={SignupPage} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/signup"/>}/>
      </IonPage>
    </Router>
  )
}

export default App;