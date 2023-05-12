const Student = require("../models/student");
const Internship = require("../models/internship");
let ObjectId = require("mongoose").Types.ObjectId;


async function studentExists(studentId) {
    let exists = false;
    if (ObjectId.isValid(studentId)) {
      exists = await Student.exists({ _id: studentId });
    }
    return exists;
}

async function internshipExists(internshipId) {
    let exists = false;
    if (ObjectId.isValid(internshipId)) {
      exists = await Internship.exists({ _id: internshipId });
    }
    return exists;
}

module.exports = {
    studentExists: studentExists,
    internshipExists: internshipExists
}