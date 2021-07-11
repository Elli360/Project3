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
import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";





ReactDOM.render(
  
  // <React.StrictMode>
    <App />
// </React.StrictMode>,
,
  document.getElementById("root")
);

// const App = () => {
//   const history = useHistory();
//   const restoreOriginalUri = async (_oktaAuth, originalUri) => {
//     history.replace(toRelativeUrl(originalUri, window.location.origin));
//   };

//   return (
//     <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
//       <Route path='/' exact={true} component={Home} />
//      <SecureRoute path='/Loaned' component={Loaned} />
//       <Route path='/login/callback' component={LoginCallback} />
//     </Security>
//   );
// };

// const AppWithRouterAccess = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default AppWithRouterAccess;

