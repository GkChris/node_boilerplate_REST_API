const mongoose = require('mongoose');

const FunctionalityError = require('../errors/FunctionalityError');

const config = require('../../config');
const JSONdata = require('../../data');
const helpers = require('../helpers');
const utils = require('../utils');

const models = config.DatabaseConfig;
const requests = helpers.Requests;
const statusCodes = JSONdata.StatusCodes
const errorCodes = JSONdata.ErrorCodes;


function get_success(){
    return new Promise((resolve, reject) => {
        resolve(true)
        return
    })
}


function get_error(){
    return new Promise((resolve, reject) => {
        reject(new FunctionalityError('Get Error'))
        return
    })
}


module.exports = {
    get_success,
    get_error
}

