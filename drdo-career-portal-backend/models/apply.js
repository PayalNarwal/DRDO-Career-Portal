const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    marksheet_10: {
        url: String,
        filename: String,
    },
    marksheet_12: {
        url: String,
        filename: String,
    },
    graduationMarksheet: {
        url: String,
        filename: String,
    },
    resume: {
        url: String,
        filename: String,
    },
    coverLetter: {
        url: String,
        filename: String,
    },
    photoID: {
        url: String,
        filename: String,
    },
});

module.exports = mongoose.model("ApplyForm", ApplySchema);
