const config = require('../../config');
const helpers = require('../helpers');

const requests = helpers.Requests;
const statusCodes = config.StatusCodes
const customCodes = config.CustomCodes;


function get_success(){
    return new Promise((resolve, reject) => {
        resolve(true)
        return
    })
}


function get_error(){
    return new Promise((resolve, reject) => {
        reject(new Error(`${statusCodes.internal_server_error.msg} | ${'This is a temp promise that is meant to fail'}`))
        return
    })
}


module.exports = {
    get_success,
    get_error
}

