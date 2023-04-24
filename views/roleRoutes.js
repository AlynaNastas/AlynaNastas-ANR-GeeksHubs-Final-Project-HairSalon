const roleController = require("../controllers/roleController");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

const router = require("express").Router();

router.post("/roles", verifyToken, isAdmin, roleController.createRole);
router.post("/admin/roles", verifyToken, isAdmin, roleController.addRole);
router.get("/users/role/:id", verifyToken, isAdmin, roleController.getUserRole);
router.delete("/delete/role/:id", verifyToken, isAdmin, roleController.deleteRole);

router.get("/admin/users", verifyToken, isAdmin, roleController.getAllUsers);
router.delete("/users/:id", verifyToken, isAdmin, roleController.deleteUser);
router.put("/roles/:id", verifyToken, isAdmin, roleController.updateRoles);
router.get("/admin/app", verifyToken, isAdmin, roleController.getStylistApp);

module.exports = router;
