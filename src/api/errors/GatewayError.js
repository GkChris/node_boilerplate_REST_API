const statusCodes = require('../data').StatusCodes;

class GatewayError extends Error {
    constructor(message) {
        super(message);
        this.code = 'ERR_BAD_GATEWAY';
        this.statusCode = statusCodes.bad_gateway.code,
        this.statusMessage = statusCodes.bad_gateway.msg;
        this.message = message
    }
}
  
module.exports = GatewayError;