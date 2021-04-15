var express = require('express');
const indexController = require('../controllers/index-controller');
const feedController = require('../controllers/feed-controller');
const authController = require('../controllers/auth-controller');
var router = express.Router();
const isLoggedIn = require('../middleware/auth');
const passport = require('passport');

router.get('/', isLoggedIn, indexController.index);

router.get('/logout', authController.logout);

// Facebook Login
router.get('/auth/error', (req, res) => res.send('Unknown Error'))
router.get('/auth/facebook',passport.authenticate('facebook'));
router.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
       res.redirect('/profile');
});

// Feed
router.get('/feed/sync', isLoggedIn, feedController.sync);
router.get('/feed/show', isLoggedIn, feedController.show);

router.get('/auth/strava', isLoggedIn, authController.strava);

router.get('/profile', isLoggedIn, indexController.profile);

module.exports = router;