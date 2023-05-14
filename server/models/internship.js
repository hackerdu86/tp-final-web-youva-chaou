const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const internshipSchema = new Schema({
  contactFullName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactNumber: { type: String, required: true },
  companyName: { type: String, required: true },
  companyAdress: { type: String, required: true },
  internshipType: { type: String, required: true },
  availablePositions: { type: Number, required: true },
  internshipDescription: { type: String, required: true },
  internshipHourWage: { type: Number, required: true },
  registeredStudents: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
      required: false,
    },
  ],
});

module.exports = mongoose.model("Internship", internshipSchema);
