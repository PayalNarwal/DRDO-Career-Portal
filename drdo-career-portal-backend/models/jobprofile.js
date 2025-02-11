const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Admin = require("./admin.js");

const JobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    document: {
        url: String,
        filename: String,
    },
    status: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
    },
});

module.exports = mongoose.model("JobProfile", JobSchema);
