const stylistController = require("../controllers/stylistController");
const verifyToken = require("../middlewares/verifyToken");
const isStylist = require("../middlewares/isStylist");
const isAdmin = require("../middlewares/isAdmin");


const router = require("express").Router();

router.get("/stylist/app", verifyToken, isStylist, stylistController.getStylistApp);
router.get("/users/stylist", verifyToken, isStylist, stylistController.getUser);


module.exports = router;
