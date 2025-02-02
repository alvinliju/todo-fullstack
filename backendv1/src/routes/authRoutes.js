const express = require("express");
const {
  registerUser,
  loginUser,
  requestPasswordReset,
  resetPassword,
  fuckThisCrap,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

//password reset route
router.post("/passwordreset", requestPasswordReset);
router.post("/resetpassword", resetPassword);

module.exports = router;
