var express = require('express');
var cookieSession = require('cookie-session')
var app = express()
app.use(cookieSession({
name: 'cookies',
keys: ['key1']
}));
app.get('/', function (req, res) {
req.session.views = (req.session.views || 0) + 1;
res.send(req.session.views + ' views');
});
app.listen(8888);

// 5k23tDGE040Rmp39_7E2081TtAQ
// eyJ2aWV3cyI6MTR9