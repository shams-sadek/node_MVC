
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// user model
var User = require('./../models/user');

// var Promise = require('mpromise');

module.exports = function(app) {


    // get request
    app.get('/user-registration', function(req, res){

        res.render('user/user_registration', { arr: ['Faiza', 'Roshni', 'Jasim']});

    });



    // POST Request
    app.post('/user-registration', urlencodedParser, function(req, res){

        User(req.body).save(function(err, data){

            if (err) throw err;


            res.render('user/successful', { data: data });
        });


    });



    // user list
    app.get('/user-list', function(req, res){


        var abc = new Promise(function (fulfill, reject){

            User.find({}, function(err, data){
                if (err) reject(err);

                else return fulfill(res);

            });

            // fs.readFile(filename, enc, function (err, res){
            //   if (err) reject(err);
            //   else fulfill(res);
            // });
          });


        res.send(abc);

        console.log(abc);

        // res.send(a);
        // User.find({}, function(err, data){
        //
        //     res.render('user/user_list', { user: data });
        //
        // });


    })


}
