//
var logger = require('../../lib/logger');
var groupModel = require('../../models/group/model.js');

//Json api for list of users
var sw = true;
exports.list = function(req, res, next){
    if(sw){
        logger.debug('control.list users with promise');
        groupModel.listWithPromise()
        .then(function(users){
            res.json({users:users});
        })
        .catch(function(err){
            res.status(500);
            res.send(err);// what's the different from next(err)
        });
    }else{
        logger.debug('control.list users with callback');
        groupModel.listWithCallback(function(err, users){
        if(err){ 
            console.log('model.list error!'); 
            return next(err);
        }
        res.json(users);
        });
    }
    sw=!sw;
}
// add user
exports.create = function(req, res){
    console.log('control.create');
    var account = req.body.account;
    var name = req.body.name;
    console.log(account +':' + name);
    groupModel.create(account,name,res,function(err){
        console.log('create error:' + err);
    });
};
// find user by id
exports.findById = function(req,res){
    var uid = req.params.uid;
    logger.debug('find by id:' + uid);
    groupModel.findById(uid)
    .then(function (user){
        res.json(user);
    });
};

//delete by id
exports.deleteById = function(req,res){
    var uid = req.params.uid;
    logger.debug('delete by id:' + uid);
    groupModel.deleteById(uid)
    .then(function (user){
        res.json(user);
    });
    
};
