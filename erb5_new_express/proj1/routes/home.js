var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('realHome');
});

router.get('/home', function (req, res, next) {
    res.send('nestHome');
});

module.exports = router;
