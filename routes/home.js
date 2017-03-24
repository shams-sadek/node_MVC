var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})



// var request = require("request")

/**
 | -----------------------------------------------------------------------------
 | define the home page route
 | -----------------------------------------------------------------------------
 */
router.get('/', function (req, res) {

    // var url = 'http://localhost:3000/user/list';
    //
    // request(url, (error, response, body)=> {
    //   if (!error && response.statusCode === 200) {
    //     const fbResponse = JSON.parse(body)
    //     console.log("Got a response: ", fbResponse.picture)
    //   } else {
    //     console.log("Got an error: ", error, ", status code: ", response.statusCode)
    //   }
    // })

  res.render('home');

})



module.exports = router
