const errorCodes = require('../../data').ErrorCodes;

class FunctionalityError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.FunctionalityError.message;
        this.errorCode = errorCodes.FunctionalityError.code;
        this.errorDescription = errorCodes.FunctionalityError.description;
        this.errorDetails = message || "No details";
    }
}
  
module.exports = FunctionalityError;