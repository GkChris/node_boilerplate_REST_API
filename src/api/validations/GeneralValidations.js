const mongoose = require('mongoose');
const uuid4 = require('uuid4');

const config = require('../../config');

const statusCodes = config.StatusCodes;
const customCodes = config.CustomCodes;
const validations = config.Validations;


function mongoose_ObjectId_validation(id){
    let errorMessage = '';

    if ( !id ) errorMessage = 'Missing id' ;
    else if ( !mongoose.Types.ObjectId.isValid(id) ) errorMessage = 'Invalid id'

    if ( !errorMessage ) return true;
    throw new Error(`${statusCodes.unprocessable_content.msg} | mongoose_ObjectId_validation | ${errorMessage}`) 
}

function uuid4_validation(id){
    let errorMessage = '';

    if ( !id ) errorMessage = 'Missing id' ;
    else if ( !uuid4.valid(id) ) errorMessage = 'Invalid id'

    if ( !errorMessage ) return true;
    throw new Error(`${statusCodes.unprocessable_content.msg} | uuid4_validation | ${errorMessage}`) 
}

function six_digit_code_validation(code){
    let errorMessage = '';

    if ( !code ) errorMessage = 'Missing code' ;
    else if ( typeof code != 'number' ) errorMessage = 'Invalid code type. Expecting number'
    else if ( code.toString().length != 6 ) errorMessage = 'Invalid code. Expecting a six digits code'
    
    if ( !errorMessage ) return true;
    throw new Error(`${statusCodes.unprocessable_content.msg} | six_digit_code_validation | ${errorMessage}`) 
}


module.exports = {
    mongoose_ObjectId_validation,
    uuid4_validation,
    six_digit_code_validation
}