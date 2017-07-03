var express = require("express"),
    router = express.Router(),
    request = require("../models/request.js");

router.get("/", function(req, res) {
    request.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    request.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new request(obj);
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

    request.findByIdAndUpdate(id, { reqid: obj.reqid, drugName: obj.drugName, reqQ: obj.reqQ, availableQ: obj.availableQ,  datef: obj.datef, dep: obj.dep, status: obj.status, approveQ: obj.approveQ  },
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        })
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    request.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;