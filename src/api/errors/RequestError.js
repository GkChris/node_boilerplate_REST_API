const customCodes = require('../data').CustomCodes;

class RequestError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = customCodes.RequestError.message;
        this.errorCode = customCodes.RequestError.code,
        this.errorDetails = message
    }
}
  
module.exports = RequestError;