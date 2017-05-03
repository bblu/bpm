//
var model = require('../../models/user/model.js');

//Json api for list of users
var listWithoutPromise = function(req, res){
    console.log('control.list without promise');
    var users = model.listWithoutPromise(res);
    //if(err){ console.log('model.list error!'); }
};

var listWtihPromise = function(req, res){
    console.log('control.list');
    model.listWithPromise().then(function(users){
        res.json(users); 
    }).catch(function(err){
        if(err){
            console.log('model.list error!');
        }
    })
};
var sw = true;
exports.list = function(req, res){
    if(sw){
        listWtihPromise(req,res);
    }else{
        listWithoutPromise(req,res);
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

