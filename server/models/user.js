var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    email: {type: String, required:true},
    number: { type: String, required: true },
    userType: {type: String, required:true},
    password: {type: String, required:true}

});

var user = mongoose.model('users', userSchema);

module.exports = user;
