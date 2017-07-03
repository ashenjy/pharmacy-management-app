var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var supplierSchema = new Schema({
    _id: { type: objectId, auto: true },
    businessName:{type:String, required:true},
    address: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true },
    website:{ type:String}

});

var supplier = mongoose.model('supplier', supplierSchema);

module.exports = supplier;

