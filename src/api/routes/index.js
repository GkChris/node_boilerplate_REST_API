const express = require('express');
var router = express.Router();

router.use('/auth', require('../controllers/AuthController'));      
router.use('/temp', require('../controllers/TempController'));      


module.exports = router;