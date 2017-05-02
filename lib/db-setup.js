var util = require('util');
var db = require('./db-sqlite3');

db.connect(function(error){
    if(error){
        throw error;
    }    
});

db.setup(function(error){
    if(error){
        util.log('ERROR:' + error);
        throw error;
    }    
});
