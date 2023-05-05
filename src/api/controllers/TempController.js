const express = require('express');
var router = express.Router();

const config = require('../../config');
const services = require('../services');
const validations = require('../validations');

const statusCodes = config.StatusCodes;
const customCodes = config.CustomCodes
const tempService = services.TempService
const generalValidations = validations.GeneralValidations;


// Module routes
const routes = {
    getSuccess: '/getSuccess$',
    getError: '/getError$'
}

router.route(routes.getSuccess)
    .get(async(req, res, next) => {

    try {
        generalValidations.is_content_valid(req.query)
        await tempService.get_success()
    } catch ( error ) {
        return next(error)
    }

    res.locals.message = statusCodes.ok.msg;
    return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});


router.route(routes.getError)
    .get(async(req, res, next) => {

    try {
        generalValidations.is_content_valid(req.query)
        await tempService.get_error()
    } catch ( error ) {
       return next(error)
    }   

    res.locals.message = statusCodes.ok.msg;
    return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});


module.exports = router;