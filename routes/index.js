
var express = require('express');
var users = require('./users');

//var group = require('./group.js');

var router = express.Router();
//
//router.use(function timeLog(req, res, next){
//    console.log('root time:', Date.now());
//    next();
//});

router.get('/hw',function(req,res){
    res.render('index',{title:"index", body:'home', author:'bblu'});
}); 

router.use('/users/', users);
//router.use('/group/', group);


router.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
}); 


module.exports = router;
