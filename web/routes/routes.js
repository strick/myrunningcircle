var express = require('express');
const indexController = require('../controllers/index-controller')
const feedController = require('../controllers/feed-controller');
var router = express.Router();

router.get('/', indexController.index );
router.get('/auth/strava', indexController.auth);
router.get('/feed', feedController.feed );

module.exports = router;