import React from "react";
import {Route, Switch, Redirect, useHistory } from "react-router-dom";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Home from "pages/Home.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import Loaned from "pages/Loaned.js";
import Borrowed from "pages/Borrowed.js";
// import Login from "pages/Login.js";
import CustomLoginComponent from './Login.jsx';
import Welcome from "pages/Welcome.js";

//IMPORT AUTHENTICATION
import { OktaAuth } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import config from './config';
// import AdminLogin from "pages/AdminLogin"
// require("dotenv")
//TO UTILIZE IN PRODUCTION --> ANYTHING WRAPPED IN  <Security oktaAuth={oktaAuth}> </Security>
//ITEMS SHOULD USE THE <SecureRoute/>

const ISSUER= process.env.REACT_APP_ISSUER 
const CLIENT_ID =process.env.REACT_APP_CLIENT_ID 
const REDIRECT_URI = `${window.location.origin}/login/callback`;
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
let USE_INTERACTION_CODE = false;
// if (process.env.REACT_APP_USE_INTERACTION_CODE === 'true') {
//   USE_INTERACTION_CODE = true;
// }

const config= {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: REDIRECT_URI,
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
        useInteractionCode: USE_INTERACTION_CODE,
      }
  };
  

//   const oktaAuth = new OktaAuth(config);
const oktaAuth = new OktaAuth(config.oidc);

function App() {
    // require("dotenv");
    // require("dotenv").config();
    // const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    //   history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    // };
    const history = useHistory();
    const onAuthRequired = () => {

        // Redirect to the /login page that has a CustomLoginComponent
        history.push('/login');
    };
    return (
        //moving Router to index.js cleared logout and history.push issue
            <Security
                onAuthRequired={onAuthRequired}
                oktaAuth={oktaAuth}
            >

                <Switch>
                {/* <Route path="/" exact component={Welcome} /> */}
        <Route path="/" exact component={Welcome} >{console.log(`CHECK THIS: CLIENTID=${process.env.REACT_APP_CLIENT_ID}`)}</Route>
                    <Route path="/login/callback" component={LoginCallback} />
                    <Route path="/login" component={CustomLoginComponent} />
                    <SecureRoute
                        path="/home"
                        exact={false}
                        render={(props) => <Home {...props} />}
                    />
                    <SecureRoute
                        path="/loaned"
                        exact={false}
                        render={(props) => <Loaned {...props} />}
                    />
                    <SecureRoute
                        path="/borrowed"
                        exact={false}
                        render={(props) => <Borrowed {...props} />}
                    />
                    {/* <Redirect from="/" to="/home" /> */}

                </Switch>
            </Security>


       
    )
}

export { App, config}
//export default App