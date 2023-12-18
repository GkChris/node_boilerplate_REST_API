const errorCodes = require('../../data').ErrorCodes;

class CreateDocumentError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.CreateDocumentError.message;
        this.errorCode = errorCodes.CreateDocumentError.code;
        this.errorDescription = errorCodes.CreateDocumentError.description;
        this.errorDetails = message;
    }
}
  
module.exports = CreateDocumentError;