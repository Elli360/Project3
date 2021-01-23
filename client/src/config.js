require('dotenv').config(); // this is important!

const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER = process.env.ISSUER

export default {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:8082/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: false,
};
