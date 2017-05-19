//config
//
var path = require('path');


var config = {
    debug: true,
    name: 'bpm test',
    description: 'node express website test',
    host: 'localhost',
    db: 'mongodb://127.0.0.1/bpm_dev',
    
    port:3000,


};

if(process.env.NODE_ENV === 'test'){
    config.db = 'mongodb://127.0.0.1/bpm_test'
}

module.exports = config;
