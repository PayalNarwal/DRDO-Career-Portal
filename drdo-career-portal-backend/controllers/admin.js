const Admin = require("../models/admin");
const passport = require("passport");

// Admin Signup API
module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newAdmin = new Admin({ email, username: email });
    const registeredAdmin = await Admin.register(newAdmin, password);
    req.login(registeredAdmin, (err) => {
      if (err) {
        return next(err);
      }
      return res
        .status(200)
        .json({ success: true, message: "Admin signup successful!" });
    });
  } catch (e) {
    console.log("Admin Signup Error:", e.message);
    return res.status(400).json({ success: false, message: e.message });
  }
};

// Admin Login API
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found.",
      });
    }
    const auth = Admin.authenticate();
    auth(email, password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password.",
        });
      }

      req.login(admin, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.status(200).json({
          data: { email: admin.email },
          success: true,
          message: "Admin login successful!",
        });
      });
    });
  } catch (error) {
    console.error("Admin Login Error:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// Admin Logout API
module.exports.logout = async (req, res) => {
  req.logout((err) => {
    if (err)
      return res.status(500).json({ success: false, message: err.message });
    res.status(200).json({
      success: true,
      message: "Admin logout successful!",
    });
  });
};
