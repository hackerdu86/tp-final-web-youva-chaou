const HttpError = require("../models/http-error");
const Student = require("../models/student");
//Useful functions declarations
const {
  studentExists,
  addInternshipToStudentEntry,
  removeStudentFromInternshipsEntries,
  addStudentToInternshipEntry,
} = require("../utils/useful-functions");

//GET functions
async function getStudents(req, res, next) {
  let students = [];
  try {
    students = await Student.find({});
    res.json({
      students: students.map((student) => {
        return student.toObject({ getters: true });
      }),
    });
  } catch (err) {
    console.log(err);
    new HttpError("Error while trying to fetch students", 500);
  }
}

async function getStudent(req, res, next) {
  const studentId = req.params.id;
  try {
    const exists = await studentExists(studentId);
    if (!exists) {
      next(new HttpError("This student does not exist", 404));
    }
    const student = await Student.findById(studentId);
    res.json({ student: student.toObject({ getters: true }) });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while verifying student's existance", 500));
  }
}

//POST functions
async function addStudent(req, res, next) {
  const { daNumber, studentFullName, studentEmail, exitProfil } = req.body;
  try {
    const studentToAdd = new Student({
      daNumber: daNumber,
      studentFullName: studentFullName,
      studentEmail: studentEmail,
      exitProfil: exitProfil,
      registeredInterships: [],
    });
    await studentToAdd.save();
    res.status(201).json({ student: studentToAdd.toObject({ getters: true }) });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Erreur while creating student", 500));
  }
}

//PATCH functions
async function addStudentToInternship(req, res, next) {
  const studentId = req.params.studentId;
  const internshipId = req.params.internshipId;
  try {
    const exists = await studentExists(studentId);
    if (!exists) {
      next(new HttpError("This student does not exist", 404));
    }
    await addStudentToInternshipEntry(studentId, internshipId);
    await addInternshipToStudentEntry(studentId, internshipId);
    res
      .status(201)
      .json({ message: "Student was successfully registered to internship" });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("Error while registering student to internship", 500)
    );
  }
}

//DELETE functions
async function deleteStudent(req, res, next) {
  const studentId = req.params.id;
  try {
    const exists = await studentExists(studentId);
    if (!exists) {
      next(new HttpError("This student does not exist", 404));
    }
    await Student.deleteOne({ _id: studentId });
    await removeStudentFromInternshipsEntries(studentId);
    res.status(200).json({ message: "Student was successfully deleted and removed from internships entries" });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while trying to delete student", 500));
  }
}

module.exports = {
  getStudents: getStudents,
  getStudent: getStudent,
  addStudent: addStudent,
  addStudentToInternship: addStudentToInternship,
  deleteStudent: deleteStudent,
};
