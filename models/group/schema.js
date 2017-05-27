var mongoose = require('mongoose');

/**
 * schema for department
 */
var Department = new mongoose.Schema({
    _id: { type: Number, required: true, index: true},
    name: { type: String, required: true},
    parentid: Number,
    deleted: {type: Boolean, default: false},
    company: Number
});


/**
 * schema for stuff
 */
var Stuff = new mongoose.Schema( {   
    number: { type: Number, required: true, index: true}, 
    account: String,
    password: String,
    name: String,
    gender:Number,
    mobile:String,
    address: String,
    signature: String,
    profile: String,
    photo: String,
    joined: Date,
    score: { type: Number, default: 0},
    level: String,
    role:String,
    blocked:{ type: Number, default: 0},
    deleted:{ type: Boolean, default: false},
    token: String, 
    last_ip: String,
    logins: { type: Number, default: 0},
    company: Number,
    last_update:{ type:Date, default: Date.now()}
});

Stuff.index({score: -1});
Stuff.index({token: 1});

Stuff.pre('save', function(next){
    this.last_update = new Date();
    next();
});

/**
 * schema for group
 */
var Group = new mongoose.Schema({
    depid: Number,
    stfid: String,
    level: String,
    role: String,
    joined: Date
});

exports.Stuff = Stuff;
exports.Group = Group;
exports.Department = Department;

