//module dependencies by bblu @ 2017

var config = require('./config');
var colors = require('colors');
var path = require('path');
var express = require('express');
var router = express.Router();
var roots = require('./routes');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var logger = require('./lib/logger');
var errorHandler = require('errorhandler');
require('./lib/mongoose_log');
var requestLog = require('./lib/request_log');
var favicon = require('serve-favicon');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

var blocks={};
hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }        
    // for older versions of handlebars, use block.push(context(this();
    block.push(context.fn(this)); 
});

var app = express();
//if use 80 port maybe unhandled error event.js 160
//app.set('port',process.env.PORT || 3000);
app.set('view engine','hbs');
app.set('views',__dirname + '/views');
app.engine('html',require('hbs').__express);

//request logger
//if(config.debug){
    app.use(requestLog);
//}

var staticDir = path.join(__dirname, 'public');
app.use('/public', express.static(staticDir));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('tiny')); // type = tiny|combined
app.use(require('response-time')());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '1mb' }));
//app.get('/',function(req,res){
//    res.render('index',{title:"index", body:'home', author:'bblu'});
//});
//router.use('/users', users);

app.use(roots);
app.get('/about',function(req,res){
    res.render('about',{fortune:"fortune"});
});

//error handler
if(config.debug){
    app.use(errorHandler());
} else {
    app.use(function(err, req, res, next){
        logger.error(err);
        return res.status(500).send('500 status');
    });
}

router.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

if(!module.parent){
    app.listen(config.port, function(){
        logger.info('bpm listening on port'.green, config.port.toString().green);
        logger.info('you can debug your site at http://'.green + config.host.green + ':'.yellow + config.port.toString().green);
    });
}
