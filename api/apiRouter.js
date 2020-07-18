var express = require('express');
var router = express.Router();
var contactRouter = require('./contact');

router.use('/contact', contactRouter);

module.exports = router;