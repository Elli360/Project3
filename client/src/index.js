
import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import "assets/css/nucleo-icons.css";
// import "assets/scss/blk-design-system-react.scss?v=1.2.0";
// import "assets/demo/demo.css";





ReactDOM.render(
  
  // <React.StrictMode>
    <App />
// </React.StrictMode>,
,
  document.getElementById("root")
);
registerServiceWorker();
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

