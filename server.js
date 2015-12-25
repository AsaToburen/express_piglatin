var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({
    extended: false
});


app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

//render index page when route == '/'

app.get('/', function(req, res, next) {
    res.render('index');
});

//form submits to /pig/ 

app.post('/pig/', parseUrlEncoded, function(req, res, next) {
    var pigLatin = filterMessage(req.body.message);
    res.status("200").json(pigLatin);
});


app.listen(3000, function(err) {
    console.log('running server on port 3000');
});

function filterMessage(text) {
    var pigString = text.replace(/\b(\w)(\w+)\b/g, '$2$1-ay');
    var lowerCase = pigString.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
