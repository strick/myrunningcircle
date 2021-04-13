var express = require('express');
var indexController = require("../controllers/index-controller");
var router = express.Router();

router.get('/:access_token', indexController.index );

module.exports = router;