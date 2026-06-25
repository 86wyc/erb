var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(`a= ${req.query.a}, b= ${req.query.b}`);
  let a = req.query.a;
  let b = req.query.b;

  if (a > 0 & b > 0) {
    res.send("We are querying [" + a + ", " + b + "]");
  } else {
    res.send("Hello, is it...");
  }
});

module.exports = router;
