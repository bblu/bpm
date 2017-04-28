// Connect to MongoDB using Mongoose
var mongoose = require('mongoose');
var db;

db = mongoose.createConnection('localhost', 'pbm');

//Get user schema and model
var UserSchema = require('./schema.js').UserSchema;
var User = db.model('users', UserSchema);

exports.list = function(res, callback){
    console.log('model.list');
    User.find({},function(err,users){
        if(err){
            callback(err);
        }else{
            console.log('user.findAll :' + users);
            res.json(users);
        }
    });
    return 'id:101';
};

