const express = require('express');
const router = express.Router();
var validator = require('validator');

// In-memory Data Store
let students = [
  { id: 1, name: "Alice", age: 20, gender: "Female" },
  { id: 2, name: "Bob", age: 22, gender: "Male" }
];

/* READ: Get all students */
router.get('/stdlist', (req, res) => {
  res.render('stdlist', { students: students });
});
/* CREATE: Add a new student */
router.post('/create', (req, res) => {
  const { name, age, gender } = req.body;//destructuring
  console.log(`name: ${req.body.name}, age: ${req.body.age}, gender: ${req.body.gender}`);//reminder
  if (!(validator.isAlpha(name))) {
    res.send('Please enter a name that ONLY with letters!');
  }

  const newStudent = {
    //id: students.length + 1,
    id: Math.max(...students.map(s => s.id)) + 1,
    name,
    age: parseInt(age),
    gender
  };
  students.push(newStudent);
  res.redirect('/student/stdlist');
});

/* UPDATE: Render update page and handle logic */
router.get('/update/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.render('update', { student: student });
});

router.post('/update/:id', (req, res) => {
  const { name, age, gender } = req.body;
  if (!(validator.isAlpha(name))) {
    res.send('Please enter a name that ONLY with letters!');
  }

  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students[index] = { id: parseInt(req.params.id), name, age: parseInt(age), gender };
  }
  res.redirect('/student/stdlist');
});

/* DELETE: Remove student */
router.get('/delete/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.redirect('/student/stdlist');
});

/* CREATE: Add a new student */
// router.get('/create', (req, res) => {// if method='PUT'/method='DELETE' which will force to router.get..
//   res.send("/create...");
// });
module.exports = router;
