var express = require("express"),
    router = express.Router(),
    prescription = require("../models/prescription.js");

router.get("/", function(req, res) {
    prescription.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    prescription.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new prescription(obj);
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

    prescription.findByIdAndUpdate(id, { patientName: obj.patientName, patientAge: obj.patientAge, date: obj.date, drugs: obj.drugs },
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    prescription.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;