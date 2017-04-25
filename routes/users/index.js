
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('user time:', Date.now());
    next();
});

router.get('/index', function(req, res){
    res.render('users/index',{title:'users',author:'bblu'});
});
router.get('/', function(req, res){
    res.send('get users');
});

router.get('/:uid/name', function(req, res){
    var uid = req.params.uid;
    res.send(uid+': wblu');
});

module.exports = router;

