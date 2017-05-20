//log out the mongodb query actions 
//
var mongoose = require('mongoose');
var logger   = require('./logger');
var config   = require('../config');

if(config.debug){
    var traceMQuery = function(method, info, query){
        return function(err, result, millis){
            if(err){
                logger.error('traceMQuery error:', err);
            }
            var info = [];
            info.push(query._collection.collection.name + '.' + method.blue);
            info.push(JSON.stringify(info));
            info.push((millis + 'ms').green);
            logger.debug('MONGO'.magenta, info.join(' '));
        };
    };
    mongoose.Mongoose.prototype.mquery.setGlobalTraceFunction(traceMQuery);
}
