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

//ADD OKTA
import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';


//OKTA CONFIG OBJECT
const config = {
  clientId: '0oa42h5f7fiKOVaP25d6',
  issuer: 'https://dev-6188860.okta.comDashboard/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

//CALLBACK ROUTE TO BE USED BY OKTA
const CALLBACK_PATH = '/login/callback';

//ANOTHER OKTA CONST
const oktaAuth = new OktaAuth(config);



ReactDOM.render(
  <BrowserRouter>
  <Security>
    <Switch>
      <Route path={CALLBACK_PATH} />
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route

        path="/home"
        render={(props) => <Home {...props} />}

      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route

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
