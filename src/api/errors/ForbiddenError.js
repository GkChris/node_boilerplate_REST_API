const statusCodes = require('../data').StatusCodes;

class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.code = 'ERR_FORBIDDEN';
        this.statusCode = statusCodes.forbidden.code,
        this.statusMessage = statusCodes.forbidden.msg;
        this.message = message
    }
}
  
module.exports = ForbiddenError;