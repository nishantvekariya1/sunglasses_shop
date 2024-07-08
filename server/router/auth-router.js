const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
const validate = require("../middleware/validate-middleware");
const { signUpSchema, signInSchema } = require("../validator/auth-validator");
const authMiddleware = require("../middleware/auth-middleware");

router.route("/").get(authController.home);

router.route("/register").post(validate(signUpSchema), authController.register);

router.route("/login").post(validate(signInSchema), authController.login);

router.route("/user").get(authMiddleware, authController.user);

module.exports = router;
