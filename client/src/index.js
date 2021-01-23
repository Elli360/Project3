/*!
=========================================================
* BLK Design System React - v1.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";

import Home from "pages/Home.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Loaned from "pages/Loaned.js";
import Borrowed from "pages/Borrowed.js";


//IMPORT AUTHENTICATION
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import AdminLogin from "pages/AdminLogin"
import Profile from "pages/Profile"

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-6188860.okta.com/oauth2/default',
  clientId: '0oa3yqzblodYlFC705d6',
  redirectUri: window.location.origin + '/callback'
});
//TO UTILIZE IN PRODUCTION --> ANYTHING WRAPPED IN  <Security oktaAuth={oktaAuth}> </Security>
//ITEMS SHOULD USE THE <SecureRoute/>
//END OKTA COMPONENTS


ReactDOM.render(
  <BrowserRouter>
  <Security oktaAuth={oktaAuth}>

    <Switch>
    <Route path="/callback" component={LoginCallback}/>
      <Route path="/components" render={(props) => <Index {...props} />} />

      <Route
        path="/admin-login"
        render={(props) => <AdminLogin {...props} />}
      />

      <Route
        path="/home"
        render={(props) => <Home {...props} />}
      />
      <SecureRoute
        path="/user-profile"
        render={(props) => <Profile {...props} />}
      />

      <SecureRoute
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <SecureRoute
        path="/loaned"
        render={(props) => <Loaned {...props} />}
      />
      <Route
        path="/borrowed"
        render={(props) => <Borrowed {...props} />}
      />

      <Redirect from="/" to="/home" />

    </Switch>
    </Security>

  </BrowserRouter>,

  document.getElementById("root")
);