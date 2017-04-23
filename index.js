var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.use(logger('dev'));

app.set('views', './app/views');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'app', 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.listen(port, function () {
    console.log('Server listen on %d', port);
});