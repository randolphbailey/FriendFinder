var express = require('express');
var router = express.Router();

router.all('/survey', function(req, res) {
    res.sendFile('/Users/randolph/Source/FriendFinder/app/public/survey.html');
});

router.get('*', function(req, res, next) {
    res.sendFile('/Users/randolph/Source/FriendFinder/app/public/home.html');
});

module.exports = router;