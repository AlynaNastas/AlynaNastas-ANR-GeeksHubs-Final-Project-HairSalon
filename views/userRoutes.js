const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/users", userController.createUser);
router.post("/users/login", userController.login);

router.get("/profile", verifyToken, userController.profile);
router.put("/updateprofile", verifyToken, userController.updateUser);

module.exports = router;
