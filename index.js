var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var database = require('./app/database');

var app = express();
var loginRoute = require('./app/routes/login');

var port = process.env.PORT || 3000;

app.use(logger('dev'));

app.set('views', './app/views');
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app', 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

app.use(loginRoute);

app.listen(port, function () {
    console.log('Server listen on %d', port);
});