const customCodes = require('../data').CustomCodes;

class AuthRequestError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = customCodes.AuthRequestError.message;
        this.errorCode = customCodes.AuthRequestError.code,
        this.errorDetails = message
    }
}
  
module.exports = AuthRequestError;