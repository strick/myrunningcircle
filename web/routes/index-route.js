var express = require('express');
const indexController = require('../controllers/index-controller');
var crudController=require('../controllers/index-controller');
var router = express.Router();

router.get('/', indexController.index );

module.exports = router;