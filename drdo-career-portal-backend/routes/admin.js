const express = require("express");
const passport = require("passport");
const router = express.Router();
const Admin = require("../models/admin");
const adminController = require("../controllers/admin.js");

// Admin Signup
router.post("/signup", adminController.signup);

// Admin Login
router.post("/login", adminController.login);

// Admin Logout
router.get("/logout", adminController.logout);

module.exports = router;
