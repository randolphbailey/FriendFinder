var express = require('express');
var router = express.Router();
var friends = require('../data/friends');

router.get('*', function(req, res) {
    res.send('friends api get request');
});

router.post('*', function(req, res) {
    res.send('friends api post request');
});

module.exports = router;