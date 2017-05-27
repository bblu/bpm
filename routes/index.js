
var express = require('express');
var group = require('./group');


var router = express.Router();
//
//router.use(function timeLog(req, res, next){
//    console.log('root time:', Date.now());
//    next();
//});

router.get('/index',function(req,res){
    res.render('index',{title:"index", body:'home', author:'bblu'});
}); 

router.get('/about',function(req,res){
    res.render('about',{title:"about", body:'home', author:'bblu'});
}); 
router.use('/group', group);
//router.use('/group/', group);


router.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
}); 


module.exports = router;

