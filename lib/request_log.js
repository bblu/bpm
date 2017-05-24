require('colors');
var logger = require('./logger');
var ignore = /^\/(public\agent)/;

exports = module.exports = function(req, res, next){
    //ignore log out
    if(ignore.test(req.url)){
        next();
        return;
    }
    var t = new Date();
    logger.info('Started', req.method, req.url, req.ip);

    res.on('finish', function(){
        var duration = ((new Date()) - t);
        logger.info('Completed', res.statusCode, ('(' + duration + 'ms)').green);
    });

    next();
};

