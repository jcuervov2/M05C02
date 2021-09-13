var express = require('express');
var indexController = require('../controllers/indexController');
var router = express.Router();

router.get('/', indexController.main);
router.get('/detalle:id', indexController.detail);


module.exports = router;