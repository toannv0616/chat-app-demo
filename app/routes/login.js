var express = require('express');
var router = express.Router();
var controller = require('../controllers/loginController');

router.get('/login', controller.index);
router.get('/auth/facebook', controller.facebook);
router.get('/auth/facebook/callback', controller.facebookCallback);

module.exports = router;