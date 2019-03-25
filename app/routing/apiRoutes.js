var express = require('express');
var router = express.Router();
var friends = require('../data/friends');

router.get('/api/friends', function(req, res) {
    res.send('friends api get request');
});

router.post('/api/friends', function(req, res) {
    res.send('friends api post request');
});

module.exports = router;