//
var logger = require('../../lib/logger');
var userModel = require('../../models/user/model.js');

//Json api for list of users
var sw = true;
exports.list = function(req, res, next){
    if(sw){
        logger.debug('control.list users with promise');
        userModel.listWithPromise()
        .then(function(users){
            res.json({users:users});
        })
        .catch(function(err){
            res.status(500);
            res.send(err);// what's the different from next(err)
        });
    }else{
        logger.debug('control.list users with callback');
        userModel.listWithCallback(function(err, users){
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
    userModel.create(account,name,res,function(err){
        console.log('create error:' + err);
    });
};
// find user by id
exports.findById = function(uid){
    logger.debug('find by id' + uid);

};
