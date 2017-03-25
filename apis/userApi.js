/**
 | -----------------------------------------------------------------------------
 | user APIs
 | -----------------------------------------------------------------------------
 */


var express = require('express')
var router = express.Router()



/**
 | -----------------------------------------------------------------------------
 | user model
 | -----------------------------------------------------------------------------
 */
var User = require('./models/user');



// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


/**
 | -----------------------------------------------------------------------------
 | Return all users route = /api/user/list
 | -----------------------------------------------------------------------------
 */
router.get('/list', function (req, res, next) {

    User.find({}, (err, data) => {

        if (err) throw err;

        else res.json(data);
    })

})




/**
 | -----------------------------------------------------------------------------
 | route = /api/user/
 | -----------------------------------------------------------------------------
 | post
 */
router.post('/', function (req, res, next) {

    User.create(req.body).then(function(user){

            res.send(user);

        }).catch(next);

});



/**
 | -----------------------------------------------------------------------------
 | route = /api/user/:id
 | -----------------------------------------------------------------------------
 | delete
 */
router.delete('/:id', function (req, res, next) {

    User.findByIdAndRemove({ _id: req.params.id }).then(function(user){

        res.send('user');
    })

});


/**
 | -----------------------------------------------------------------------------
 | route = /api/user/:id
 | -----------------------------------------------------------------------------
 | delete
 */
router.put('/:id', function (req, res, next) {

    User.findByIdAndUpdate(req.params.id, req.body, {new: false}).then(function(user){

            res.send(req.body);

        }).catch(next);

});


// exports all APIs
module.exports = router;
