const mongoose = require('mongoose');

const ModifyDocumentError = require('../errors/ModifyDocumentError');
const ValidationFailureError = require('../errors/ValidationError');
const FetchDocumentError = require('../errors/FetchDocumentError');
const ReferenceDocumentError = require('../errors/ReferenceDocumentError');
const FunctionalityError = require('../errors/FunctionalityError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ForbiddenError = require('../errors/ForbiddenError');

const config = require('../../config');
const JSONdata = require('../data');
const helpers = require('../helpers');
const utils = require('../utils');
const validations = require('../validations');


const models = config.DatabaseConfigurations;
const requests = helpers.Requests;
const statusCodes = JSONdata.StatusCodes
const customCodes = JSONdata.CustomCodes;


function isLogged(auth){

    if ( auth?.user ) return true;
    else throw new UnauthorizedError('Action require authorization')

}


// {user, session}, ['permission_code_1', 'permission_code_2']
function hasPermissions(auth, requiredPermissions){
    

    if ( !auth?.user ) throw new UnauthorizedError('Action require authorization')

    const userPermissions = auth?.user?.roleId?.permissions?.map((permission) => {return permission?.code});
    let missing_permissions = [];

    for ( const permission of requiredPermissions ) {
        if ( !userPermissions?.includes(permission) ) missing_permissions.push(permission);
    }

    if ( missing_permissions.length > 0 ) throw new ForbiddenError(`Missing permissions: ${missing_permissions}`)

    return;

}


function createCookie(res, auth){
    const token = auth.token;
    const options = auth.options;

    res.cookie('authorization', token, {
        // httpOnly: true,
        // secure: false,
        // sameSite: 'strict',
        // other cookie options (e.g., maxAge, domain, path) if needed
        maxAge: options?.maxAge,
    });
    return;
}


function register(payload){
    return new Promise(async(resolve, reject) => {

        try {

            const {user, session, options, token} = await requests.register(payload);
      
            return resolve({user, session, options, token});

        } catch ( error ) {
            return reject(error)
        }

    })
}


module.exports = {
    isLogged,
    hasPermissions,
    createCookie,
    register,
}

