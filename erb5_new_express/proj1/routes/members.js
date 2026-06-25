var express = require('express');
var router = express.Router();

/* GET members listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/testing', function (req, res, next) {
  res.send('testing layer');
});

router.get('/register', function (req, res, next) {
  res.send(' Register?? ');
});


module.exports = router;

