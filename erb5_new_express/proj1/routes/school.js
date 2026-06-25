var express = require('express');
var validator = require('validator');
var router = express.Router();

var teacher = [
  { 'name': 'Alex', 'tel': '91234567' },
  { 'name': 'David', 'tel': '92345678' },
  { 'name': 'Heather', 'tel': '61234567' }
];

router.post('/teacher/staff', function (req, res, next) {
  let fname = req.body['fname'];
  let lname = req.body['lname'];
  let age = req.body['age'];
  let email = req.body['email'];  // Changed from position to email

  // Check if all fields exist
  if (!fname || !lname || !age || !email) {  // Changed position to email
    return res.send('Please provide all fields: fname, lname, age, email');  // Changed position to email
  }

  // Validate first name (letters only)
  if (!validator.isAlpha(fname)) {
    return res.send('Please enter a first name that ONLY contains letters!');
  }

  // Validate last name (letters only)
  if (!validator.isAlpha(lname)) {
    return res.send('Please enter a last name that ONLY contains letters!');
  }

  // Validate age (numbers only)
  if (!validator.isNumeric(age)) {
    return res.send('Please enter an age that ONLY contains numbers!');
  }

  // Validate email
  if (!validator.isEmail(email)) {
    return res.send('Please enter a valid email address!');
  }

  res.send('My name is ' + fname + ' ' + lname + ', my age is ' + age + ', and my email is ' + email);  // Changed position to email
});

module.exports = router;