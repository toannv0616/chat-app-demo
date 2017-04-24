var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../database/schemas/user');

passport.use(new FacebookStrategy({
    clientID: '1262204413878091',
    clientSecret: 'd60b6896fe2162e8137cbf451ebcbf41',
    callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
}, function (accessToken, refreshToken, profile, done) {
    User.findOne({ socialId: profile.id }, function (err, user) {
        if (err) return done(err);
        done(null, user);
    });
}));

var index = function (req, res, next) {
    res.render('login');
};

module.exports = {
    index: index,
    facebook: passport.authenticate('facebook'),
    facebookCallback: passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' })
};