const statusCodes = require('../../config').StatusCodes

module.exports = (err, req, res, next) => {

    res.locals.message = err.message
   
    switch (true) {
        case err.message.includes(statusCodes.bad_request.msg): {
            return res.status(statusCodes.bad_request.code).json({ message: statusCodes.bad_request.msg });
        }
        case err.message.includes(statusCodes.unauthorized.msg): {
            return res.status(statusCodes.unauthorized.code).json({ message: statusCodes.unauthorized.msg });
        }
        case err.message.includes(statusCodes.forbidden.msg): {
            return res.status(statusCodes.forbidden.code).json({ message: statusCodes.forbidden.msg });
        }
        case err.message.includes(statusCodes.not_acceptable.msg): {
            return res.status(statusCodes.not_acceptable.code).json({ message: statusCodes.not_acceptable.msg });
        }
        case err.message.includes(statusCodes.conflict.msg): {
            return res.status(statusCodes.conflict.code).json({ message: statusCodes.conflict.msg });
        }
        case err.message.includes(statusCodes.unsupported_media_type.msg): {
            return res.status(statusCodes.unsupported_media_type.code).json({ message: statusCodes.unsupported_media_type.msg });
        }
        case err.message.includes(statusCodes.unprocessable_entity.msg): {
            return res.status(statusCodes.unprocessable_entity.code).json({ message: statusCodes.unprocessable_entity.msg });
        }
        case err.message.includes(statusCodes.internal_server_error.msg): {
            return res.status(statusCodes.internal_server_error.code).json({ message: statusCodes.internal_server_error.msg });
        }
        case err.message.includes(statusCodes.bad_gateway.msg): {
            return res.status(statusCodes.bad_gateway.code).json({ message: statusCodes.bad_gateway.msg });
        }
        
    }

    return res.status(statusCodes.internal_server_error.code.json({message: 'Something went wrong'}))


}

