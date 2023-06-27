const express = require('express');
var router = express.Router();

const config = require('../../config');
const JSONdata= require('../data');
const services = require('../services');
const validations = require('../validations');

const statusCodes = JSONdata.StatusCodes;

const CommonServices = services.CommonServices;
const CommonValidations = validations.CommonValidations;

const AuthService = services.AuthService;


// Module routes
const routes = {
    testAuth: '/testAuth',
    register: '/register',
    login: '/login',
    logout: 'logout',
}



router.route(routes.testAuth)
    .get(async(req, res, next) => {

        const auth = req.auth;
        const requiredPermissions = ['admin_panel_access', 'read_basic'];

        try {
            
            AuthService.isLogged(auth);
            
            // {user, session}, ['permission_code_1', 'permission_code_2']
            AuthService.hasPermissions(auth, requiredPermissions)


        } catch ( error ) {
            return next(error)
        }   

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});


router.route(routes.register)
    .post(async(req, res, next) => {

        const payload = req.body?.data;

        try {
            CommonValidations.is_content_missing({payload})
           
            var user = await AuthService.register(payload);

        } catch ( error ) {
            return next(error);
        }

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({
            code: statusCodes.ok.code, 
            message: statusCodes.ok.msg,
            data: {user},
        });
});


router.route(routes.login)
    .get(async(req, res, next) => {

        const auth = req.auth;

        try {
           
        } catch ( error ) {
            return next(error)
        }   

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});



router.route(routes.logout)
    .get(async(req, res, next) => {

        const auth = req.auth;

        try {
           
        } catch ( error ) {
            return next(error)
        }   

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});



module.exports = router;