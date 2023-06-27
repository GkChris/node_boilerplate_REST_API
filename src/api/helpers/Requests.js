const axios = require('axios');

const FunctionalityError = require('../errors/FunctionalityError');
const GatewayError = require('../errors/GatewayError');

const config = require('../../config'); 

const authServerURI = config.AuthConfigurations.authServerURI; 


function register(payload){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/create`, {data: payload});
            
            return resolve(authResponse?.data?.data?.user);

        } catch ( error ) {
            return reject(new GatewayError(error));
        }

    })
}



module.exports = {
    register,
}