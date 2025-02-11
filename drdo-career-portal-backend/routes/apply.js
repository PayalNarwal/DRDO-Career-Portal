const express = require("express");
const router = express.Router();
const { submitApplication } = require("../controllers/apply");
const { isUserLoggedIn } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

// Submit Application Route
router.post(
    "/",
    isUserLoggedIn,
    upload.fields([
        { name: "marksheet_10", maxCount: 1 },
        { name: "marksheet_12", maxCount: 1 },
        { name: "graduationMarksheet", maxCount: 1 },
        { name: "resume", maxCount: 1 },
        { name: "coverLetter", maxCount: 1 },
        { name: "photoID", maxCount: 1 },
    ]),
    submitApplication
);

module.exports = router;
