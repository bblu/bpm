var config = require('../config');

var env = process.env.NODE_ENV || 'development'

var log4js = require('log4js');
log4js.configure({
    appenders:[
        { type: 'console' },
        { type: 'file', filename: 'log/bpm.log', category: 'bpm' }
    ]
});

var logger = log4js.getLogger('bpm');
logger.setLevel(config.debug && env != 'test' ? 'DEBUG' : 'ERROR');

module.exports = logger;
