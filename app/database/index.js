var config = require('../config');
var mongoose = require('mongoose');

var dbURI = 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name;

mongoose.connect(dbURI);

mongoose.connection.on('error', function (err) {
    if (err) throw err;
});

mongoose.Promise = global.Promise;

module.exports = {
    db: mongoose,
    models: {
        User: require('./schemas/user')
    }
};