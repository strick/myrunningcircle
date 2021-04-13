var express = require('express');
var indexController = require("../controllers/index-controller");
var router = express.Router();

router.get('/:auth_token', indexController.index );

module.exports = router;