var express = require('express');
const indexController = require('../controllers/index-controller')
var router = express.Router();

router.get('/', indexController.index );
router.get('/get/:access_token', indexController.get );

module.exports = router;