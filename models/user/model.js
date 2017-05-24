// Connect to MongoDB using Mongoose
var mongoose = require('mongoose');
var db;

db = mongoose.createConnection('localhost', 'bpm');

//Get user schema and model
var UserSchema = require('./schema.js').UserSchema;
var User = db.model('users', UserSchema);

/**
 * get Users by accounts
 * callback:
 * - err,database error
 * - users, user array
 * @param {array} accounts
 * @param {function} callback function
 */
exports.getUsersByAccounts = function(accounts, callback){
    if(accounts.length === 0){
        return callback(null, []);
    }
    User.find({account: { $in: accounts} }, callback);
};

exports.listWithCallback = function(callback){
    //console.log('user.model.list before find');
    User.find({}, callback);
}

exports.listWithPromise = function(filter){
    //console.log('user.model.list before find');
    filter = filter || {};
    return new Promise(function(resolve,reject){
        User.find(filter,function(err,json){
            if(err){
                reject(err);
            }else{
                console.log('user.model.list with promise');
                resolve(json);
            }
        });
    });
}

exports.findById = function(id){
    return exports.listWithPromise({id:id});
}

exports.deleteById = function(id){
    return new Promise(function(resolve, reject){    
        User.update({id:id}, {$set: { deleted: true }}, 
            function(err, res){
                if(res){
                    resolve(res);
                }else if (err){
                    reject(err);
                }
            });
    });
};
exports.create = function(account,name,res,callback){
    var userObj={};
    userObj.id = 1004;
    userObj.account = account;
    userObj.name = name;
    //userObj.ts = Date();
    var user = new User(userObj);
    user.save(function(err,doc){
        if(err || !doc){
            throw err;
        }else{
            res.json(doc);
        }
    });    
};

