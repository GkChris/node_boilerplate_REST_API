const express = require('express');
var router = express.Router();

const UnauthorizedError = require('../errors/UnauthorizedError');

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
    logout: '/logout',
    verify: '/verify',
}



router.route(routes.testAuth)
    .get(async(req, res, next) => {

        const auth = req.auth;
   
        const requiredPermissions = ['admin_panel_access', 'read_basic'];

        try {
            
            AuthService.isLogged(auth); // Check if user is logged
            
            // [Sampes Data] -> {user, session}, ['permission_code_1', 'permission_code_2']
            AuthService.hasPermissions(auth, requiredPermissions) // Check if user is logged and has access to required permissions for this actio

            AuthService.createCookie(res, auth);

        } catch ( error ) {
            return next(error)
        }   

        return res.status(statusCodes.ok.code).json({code: statusCodes.ok.code, message: statusCodes.ok.msg})
});


router.route(routes.register)
    .post(async(req, res, next) => {

        const payload = req.body?.data;

        try {
            CommonValidations.is_content_missing({payload})
           
            var { user, options, token } = await AuthService.register(payload);

            AuthService.createCookie(res, {options, token});

        } catch ( error ) {
            return next(error);
        }

        return res.status(statusCodes.ok.code).json({
            code: statusCodes.ok.code, 
            message: statusCodes.ok.msg,
            data: {user},
        });
});


router.route(routes.login)
    .post(async(req, res, next) => {

        const payload = req.body?.data;

        try {
            CommonValidations.is_content_missing({payload})
           
            const { found, validated, user, options, token } = await AuthService.login(payload);

            if ( user ) AuthService.createCookie(res, {options, token});

            var repsponseData = { found, validated, user }
            
        } catch ( error ) {
            return next(error)
        }   

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({
            code: statusCodes.ok.code, 
            message: statusCodes.ok.msg,
            data: repsponseData,
        })
});



router.route(routes.logout)
    .post(async(req, res, next) => {
        
        const auth = req.auth;
        const userId = auth?.user?._id;
        const token = auth?.token;

        try {
            /* Business Logic */
            if ( auth ) await AuthService.logout(userId, token);

            res.clearCookie('authorization');
           
        } catch ( error ) {
            return next(error)
        }   

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({
            code: statusCodes.ok.code, 
            message: statusCodes.ok.msg,
        })
});


router.route(routes.verify)
    .get(async(req, res, next) => {
        
        const auth = req.auth;

        if ( !auth ) {
            return next(new UnauthorizedError('Unauthorized'))
        }

        res.locals.message = statusCodes.ok.msg;
        return res.status(statusCodes.ok.code).json({
            code: statusCodes.ok.code, 
            message: statusCodes.ok.msg,
        })
});



module.exports = router;