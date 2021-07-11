import React from "react";
// import { HashRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

// import Index from "views/Index.js";

import Home from "pages/Home.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import Loaned from "pages/Loaned.js";
import Borrowed from "pages/Borrowed.js";
// import Login from "pages/Login.js";
import CustomLoginComponent from './Login';

//IMPORT AUTHENTICATION
import { OktaAuth } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config';
// import AdminLogin from "pages/AdminLogin"

// const oktaAuth = new OktaAuth({
//   // issuer: process.env.REACT_APP_OKTA_ISSUER,
//   // clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
//   issuer: 'https://dev-11624122.okta.com/oauth2/default',
//   clientId: '0oa16k2i3m8hQDTpK5d7',
//   // redirectUri: window.location.origin + '/login/callback'
//   redirectUri: window.location.origin +'/implicit/callback',
// //   redirectUri: 'http://localhost:3000/loaned',
// });

// const oktaAuth = new OktaAuth({
//   issuer: 'https://dev-6188860.okta.com/oauth2/default',
//   clientId: '0oa3yqzblodYlFC705d6',
//   // redirectUri: window.location.origin + '/callback'
//   redirectUri: window.location.origin +'/callback/home'
// });
//TO UTILIZE IN PRODUCTION --> ANYTHING WRAPPED IN  <Security oktaAuth={oktaAuth}> </Security>
//ITEMS SHOULD USE THE <SecureRoute/>

//CHECK USER
// const history = useHistory();
// const restoreOriginalUri = async (_oktaAuth, originalUri) => {
//   history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
// };
const oktaAuth = new OktaAuth(config.oidc);

function App() {
  
    // const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    //   history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    // };
    const history = useHistory();
const onAuthRequired= () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push('/login');
  };
    return (
        <Router>
            <Security
                // issuer='https://dev-11624122.okta.com/oauth2/default'
                // client_id='0oa16k2i3m8hQDTpK5d7'
                // redirec_uri={window.location.origin + '/implicit/callback'}
                onAuthRequired={onAuthRequired}
                oktaAuth={oktaAuth}
            >

                {/* <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}> */}
                <Switch>
                    {/* <Route 
                    path='/login'
                    render={() => <Login baseUrl='https://dev-11624122.okta.com'/>}
                    /> */}
                    {/* <Route 
                    path='implicit/callback'
                    component={LoginCallback}
                    /> */}
                    <Route path="/login/callback" component={LoginCallback} />
                    <Route path="/login" component={CustomLoginComponent} />

                    <Route
                        path="/"
                        exact={true}
                        render={(props) => <Home {...props} />}
                    />


                    <Route
                        path="/loaned"
                        exact={true}
                        render={(props) => <Loaned {...props} />}
                    />

                    <SecureRoute
                        path="/borrowed"
                        exact={true}
                        render={(props) => <Borrowed {...props} />}
                    />

                    {/* <Redirect from="/" to="/home" /> */}

                </Switch>
            </Security>


        </Router>
    )
}

export default App
