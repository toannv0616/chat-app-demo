var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');

var SALT_WORK_FACTOR = 10;
var DEFAULT_USER_PICTURE = "/img/user.jpg";

var Schema = mongoose.Schema;

var userSchema = Schema({
    username: { type: String, required: true },
    password: { type: String, default: null },
    socialId: { type: String, default: null },
    picture: { type: String, default: DEFAULT_USER_PICTURE }
});

userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.validatePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

var User = mongoose.model('User', userSchema);

module.exports = User;
