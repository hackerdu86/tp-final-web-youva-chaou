const HttpError = require("../models/http-error");
const Student = require("../models/student");
const Internship = require("../models/internship");
const ObjectId = require("mongoose").Types.ObjectId;
const studentExists = require("../utils/existances-controller").studentExists;

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
    new HttpError("Erreur lors de la récupération des étudiants", 500);
  }
}

async function getStudent(req, res, next) {
  const studentId = req.params.id;
  try {
    const exists = await studentExists(studentId);
    if (!exists) {
      next(new HttpError("Cet étudiant n'existe pas", 404));
    }
    const student = await Student.findById(studentId);
    res.json({ student: student.toObject({ getters: true }) });
  } catch (err) {
    console.log(err);
    next(
      new HttpError(
        "Erreur lors de la vérification de l'existance de l'étudiant",
        500
      )
    );
  }
}

//POST functions
async function addStudent(req, res, next) {}

//PATCH functions
async function addStudentToInternship(req, res, next) {}

//DELETE functions
async function deleteStudent(req, res, next) {}

module.exports = {
  getStudents: getStudents,
  getStudent: getStudent,
  addStudent: addStudent,
  addStudentToInternship: addStudentToInternship,
  deleteStudent: deleteStudent,
};
