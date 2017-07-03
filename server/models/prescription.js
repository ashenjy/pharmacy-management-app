var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var prescriptionSchema = new Schema({
    _id: { type: objectId, auto: true },
    patientName: { type: String, required: true },
    patientAge: { type: Number, required: true },
    date: { type: Date, required: true, default:Date.now },
    drugs: {type: Array, required: true}
}
/*, {
    versionKey: false
}*/
);

var prescription = mongoose.model('prescriptions', prescriptionSchema);

module.exports = prescription;