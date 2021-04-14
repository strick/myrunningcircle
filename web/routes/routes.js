var express = require('express');
const indexController = require('../controllers/index-controller')
const feedController = require('../controllers/feed-controller');
var router = express.Router();
const isLoggedIn = require('../middleware/auth')

//router.get('/', indexController.index );

router.get('/', isLoggedIn, indexController.index);

router.get('/auth/strava', indexController.auth);
router.get('/strava-feed', feedController.stravaFeed );

module.exports = router;