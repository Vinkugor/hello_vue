var express = require('express');
var app = express();
var path  = require('path');

app.use('/', express.static(path.join(__dirname, './')));
var port = 8080;
app.listen(port, function () {
    console.info(' Api Server listening on port :'+port);
});