var mongoose = require('mongoose');

//var nameSchema = new mongoose.Schema({name: 'String'});

//schema for users
exports.UserSchema = new mongoose.Schema( 
    {   id: { type: Number, required: true, index: true}, 
        account:String,
        name:String,
        ts:{ type:Date, default: Date.now()}
    }
);

