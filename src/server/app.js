var express = require('express');
var app = express();
var port = process.env.NODE_ENV === "production" ? process.env.port : 8080;


app.use(express.static('build/server/www'));
app.get('/100', function (req, res) {
    res.send('100 days of learning... (Server side content.)')
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});