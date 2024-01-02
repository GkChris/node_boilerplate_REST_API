const errorCodes = require('../../data').ErrorCodes;

class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.ForbiddenError.message;
        this.errorCode = errorCodes.ForbiddenError.code;
        this.errorDescription = errorCodes.ForbiddenError.description;
        this.errorDetails = message || "No details";
    }
}
  
module.exports = ForbiddenError;