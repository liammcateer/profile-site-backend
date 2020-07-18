var express = require('express');
var router = express.Router();
var contactService = require('../services/contactService')

router.post('/', async function(req, res){
    contactService.sendEmail(req.body)
        .then(function() {
            res.status(200).send('Message Sent')
        })
        .catch(function(error) {
            console.log(error)
            res.status(400).send(error)
        })
})

module.exports = router;