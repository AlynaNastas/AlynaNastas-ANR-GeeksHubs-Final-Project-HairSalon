const servicesController = require("../controllers/servicesController");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/services", verifyToken, servicesController.getServices);

module.exports = router;