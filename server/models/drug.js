var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var drugSchema = new Schema({
    _id: { type: objectId, auto: true },
    name:{type:String, required:true},
    category: { type: String, required: true },
    reorderLevel: { type: Number, required: true },
    dangerLevel: { type: Number, required: true },
    price:{ type:Number, required:true},
    remarks:{type: String }
});

var drug = mongoose.model('drugs', drugSchema);

module.exports = drug;

