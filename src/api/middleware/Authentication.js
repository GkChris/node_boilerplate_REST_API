const axios = require('axios');

const AuthRequestError = require('../errors/AuthRequestError');
const RequestError = require('../errors/RequestError');

const config = require('../../config');

const serverSecretKey = config.KeyConfig.secret_server_key;

const AuthConfig = config.AuthConfig;
 
const authServerURI = AuthConfig.auth_server_URI;
const realm = AuthConfig.realm_name;
const client = AuthConfig.client_name;


module.exports = async (req, res, next) => {
    
    try {
        const authorizationToken = req.cookies?.authorization;
        const authorizationHeader = req.headers?.authorization;

        const verifiedReceiver = authorizationHeader === serverSecretKey ? true : false;
     
        if ( !verifiedReceiver && !authorizationToken ) return next()
   
        if ( verifiedReceiver ) {
            req.verifiedReceiver = true;
            return next();
        }
   
        const authResponse = await axios.get(`${authServerURI}/users/verify/${realm}/${client}`, {headers: {authorization: authorizationToken}})
        
        if ( authResponse?.data?.error ) return next(new AuthRequestError(authResponse?.data?.error))

        req.auth = authResponse?.data?.data;

        return next()
    }
    catch (error) {
        return next(new RequestError(`Auth middleware > ${error}`))
    }
}
