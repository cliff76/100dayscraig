var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.NODE_ENV === "production" ? process.env.port : 8080;

var mockData = [{"id":"8","text":""},{"id":"9","text":"f creating the Hello, World! " +
"example was a celebration of you getting your feet wet with React, creating the quintessential " +
"Todo List app is a celebration of you approaching React mastery! In this tutorial, we are going " +
"to tie together a lot of the concepts and techniques you've learned to create something tha"},
    {"id":"10","text":"hjkhk"},{"id":"11","text":"Blibbity blah blah"},
    {"id":"13","text":"Kick a butt"},{"id":"14","text":"asw"},{"id":"15","text":"Testaroo"},
    {"id":"16","text":"efver"},{"id":"17","text":"rvev"},{"id":"18","text":"vrevcre"},{"id":"19","text":"things"},
    {"id":"20","text":"--"},{"id":"21","text":"00"},{"id":"22","text":"jkjpojk"},{"id":"23","text":"om"},
    {"id":"24","text":"m"},{"id":"25","text":"k"},{"id":"26","text":"run"},{"id":"27","text":"fgbndfgn"},
    {"id":"28","text":"fdgn"},{"id":"29","text":"fdgn"},{"id":"30","text":"dfgndfgndfgndfngdfgn"},
    {"id":"31","text":"dfgn"},{"id":"32","text":"dfgn"},{"id":"33","text":"dfgn"},{"id":"34","text":"dfgn"},
    {"id":"35","text":"dfgn"},{"id":"36","text":"dfgn"},{"id":"37","text":"dfgn"},{"id":"38","text":"dfdf"},
    {"id":"39","text":"dfd"},{"id":"40","text":"fdfd"},{"id":"41","text":"fdfd"},{"id":"42","text":""},
    {"id":"43","text":"_iojuilj"},{"id":"44","text":"sdfasdf"},{"id":"45","text":"chgdf"},{"id":"46","text":"dfgd"},
    {"id":"47","text":"dfdf"},{"id":"48","text":"dfdf"},{"id":"49","text":"dfd"},{"id":"50","text":"df"},
    {"id":"51","text":"fd"},{"id":"52","text":"fd"},{"id":"53","text":"fd"},{"id":"54","text":"fd"},
    {"id":"55","text":"f"},{"id":"56","text":"df"},{"id":"57","text":"d"},{"id":"58","text":"dt"},
    {"id":"59","text":"y"},{"id":"60","text":"yh"},{"id":"61","text":"j"},{"id":"62","text":"n"},
    {"id":"63","text":"gd"},{"id":"64","text":"f"},{"id":"65","text":"c"},{"id":"66","text":"fs"},
    {"id":"67","text":"sg"},{"id":"68","text":"a garkghaer"},{"id":"69","text":"hghe "},{"id":"70","text":"b[e"},
    {"id":"71","text":"tyr"},{"id":"72","text":"]u"},{"id":"73","text":"risnr"},{"id":"74","text":""},
    {"id":"75","text":"e"},{"id":"76","text":"i"},{"id":"77","text":"yu"},{"id":"78","text":"ry"},
    {"id":"79","text":"tr"},{"id":"80","text":"yte"},{"id":"81","text":"yt"},{"id":"82","text":"s"},
    {"id":"83","text":"k"},{"id":"84","text":"iu"},{"id":"85","text":"oip"},{"id":"86","text":"h"},
    {"id":"87","text":"ec"},{"id":"88","text":""},{"id":"89","text":"byn"},{"id":"90","text":"ti,"},
    {"id":"91","text":"p"},{"id":"92","text":""},{"id":"93","text":""},{"id":"94","text":""},{"id":"95","text":"ecr"},
    {"id":"96","text":"vewt"},{"id":"97","text":"beryt"},{"id":"98","text":"ryt"},{"id":"99","text":"ryt"},
    {"id":"100","text":"ut"},{"id":"101","text":"uy"},{"id":"102","text":"rtby"},{"id":"103","text":"tryt"},
    {"id":"104","text":"ut"},{"id":"105","text":"iumu"},{"id":"106","text":"i8y"},{"id":"107","text":"a"}];

app.use(express.static('build/server/www'));
app.use(bodyParser.json());

app.get('/data', function (req, res) {
    res.send(mockData);
});
app.put('/data', function (req, res) {
    console.log('Adding ', req.body);
    mockData.push(req.body);
});
app.delete('/data/:id', function (req, res) {
    console.log('Deleting', req.params.id);
    mockData = mockData.filter(function(each){ if(each.id !== req.params.id) return each; })
    console.log('Deleted', req.params.id, "!");
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});