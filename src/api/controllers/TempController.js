const express = require('express');
var router = express.Router();

// Module routes
const routes = {
    getTemp: '/getTemp$',

    createTemp: '/createTemp$'
}



router.route(routes.getTemp)
.get( async (req, res) => {

    if (req.query?.fail == 1) {

        res.locals.message = `Something went wrong`;

        return res.status(400).send();

    }

    res.locals.message = `Something went right`;

    res.status(200).send();

});


router.route(routes.createTemp)
.post(async (req, res) => {


    res.locals.message = `Something went right`;

    res.status(200).send();
});

module.exports = router;