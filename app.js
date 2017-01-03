var express = require('express');
var app = express();
var port = process.env.NODE_ENV === "production" ? process.env.port : 8080;

app.get('/100', function (req, res) {
    res.send('Server-side generated content.');
});

app.use(express.static('www'));

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});