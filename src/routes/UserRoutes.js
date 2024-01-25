const router = require("express").Router();
const userController = require("../controller/UserController");
const { verifyToken } = require("../middleware/guard-auth");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/login", verifyToken, userController.login);

module.exports = router;