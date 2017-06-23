var express = require('express');

var app = express();

app.use(express.static('public'));


// routes
app.use('/', require('./routes/index'));
//require('./routes/api/')(app);

module.exports = app;