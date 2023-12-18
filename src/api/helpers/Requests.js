const axios = require('axios');

const FunctionalityError = require('../errors/FunctionalityError');
const GatewayError = require('../errors/GatewayError');
const AuthRequestError = require('../errors/AuthRequestError');

const config = require('../../config'); 

const authServerURI = config.AuthConfig.auth_server_URI; 


function register(payload){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/register`, {data: payload});
            
            if ( authResponse?.data?.error ) return reject(new AuthRequestError(authResponse?.data?.error?.details))

            return resolve(authResponse?.data?.data);

        } catch ( error ) {
            return reject(new GatewayError(error?.message));
        }

    })
}



function login(payload){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/login`, {data: payload});

            if ( authResponse?.data?.error ) return reject(new AuthRequestError(authResponse?.data?.error?.details))
            
            return resolve(authResponse?.data?.data);

        } catch ( error ) {
            return reject(new GatewayError(error?.message));
        }

    })
}



function logout(userId, token){
    return new Promise(async(resolve, reject) => {
       
        try {

            const authResponse = await axios.post(`${authServerURI}/users/logout/${userId}`, {}, {headers: {authorization: token}});

            if ( authResponse?.data?.error ) return reject(new AuthRequestError(authResponse?.data?.error?.details))
            
            return resolve(authResponse?.data?.data);

        } catch ( error ) {
            return reject(new GatewayError(error?.message));
        }

    })
}



module.exports = {
    register,
    login,
    logout,
}