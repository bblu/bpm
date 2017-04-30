//
var model = require('../../models/user/model.js');

//Json api for list of users
exports.list = function(req, res){
    console.log('control.list');
    //var users = model.list();
    //res.send(users);
    model.list(res,function(err){
        if(err){
            console.log('model.list error!');
        }
    });
};

exports.create = function(req, res){
    console.log('control.create');
    var account = req.body.account;
    var name = req.body.name;
    console.log(account +':' + name);
    model.create(account,name,res,function(err){
        console.log('create error:' + err);
    });
};

