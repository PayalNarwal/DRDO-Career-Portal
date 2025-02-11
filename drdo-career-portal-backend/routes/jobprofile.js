const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isAdminLoggedIn, isOwner } = require("../middleware.js");
const jobController = require("../controllers/jobprofile.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(jobController.index))
    .post(
        isAdminLoggedIn,
        upload.single("document"),
        wrapAsync(jobController.createJob)
    );

router
    .route("/:id")
    .get(wrapAsync(jobController.showJob))
    .put(
        isAdminLoggedIn,
        isOwner,
        upload.single("document"),
        wrapAsync(jobController.updateJob)
    )
    .delete(isAdminLoggedIn, isOwner, wrapAsync(jobController.deleteJob));

//Edit Route
router.get(
    "/:id/edit",
    isAdminLoggedIn,
    isOwner,
    wrapAsync(jobController.editJob)
);

module.exports = router;
