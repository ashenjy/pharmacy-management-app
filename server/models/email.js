var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;



var emailSchema = new Schema({


        _id: { type: objectId, auto: true },
        emailFrom: { type: String, required: true },
       emailTo: { type: String, required: true },
        emailSubject: { type: String, required: true },
       emailContent: { type: String, required: true }

    }



);

var email = mongoose.model('emails', emailSchema);

module.exports = email;
