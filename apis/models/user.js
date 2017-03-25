
// Schema Buildup
var Schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    // email: { type: String, unique: true},
    email: { type: String },
    password: { type: String},
    available: {
        type: Boolean,
        default: false
    }
});


//exports
module.exports = mongoose.model('user', Schema);
