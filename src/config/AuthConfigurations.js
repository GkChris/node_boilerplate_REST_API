require('dotenv');

module.exports = {
    authServerURI: process.env.AUTH_SERVER_URI,
    realmName: process.env.REALM_NAME,
    clientName: process.env.CLIENT_NAME,
    useAuthentication: process.env.USE_AUTHENTICATION
};


