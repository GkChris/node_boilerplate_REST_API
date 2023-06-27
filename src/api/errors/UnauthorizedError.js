const statusCodes = require('../data').StatusCodes;

class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.code = 'ERR_UNAUTHORIZED';
        this.statusCode = statusCodes.unauthorized.code,
        this.statusMessage = statusCodes.unauthorized.msg;
        this.message = message
    }
}
  
module.exports = UnauthorizedError;