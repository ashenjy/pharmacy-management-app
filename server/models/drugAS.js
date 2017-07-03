var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var drugSchemaAS = new Schema({
    _id: { type: objectId, auto: true },
    drugName: { type: String, required: true },
    UnitType: { type: String, required: true },
    DrugC: { type: String, required: true },
    DrugQ: { type: String, required: true }
}

    /*, {
 versionKey: false
 }*/

);

var drugAS = mongoose.model('drugsAS', drugSchemaAS);

module.exports = drugAS;
