const errorCodes = require('../../data').ErrorCodes;

class FetchDocumentError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.FetchDocumentError.message;
        this.errorCode = errorCodes.FetchDocumentError.code;
        this.errorDescription = errorCodes.FetchDocumentError.description;
        this.errorDetails = message || "No details";
    }
}
  
module.exports = FetchDocumentError;