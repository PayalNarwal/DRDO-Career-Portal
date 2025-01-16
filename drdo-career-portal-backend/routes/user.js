const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Sign Up Route
router.post("/signup", userController.signup);
// /api/signin
router.post("/login", userController.login);
// /api/logout
router.get("/logout", userController.logout);

module.exports = router;
