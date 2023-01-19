const express = require('express');

var router = express.Router();
const statusCodes = require('../../config').StatusCodes;
const tempService = require('../services').TempService 

// Module routes
const routes = {
    getTemp: '/getTemp$',

    createTemp: '/createTemp$',

    updateTemp: '/updateTemp$'
}



router.route(routes.getTemp)
.get( async (req, res) => {

    let success = req.query?.success;

    try {

        await tempService.test_actions(success)

    } catch {

        res.locals.message = statusCodes.internal_server_error.msg
        return res.status(statusCodes.internal_server_error.code).send();

    }

    res.locals.message = statusCodes.ok.msg;
    res.status(statusCodes.ok.code).send();

});


router.route(routes.createTemp)
.post(async (req, res) => {

});


router.route(routes.updateTemp)
.put(async (req, res) => {

});

module.exports = router;