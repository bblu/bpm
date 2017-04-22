var express = require('express');
var favicon = require('serve-favicon');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

var app = express();
//if use 80 port maybe unhandled error event.js 160
app.set('port',process.env.PORT || 3000);
app.set('view engine','hbs');
app.set('views',__dirname + '/views');
app.engine('html',require('hbs').__express);

var blocks={};
hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }        
    // for older versions of handlebars, use block.push(context(this();
    block.push(context.fn(this)); 
});

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/',function(req,res){
    res.render('index',{title:"index", body:'home', author:'bblu'});
});

app.get('/about',function(req,res){
    res.render('about',{fortune:"fortune"});
});
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(app.get('port'), function(){
    console.log('Express started at ' + app.get('port'));
});
