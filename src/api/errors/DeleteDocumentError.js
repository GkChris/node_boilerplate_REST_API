const errorCodes = require('../../data').ErrorCodes;

class DeleteDocumentError extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.DeleteDocumentError.message;
        this.errorCode = errorCodes.DeleteDocumentError.code;
        this.errorDescription = errorCodes.DeleteDocumentError.description;
        this.errorDetails = message;
    }
}
  
module.exports = DeleteDocumentError;