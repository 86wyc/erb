var express = require('express');
var router = express.Router();

var teacher = [
    { 'name': 'Alex', 'tel': '91234567' },
    { 'name': 'David', 'tel': '92345678' },
    { 'name': 'Heather', 'tel': '61234567' }];


router.get('/teacher/tel/:qtel', function (req, res, next) {

    const qtel = req.params.qtel;
    const result = teacher.find(t => t.tel === qtel);

    if (result) {
        res.send(result.name);
    } else {
        res.status(404).send({ error: "Teacher not found" })
    }
})

module.exports = router;

//change check