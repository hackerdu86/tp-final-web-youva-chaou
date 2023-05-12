const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const internshipSchema = new Schema({});

module.exports = mongoose.model("Internship", internshipSchema);
