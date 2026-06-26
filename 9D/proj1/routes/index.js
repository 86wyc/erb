var express = require('express');
var router = express.Router();

let users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" }
];

const userinfo = {username:'Peter', password:'123'};


router.get('/', function(req, res) {
  //res.render('index', { title: 'Express', testing: 'testingxxxx' });
  res.render('index', {users});
});
/* GET home page. */
router.get('/search', (req, res) => {
    //const { name, age } = req.query;
    let name = req.query.name;
    let age = req.query.age;
    console.log('Received GET request with data:', name, age);
    if (!name) {
        return res.send(`
            <h2>Error: Name is required!</h2>
            <a href="/">← Go Back</a>
        `);
    }
    res.send(`
        <h2>Hello ${name}!</h2>
        ${age ? `<p>You are ${age} years old.</p>` : ''}
        <p>Data received via <strong>GET</strong> method.</p>
        <p>Query string: <code>${req.url}</code></p>
        <hr>
        <p>Good for search, filters, pagination (not for passwords or sensitive data)</p>
    `);
});
router.post('/submit', (req, res) => {
    let username = req.body.username;
    let age = req.body.age;
    let email = req.body.email;

    console.log('Received POST data:', username, age, email);
    if (!username) {
        return res.send('<h2>Error: Name is required!</h2><a href="/">← Go Back</a>');
    }
    res.send(`
        <h2>Thank you, ${username}!</h2>
        ${age ? `<p>Age: ${age}</p>` : ''}
        ${email ? `<p>Email: ${email}</p>` : ''}
        <p>Data received via <strong>POST</strong> method.</p>
        <hr>
    `);
});

router.post('/users', (req, res) => {
    //const { name, age, email } = req.body;
    const name = req.body.name ;
    const age = req.body.age ;
    const email = req.body.email ;

    const newUser = {
        id: users.length + 1,
        name,
        age: parseInt(age),
        email
    };
    users.push(newUser);
    res.redirect('/');
});

router.post('/users/update', (req, res) => {
    //const { id, name, age, email } = req.body;
    const id = req.body.id ;
    const name = req.body.name ;
    const age = req.body.age ;
    const email = req.body.email ;
    const userId = parseInt(id);
    const user = users.find(u => u.id === userId);
    if (user) {
        user.name = name;
        user.age = parseInt(age);
        user.email = email;
    }
    res.redirect('/');
});

// DELETE - Delete user (using POST with _method trick)
router.post('/users/delete', (req, res) => {
    //const { id } = req.body;
    const id = req.body.id;
    const userId = parseInt(id);
    users = users.filter(u => u.id !== userId);
    res.redirect('/');
});



router.get('/login', function(req, res) {
  res.render('login');
});
router.post('/auth', function(req, res) {
  console.log(req.body.name, req.body.password);
  if (req.body.name==userinfo.username & req.body.password==userinfo.password){
    return res.redirect("/dashboard");
  } else {
    res.send('username or password is invalid');}
});
router.get('/dashboard', function(req, res) {
  res.render('dashboard', { username: userinfo.username});
});
module.exports = router;
