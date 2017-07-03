

var express = require("express"),
    router = express.Router(),
    email = require("../models/email.js");

router.get("/", function(req, res) {
    email.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    email.find({_id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new email(obj);
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

    email.findByIdAndUpdate(id, { emailFrom: obj.emailFrom, emailTo: obj.emailTo, emailSubject: obj.emailSubject , emailContent: obj.emailContent },
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    email.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});



module.exports = router;