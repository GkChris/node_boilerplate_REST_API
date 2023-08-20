const axios = require('axios');

const AuthRequestError = require('../errors/AuthRequestError');
const RequestError = require('../errors/RequestError');

const AuthConfig = require('../../config').AuthConfigurations;
 
const authServerURI = AuthConfig.auth_server_URI;
const realm = AuthConfig.realm_name;
const client = AuthConfig.client_name;


module.exports = async (req, res, next) => {
    
    try {
        const token = req.headers?.authorization;
     
        if ( !token ) return next()
   
        const authResponse = await axios.get(`${authServerURI}/users/verify/${realm}/${client}`, {headers: {token}})
        
        if ( authResponse?.data?.error ) return next(new AuthRequestError(authResponse?.data?.error))

        req.auth = authResponse?.data?.data;

        return next()
    }
    catch (error) {
        return next(new RequestError(`Auth middleware > ${error}`))
    }
}
