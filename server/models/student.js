const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  daNumber: { type: String, required: true },
  studentFullName: { type: String, required: true },
  studentEmail: { type: String, required: true },
  exitProfil: { type: String, required: true },
  registeredInterships: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Internship",
      required: false,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
