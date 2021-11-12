const express = require("express");

const router = express.Router();
const { validateRegister, validateLogin } = require("../validate");
const protect = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  loadUser,
  logoutUser,
  loadDemoUser,
  updatePassword,
} = require("../controllers/auth");

router.route("/logout").get(logoutUser);
router.route("/demo-user").get(loadDemoUser);

router.route("/register").post(validateRegister, registerUser);
router.route("/login").post(validateLogin, loginUser);

router.use(protect);
router.route("/user").get(loadUser);
router.route("/update").patch(updatePassword);

module.exports = router;
