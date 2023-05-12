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

async function removeStudentFromInternshipsEntries(studentId) {
  await Internship.updateMany(
    { registeredStudents: studentId },
    { $pull: { registeredStudents: studentId } }
  );
}

async function removeInternshipFromStudentsEntries(internshipId) {
  await Student.updateMany(
    { registeredInterships: internshipId },
    { $pull: { registeredInterships: internshipId } }
  );
}

async function addStudentToInternshipEntry(studentId, internshipId) {
  const _studentExists = await studentExists(studentId),
    _internshipExists = await internshipExists(internshipId);
  if (_studentExists && _internshipExists) {
    await Internship.findOneAndUpdate(
      { _id: internshipId },
      { $push: { registeredStudents: studentId } }
    );
  }
}

async function addInternshipToStudentEntry(studentId, internshipId) {
  const _studentExists = await studentExists(studentId),
    _internshipExists = await internshipExists(internshipId);
  if (_studentExists && _internshipExists) {
    await Student.findOneAndUpdate(
      { _id: studentId },
      { $push: { registeredInterships: internshipId } }
    );
  }
}

module.exports = {
  studentExists: studentExists,
  internshipExists: internshipExists,
  removeStudentFromInternshipsEntries: removeStudentFromInternshipsEntries,
  removeInternshipFromStudentsEntries: removeInternshipFromStudentsEntries,
  addStudentToInternshipEntry: addStudentToInternshipEntry,
  addInternshipToStudentEntry: addInternshipToStudentEntry,
};
