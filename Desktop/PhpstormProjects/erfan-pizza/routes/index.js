var express = require('express');
var router = express.Router();
var Pizza = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
    var pizzas =  Pizza.find();

        res.render('shop/index', {title: 'erfan-pizza', pizzas: pizzas });

});
module.exports = router;