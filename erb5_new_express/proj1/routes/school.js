var express = require('express');
var router = express.Router();

var teacher = [
    { 'name': 'Alex', 'tel': '91234567' },
    { 'name': 'David', 'tel': '92345678' },
    { 'name': 'Heather', 'tel': '61234567' }];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("歡迎來到學校API!");
});
router.get('/teacher', function (req, res, next) {
    res.send(Object.keys(teacher[0]));
});
router.get('/teacher/name/:qname', function (req, res, next) {
    for (let i = 0; i < 3; i++) {
        if (req.params.qname == teacher[i].name) {
            res.send(teacher[i].tel);
            break;
        }
    }
    // for (let i of teacher) {
    //   if (i.name == req.params.qname) {
    //     res.send(i.tel);
    //     break;
    //   }
    // }
    res.sendStatus(404);
});
router.get('/teacher/tel/:qtel', function (req, res, next) {
    for (let i of teacher) {
        if (i.tel == req.params.qtel) {
            res.send(i.name);
            break;
        }
    }
    res.sendStatus(404);
});

module.exports = router;