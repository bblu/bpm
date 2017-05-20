
var express = require('express');
var control = require('./control.js');
var userModel = require('../../models/user/model.js');
var router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('user time:', Date.now().toString());
    next();
});

router.get('/index', function(req, res){
    control.listWithPromise()
        .then(function(users){
            console.log(users);
            res.render('users/index',{title:'UserPage', author:'bblu', users:users});
    });
});

router.get('/', control.list);

router.post('/',control.create);

router.get('/:uid/name', function(req, res){
    var uid = req.params.uid;
    res.send(uid+': wblu');
});

module.exports = router;

