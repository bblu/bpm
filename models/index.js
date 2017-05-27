// Connect to MongoDB using Mongoose
var mongoose = require('mongoose');
var config   = require('../config');
var logger   = require('../lib/logger');

mongoose.connect(config.db, {
    server: {poolSize: 20}
}, function(err){
    if(err){
        logger.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

//var db = mongoose.createConnection('localhost', 'bpm');

// models
require('./group/model');

exports.Stuff   = mongoose.model('Stuff');
exports.Group   = mongoose.model('Group');
exports.Department   = mongoose.model('Department');

