const HttpError = require("../models/http-error");
const Student = require("../models/student");
const Internship = require("../models/internship");
let ObjectId = require("mongoose").Types.ObjectId;

//GET functions
async function getStudents(req, res, next) {}

async function getStudent(req, res, next) {}

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
