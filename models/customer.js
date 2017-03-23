
// var mongoose = require('mongoose');

// mongoose.connect(dbConnectionString); // global connection string


// Schema Buildup
var Schema = mongoose.Schema({
    name: String,
    address: String
});


//exports
module.exports = mongoose.model('customer', Schema);
