var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));

//route for prescription api
router.use("/prescription", require("../controllers/prescription.api"));

//routes for drugAS api
router.use("/drugAS", require("../controllers/drug.apiAS.js"));

//route for drugs
router.use("/drug",require("../controllers/drug.api"));

//routes for email api
router.use("/email", require("../controllers/email.api"));

//routes for email api
router.use("/supplier", require("../controllers/supplier.api"));


//routes for email api
router.use("/request", require("../controllers/request.api"));

module.exports = router;