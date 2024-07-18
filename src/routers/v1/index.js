const express = require("express");
const userController = require("../../controllers/user-controller");
const router = express.Router();
const { AuthRequestValidator } = require("../../middleware/index");

router.get("/admin/users", userController.allUsers);

router.post(
  "/signup",
  AuthRequestValidator.ValidateUserAuth,
  userController.create
);
router.post(
  "/signIn",
  AuthRequestValidator.ValidateUserAuth,
  userController.signIn
);

router.delete("/user/:id", userController.destroy);

router.get("/isAuthenticated", userController.isAuthenticated);

module.exports = router;
