var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var requestSchema = new Schema({
    _id: { type: objectId, auto: true },
    reqid: { type: String ,required:true  },
    drugName: {type: String,required:true},
    reqQ: { type: String ,required:true},
    availableQ: {type: String,required:true},
    datef: {type: String,required:true},
    dep: {type: String,required:true},
    status: {type: String, default:'Pending' , required:true},
    approveQ: {type: String,required:true}

});

var request = mongoose.model('requests', requestSchema);

module.exports = request;
