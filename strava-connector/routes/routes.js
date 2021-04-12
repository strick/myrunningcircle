var express = require('express');
var indexController = require("../controllers/index-controller");
var router = express.Router();

router.get('/', indexController.index );

module.exports = router;