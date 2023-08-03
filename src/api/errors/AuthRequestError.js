const errorCodes = require('../data').ErrorCodes;

class AuthRequestError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.AuthRequestError.message;
        this.errorCode = errorCodes.AuthRequestError.code,
        this.errorDetails = message
    }
}
  
module.exports = AuthRequestError;