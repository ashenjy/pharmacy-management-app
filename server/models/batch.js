var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var batchSchema = new Schema({
    _id: { type: objectId, auto: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    batchNumber: { type: number, required: true },
    type:{ type:String, required:true},
    quantity:{type: number, required:true },
    manufactureDate:{type:date,required:true},
    expireDate:{type:date,required:true}
});

var batch = mongoose.model('batches', batchSchema);

module.exports = batch;


