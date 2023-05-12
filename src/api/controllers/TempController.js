const express = require('express');
var router = express.Router();

const config = require('../../config');
const JSONdata= require('../data');
const services = require('../services');
const validations = require('../validations');

const statusCodes = JSONdata.StatusCodes;

const commonSerivces = services.CommonSerivces;
const commonValidations = validations.CommonValidations;

const tempService = services.TempService;


// Module routes
const routes = {
    getSuccess: '/getSuccess$',
    getError: '/getError$'
}

router.route(routes.getSuccess)
    .get(async(req, res, next) => {

    try {
        commonValidations.is_content_valid(req.query)
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
        commonValidations.is_content_valid(req.query)
        await tempService.get_error()
    } catch ( error ) {
       return next(error)
    }   

    res.locals.message = statusCodes.ok.msg;
    return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});


module.exports = router;