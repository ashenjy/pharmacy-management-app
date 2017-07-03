var express = require("express"),
    router = express.Router(),
    user = require("../models/user.js");

router.get("/", function(req, res) {
    user.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    user.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new user(obj);
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

    user.findByIdAndUpdate(id, { name: obj.name, email: obj.email, number: obj.number, userType: obj.userType, password: obj.password },
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        })
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;