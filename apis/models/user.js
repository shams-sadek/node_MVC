
// Schema Buildup
var Schema = mongoose.Schema({
    name: String,
    // email: { type: String, unique: true},
    email: { type: String },
    password: { type: String}
});


//exports
module.exports = mongoose.model('user', Schema);
