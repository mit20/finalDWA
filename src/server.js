var express = require('express');
var body_parser = require('body-parser');
var app = express();

// Config
var port = 3000;

//Route using the prefix of api
app.use('/api', require('../routes/api.js')(express));

//Test server
var server = app.listen(port, function() {
   console.log('Server Active on', port); 
});

module.exports = server;