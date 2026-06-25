var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('hi');
    res.send('Hello from users!');
});

module.exports = router;