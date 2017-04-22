var express = require('express');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

var app = express();
//if use 80 port maybe unhandled error event.js 160
app.set('port',process.env.PORT || 3000);
app.set('view engine','hbs');
//app.set('views',__dirname + '/views');
app.engine('html',require('hbs').__express);


app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.render('home',{fortune:"fortune"});
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
