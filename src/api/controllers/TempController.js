const express = require('express');
var router = express.Router();

const statusCodes = require('../../config').StatusCodes;
const tempService = require('../services').TempService 


// Module routes
const routes = {
    getSuccess: '/getSuccess$',
    getError: '/getError$'
}

router.route(routes.getSuccess)
.get( async (req, res) => {

    try {

        await tempService.get_success()
        
    } catch ( error ) {
      
        next(error)
    
    }

    res.locals.message = statusCodes.ok.msg;
    return res.status(statusCodes.ok.code).send()

});


router.route(routes.getError)
.get( async (req, res, next) => {

    try {

        await tempService.get_error()
        
    } catch ( error ) {
       next(error)
    }   

    res.locals.message = statusCodes.ok.msg;
    return res.status(statusCodes.ok.code).send()

});


module.exports = router;