/**
 | -----------------------------------------------------------------------------
 | mongoose Database Connection String
 | -----------------------------------------------------------------------------
 */
global.mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/faiza');


/**
 | -----------------------------------------------------------------------------
 | All API are calling here...
 | -----------------------------------------------------------------------------
 */
module.exports = function(app){

    // user
    app.use('/user', require('./user'));

}
