const User = require("../models/user");
const passport = require("passport");
const ErrorResponse = require("../middlewares/error");

// Signup API
module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username: email });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to DRDO Careers!");
            return res
                .status(200)
                .json({ success: true, message: "Signup successful!" });
        });
    } catch (e) {
        console.log("Signup Error:", e.message);
        req.flash("error", e.message);
        return res.status(400).json({ success: false, message: e.message });
    }
};

// Login API
module.exports.login = async (req, res) => {
    return res.json({ success: true, message: "Login successful!" });
};
// Logout API
module.exports.logout = async (req, res) => {
    req.logout((err) => {
        if (err)
            return res
                .status(500)
                .json({ success: false, message: err.message });
        res.status(200).json({ success: true, message: "Logout successful!" });
    });
};
