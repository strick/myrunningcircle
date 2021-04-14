var express = require('express');
const indexController = require('../controllers/index-controller');
const feedController = require('../controllers/feed-controller');
const authController = require('../controllers/auth-controller');
var router = express.Router();
const isLoggedIn = require('../middleware/auth')

router.get('/', isLoggedIn, indexController.index);

router.get('/logout', authController.logout);

router.get('/auth/strava', indexController.auth);
router.get('/strava-feed', feedController.stravaFeed );

module.exports = router;