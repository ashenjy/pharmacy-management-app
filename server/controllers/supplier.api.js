var express = require("express"),
    router = express.Router(),
    supplier = require("../models/supplierDetails.js");

router.get("/", function(req, res) {
    supplier.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    supplier.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new supplier(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("created");
    });
}).put("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;

    supplier.findByIdAndUpdate(id, { businessName: obj.businessName, address: obj.address, contactNo: obj.contactNo, email: obj.email , website: obj.website},
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    supplier.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;
