const axios = require('axios')

const AuthConfig = require('../../config').AuthConfigurations;
 
const authServerURI = AuthConfig.authServerURI;
const realm = AuthConfig.realmName;
const client = AuthConfig.clientName;


module.exports = async (req, res, next) => {

    try {
        
        const token = req.headers?.token;

        if ( !token ) return next()

        const authResponse = await axios.get(`${authServerURI}/users/verify/${realm}/${client}`, {headers: {token}})

        req.auth = authResponse?.data?.data;

        return next()
    }
    catch (error) {
        return next()
    }
}
