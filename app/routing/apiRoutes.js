var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
    res.send('friends api get request');
});

router.post('*', function(req, res, next) {
    res.send('friends api post request');
});

module.exports = router;