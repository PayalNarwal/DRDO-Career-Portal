const JobProfile = require("./models/jobprofile");

module.exports.isAdminLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated() || req.user.type !== "Admin") {
        return res
            .status(401)
            .json({ error: "Unauthorized. Admin must be logged in" });
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const job = await JobProfile.findById(id);
    if (!job || job.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: "Unauthorized" });
    }
    next();
};

module.exports.isUserLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated() || req.user.type !== "User") {
        return res
            .status(401)
            .json({ error: "Unauthorized. User login required." });
    }
    next();
};
