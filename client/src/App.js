import React from "react";
import {Route, Switch, useHistory } from "react-router-dom";
// import {Route, Switch, Redirect, useHistory } from "react-router-dom";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";
// import { createHashHistory } from 'history'

import Home from "pages/Home.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import Loaned from "pages/Loaned.js";
import Borrowed from "pages/Borrowed.js";
// import Login from "pages/Login.js";
import CustomLoginComponent from "./Login.jsx";
import Welcome from "pages/Welcome.js";
import Profile from "./Profile.jsx";
//IMPORT AUTHENTICATION
import { OktaAuth } from '@okta/okta-auth-js';
import { Security, SecureRoute } from '@okta/okta-react';
import config from './config';

// import AdminLogin from "pages/AdminLogin"
// require("dotenv")
//TO UTILIZE IN PRODUCTION --> 1)Remember to change redirect settings on okta.com when deploying. 
// 2)HashRouter only works in deployed environment.Change to BrowserRouter in development environment. 


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
{/* {console.log(config.oidc.userContext.userinfo.name)} */}
                <Switch>
                {/* <Route path="/" exact component={Welcome} /> */}
        <Route path="/" exact component={Welcome} >
            {/* {console.log(`CHECK THIS: CLIENTID=${process.env.REACT_APP_CLIENT_ID}`)}  */}
            </Route>
                    {/* <Route path="/login/callback" component={LoginCallback} /> */}
                    <Route path="/login" component={CustomLoginComponent} />
                    <SecureRoute
                        path="/home"
                        exact={true}
                        render={(props) => <Home {...props} />}
                    />
                    <SecureRoute
                        path="/loaned"
                        exact={true}
                        render={(props) => <Loaned {...props} />}
                    />
                    <SecureRoute
                        path="/borrowed"
                        exact={true}
                        render={(props) => <Borrowed {...props} />}
                    />
                     <SecureRoute
                        path="/profile"
                        exact={true}
                        render={(props) => <Profile {...props} />}
                    />
                    {/* <Redirect from="/" to="/home" /> */}

                </Switch>
            </Security>


       
    )
}

// export { App, config}
export default App