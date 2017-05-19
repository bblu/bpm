//
var userModel = require('../../models/user/model.js');

//Json api for list of users
exports.listWithCallback = function(req, res, next){
    console.log('control.list users with callback');
    userModel.listWithCallback(function(err, users){
        if(err){ 
            console.log('model.list error!'); 
            return next(err);
        }
        res.json(users);
    });
};

exports.listWithPromise = function(){
    console.log('control.list users with promise');
    //return new Promise(function(resolve,reject){
    return userModel.listWithPromise();
        //.then(function(users){
        //    resolve(users); 
        //})
        //.catch(function(err){
        //    if(err){
        //        console.log('model.list error!');
        //    }
        //})
    //});
}

var sw = false;
exports.list = function(req, res, next){

    if(sw){
        return listWithPromise();
    }else{
        listWithCallback(req, res, next);
    }
    sw=!sw;
}
// add user
exports.create = function(req, res){
    console.log('control.create');
    var account = req.body.account;
    var name = req.body.name;
    console.log(account +':' + name);
    model.create(account,name,res,function(err){
        console.log('create error:' + err);
    });
};

