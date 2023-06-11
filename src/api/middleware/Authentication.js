const axios = require('axios')

const authServerURI = 'http://localhost:38080';
const realm = 'Development';
const client = 'Main';

module.exports = async (req, res, next) => {

    try {
        
        const token = req.headers?.token;

        if ( !token ) return next()
 
        const authResponse = await axios.get(`http://localhost:38080/users/verify/${realm}/${client}`, {headers: {token}})
        
        req.auth = authResponse?.data?.data?.user;

        return next()
    }
    catch (error) {
        return next(error)
    }
}
