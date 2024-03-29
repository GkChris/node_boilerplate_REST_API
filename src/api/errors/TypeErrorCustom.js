const errorCodes = require('../../data').ErrorCodes;

class TypeErrorCustom extends Error {
    constructor(message) {
        super(message);
        this.errorMessage = errorCodes.TypeErrorCustom.message;
        this.errorCode = errorCodes.TypeErrorCustom.code;
        this.errorDescription = errorCodes.TypeErrorCustom.description;
        this.errorDetails = message || "No details";
    }
}
  
module.exports = TypeErrorCustom;