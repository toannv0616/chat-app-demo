var express = require('express');
var logger = require('morgan');

var app = express();

var port = process.env.PORT || 3000;

app.use(logger('dev'));

app.set('views', './app/views');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, function () {
    console.log('Server listen on %d', port);
});