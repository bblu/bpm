// nodejsdb-for-sqlite3 by bblu @ 2017-05-02

var util = require('util');
var sqlite3 = require('sqlite3');
sqlite3.verbose();
var db = undefined;

exports.connect = function(cb){
    db = new sqlite3.Database('sqlite3.dbf',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    function(err){
        if(err){
            util.log('Fail on creating sqlite3 database ' + err);
            cb(err);
        }else{
            cb(null);
        }
    });       
}

exports.disconnect = function(cb){
    cb(null);
}

exports.setup = function(cb){
    db.run('CREATE TABLE IF NOT EXISTS user (' + 
    'id INTEGER PRIMARY KEY AUTOINCREMENT, account VARCHAR(16), name TEXT, '+
    'ts DATETIME DEFAULT(datetme("now","localtime")))',
    function(err){
        if(err){
            util.log('Fail on creating table user ' + err);
            cb(err);
        }else{
            cb(null);
        }
    });
}

