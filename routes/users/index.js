
var express = require('express');
var user = require('./control.js');
var router = express.Router();


//router.use(function timeLog(req, res, next){
//    console.log('user time:', Date.now().toString());
//    next();
//});

router.get('/index', function(req, res){
    user.listWithPromise()
        .then(function(users){
            console.log(users);
            res.render('users/index',{title:'UserPage', author:'bblu', users:users});
    });
});

router.get('/', user.list);
router.post('/',user.create);

router.get('/:uid', user.findById);

router.get('/:uid/name', function(req, res){
    var uid = req.params.uid;
    res.send(uid+': wblu');
});

module.exports = router;

