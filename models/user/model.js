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
exports.list = function(res, callback){
    console.log('model.list');
    User.find({},function(err,users){
        if(err){
            callback(err);
        }else{
            console.log('user.findAll');
            res.json(users);
        }
    });
};

exports.create = function(account,name,res,callback){
    var userObj={};
    userObj.id = 1003;
    userObj.account = account;
    userObj.name = name;
    var user = new User(userObj);
    user.save(function(err,doc){
        if(err !! !doc){
            throw 'Error';
        }else{
            res.json(doc);
        }
    });    
};

