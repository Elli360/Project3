require('dotenv').config();


const ISSUER= process.env.REACT_APP_ISSUER 
const CLIENT_ID =process.env.REACT_APP_CLIENT_ID 
const REDIRECT_URI = `${window.location.origin}/login/callback`;
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
let USE_INTERACTION_CODE = true;
// if (process.env.REACT_APP_USE_INTERACTION_CODE === 'true') {
//   USE_INTERACTION_CODE = true;
// }
console.log("OKTA_TESTING_DISABLEHTTPSCHECK: " + OKTA_TESTING_DISABLEHTTPSCHECK);
console.log("USE_INTERACTION_CODE: " + USE_INTERACTION_CODE);
console.log("REDIRECT_URI:" + REDIRECT_URI);

const config= {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: REDIRECT_URI,
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
        useInteractionCode: USE_INTERACTION_CODE,
 

  
    resourceServer: {
      messagesUrl: 'https://toolshed.onrender.com/api/messages',
    },
  }
  };
  
  export default config;