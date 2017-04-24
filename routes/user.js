
module.exports = function(router){


    router.use(function timeLog(req, res, next){
        console.log('time:', Date.now());
        next();
    });

    router.get('/users', function(req, res){
        res.send('get users');
    });

};
