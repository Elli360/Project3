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
import { HashRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";

import Home from "pages/Home.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Loaned from "pages/Loaned.js";
import Borrowed from "pages/Borrowed.js";

//IMPORT AUTHENTICATION
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import AdminLogin from "pages/AdminLogin"

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/callback'
});
//TO UTILIZE IN PRODUCTION --> ANYTHING WRAPPED IN  <Security oktaAuth={oktaAuth}> </Security>
//ITEMS SHOULD USE THE <SecureRoute/>

//CHECK USER




// ReactDOM.render(
  
//    <Router>
//   <Security oktaAuth={oktaAuth}>
  

//     <Switch>
//     <Route path="/callback" component={LoginCallback}/>
//       <Route path="/components" render={(props) => <Index {...props} />} />

//       <SecureRoute
//         path="/login"
//         render={(props) => <AdminLogin {...props} />}
//       />

//       <SecureRoute
//         path="/home"
//         render={(props) => <Home {...props} />}
//       />
  

//       <SecureRoute
//         path="/register-page"
//         render={(props) => <RegisterPage {...props} />}
//       />
//       <SecureRoute
//         path="/loaned"
//         render={(props) => <Loaned {...props} />}
//       />
      
//       <SecureRoute
//         path="/borrowed"
//         render={(props) => <Borrowed {...props} />}
//       />
     

//       <Redirect from="/" to="/home" />

//     </Switch>
//     </Security>
    

//   </Router>,

//   document.getElementById("root")
// );

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Route path='/' exact={true} component={Home} />
      <SecureRoute path='/Loaned' component={Loaned} />
      <Route path='/login/callback' component={LoginCallback} />
    </Security>
  );
};

const AppWithRouterAccess = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouterAccesss;