const ApplyForm = require("../models/apply");

const submitApplication = async (req, res) => {
    try {
        const { name, mobile, email, dob, address } = req.body;
        const files = req.files;

        const application = new ApplyForm({
            name,
            mobile,
            email,
            dob,
            address,
            marksheet_10: files.marksheet_10
                ? {
                      url: files.marksheet_10[0].path,
                      filename: files.marksheet_10[0].filename,
                  }
                : null,
            marksheet_12: files.marksheet_12
                ? {
                      url: files.marksheet_12[0].path,
                      filename: files.marksheet_12[0].filename,
                  }
                : null,
            graduationMarksheet: files.graduationMarksheet
                ? {
                      url: files.graduationMarksheet[0].path,
                      filename: files.graduationMarksheet[0].filename,
                  }
                : null,
            resume: files.resume
                ? {
                      url: files.resume[0].path,
                      filename: files.resume[0].filename,
                  }
                : null,
            coverLetter: files.coverLetter
                ? {
                      url: files.coverLetter[0].path,
                      filename: files.coverLetter[0].filename,
                  }
                : null,
            photoID: files.photoID
                ? {
                      url: files.photoID[0].path,
                      filename: files.photoID[0].filename,
                  }
                : null,
        });

        await application.save();
        res.status(201).json({
            success: true,
            message: "Application submitted!",
            application,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Application submission failed.",
            error: error.message,
        });
    }
};

module.exports = { submitApplication };
