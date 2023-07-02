const axios = require('axios');

const FunctionalityError = require('../errors/FunctionalityError');
const GatewayError = require('../errors/GatewayError');

const config = require('../../config'); 

const authServerURI = config.AuthConfigurations.authServerURI; 


function register(payload){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/register`, {data: payload});
            
            return resolve(authResponse?.data?.data);

        } catch ( error ) {
            return reject(new GatewayError(error));
        }

    })
}



function login(payload){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/login`, {data: payload});
            
            return resolve(authResponse?.data?.data);

        } catch ( error ) {
            return reject(new GatewayError(error));
        }

    })
}



function logout(userId, token){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/logout/${userId}`, {headers: {token}});
            
            return resolve(authResponse?.data?.data);

        } catch ( error ) {
            return reject(new GatewayError(error));
        }

    })
}



module.exports = {
    register,
    login,
    logout,
}