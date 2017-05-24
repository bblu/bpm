var mongoose = require('mongoose');

//var nameSchema = new mongoose.Schema({name: 'String'});

//schema for users
var UserSchema = new mongoose.Schema( {   
    id: { type: Number, required: true, index: true}, 
    account: String,
    password: String,
    name: String,
    address: String,
    signature: String,
    profile: String,
    photo: String,
    company: Number,
    score: { type: Number, default: 0},
    level: String,
    blocked:{ type: Number, default: 0},
    deleted:{ type: Boolean, default: false},
    token:String,
    last_update:{ type:Date, default: Date.now()}
});

UserSchema.index({score: -1});
UserSchema.index({token: 1});

UserSchema.pre('save', function(next){
    this.last_update = new Date();
    next();
});
