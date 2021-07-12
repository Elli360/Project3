
import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  
  <React.StrictMode>
  <Router>
    <App />
    </Router>
</React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();


