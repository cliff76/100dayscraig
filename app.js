var express = require('express');
var app = express();
var port = process.env.NODE_ENV === "production" ? process.env.port : 8080;

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});