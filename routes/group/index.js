
var express = require('express');
var group = require('./control');
var router = express.Router();


//router.use(function timeLog(req, res, next){
//    console.log('group time:', Date.now().toString());
//    next();
//});

router.get('/index', function(req, res){
    group.listWithPromise()
        .then(function(groups){
            console.log(groups);
            res.render('groups/index',{title:'groupPage', author:'bblu', groups:groups});
    });
});

router.get('/', group.list);
router.post('/',group.create);

router.get('/:uid', group.findById);

router.delete('/:uid', group.deleteById);

router.get('/:uid/name', function(req, res){
    var uid = req.params.uid;
    res.send(uid+': wblu');
});

module.exports = router;

