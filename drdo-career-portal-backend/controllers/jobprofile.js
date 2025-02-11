const JobProfile = require("../models/jobprofile.js");
const { cloudinary } = require("../cloudConfig");

// Get all job profiles
module.exports.index = async (req, res) => {
    const allJobs = await JobProfile.find({}).populate("owner");
    res.json(allJobs);
};

// Get a single job profile
module.exports.showJob = async (req, res) => {
    const { id } = req.params;
    const job = await JobProfile.findById(id).populate("owner");
    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
};

// Create a new job profile
module.exports.createJob = async (req, res) => {
    const { title, category, startDate, endDate, status } = req.body;
    const owner = req.user._id;

    const document = req.file
        ? { url: req.file.path, filename: req.file.filename }
        : null;

    const newJob = new JobProfile({
        title,
        category,
        startDate,
        endDate,
        status,
        document,
        owner,
    });

    await newJob.save();
    res.status(201).json(newJob);
};

// Edit job profile
module.exports.editJob = async (req, res) => {
    const { id } = req.params;
    const job = await JobProfile.findById(id);
    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
};

// Update job profile
module.exports.updateJob = async (req, res) => {
    const { id } = req.params;
    const job = await JobProfile.findById(id);
    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }

    if (job.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    Object.assign(job, req.body);

    if (req.file) {
        // Delete old file from Cloudinary
        if (job.document && job.document.filename) {
            await cloudinary.uploader.destroy(job.document.filename);
        }
        job.document = { url: req.file.path, filename: req.file.filename };
    }

    await job.save();
    res.json(job);
};

// Delete job profile
module.exports.deleteJob = async (req, res) => {
    const { id } = req.params;
    const job = await JobProfile.findById(id);
    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }

    if (job.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    if (job.document && job.document.filename) {
        await cloudinary.uploader.destroy(job.document.filename);
    }

    await JobProfile.findByIdAndDelete(id);
    res.json({ message: "Job deleted successfully" });
};
