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
 | Return all users
 | -----------------------------------------------------------------------------
 */
router.get('/list', function (req, res) {

    User.find({}, (err, data) => {

        if (err) throw err;

        else res.json(data);
    })

})


// exports all APIs
module.exports = router
