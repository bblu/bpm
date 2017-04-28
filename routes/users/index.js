
var express = require('express');
var control = require('./control.js');
var router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('user time:', Date.now());
    next();
});

router.get('/index', function(req, res){
    res.render('users/index',{title:'users',author:'bblu'});
});
router.get('/', control.list);

router.get('/:uid/name', function(req, res){
    var uid = req.params.uid;
    res.send(uid+': wblu');
});

module.exports = router;

