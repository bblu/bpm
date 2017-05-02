// Connect to MongoDB using Mongoose
var mongoose = require('mongoose');
var db;

db = mongoose.createConnection('localhost', 'pbm');

//Get user schema and model
var UserSchema = require('./schema.js').UserSchema;
var User = db.model('users', UserSchema);

//async function list(){
//    return  await User.find({});
//}
exports.list = function(){
    console.log('model.list');
    var p = new Promise(function(res,rej){
        User.find({},function(err,users){
            if(err){
                rej(err);
            }else{
                console.log('user.findAll');
                res(users);
            }
        });
    });

};

exports.create = function(account,name,res,callback){
    var userObj={};
    userObj.id = 1003;
    userObj.account = account;
    userObj.name = name;
    var user = new User(userObj);
    user.save(function(err,doc){
        if(err || !doc){
            throw 'Error';
        }else{
            res.json(doc);
        }
    });    
};

