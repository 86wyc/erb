var fs = require('fs');
fs.appendFile('myfile.txt', 'yourfile.txt', function (err) {
    if (err) throw err;
    console.log('File saved');
    return;
});