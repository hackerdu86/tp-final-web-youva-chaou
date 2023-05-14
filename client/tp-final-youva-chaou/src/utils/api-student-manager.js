import axios from "axios";
const URL = "/students/";

//GET
async function getStudentsEntries() {}

async function getStudentEntry(studentId) {}
//POST
async function createStudentEntry(
  daNumber,
  studentFullName,
  studentEmail,
  exitProfil
) {
  const studentEntry = fromStudentDateToJsonObject(
    daNumber,
    studentFullName,
    studentEmail,
    exitProfil
  );
  return await axios.post(URL, studentEntry);
}

//PATCH
async function registerStudentEntry(studentId, internshipId) {}

//DELETE
async function deleteStudentEntry(studentId) {}

//Other functions
function fromStudentDateToJsonObject(
  daNumber,
  studentFullName,
  studentEmail,
  exitProfil
) {
  return {
    daNumber: daNumber,
    studentFullName: studentFullName,
    studentEmail: studentEmail,
    exitProfil: exitProfil,
    registeredInterships: [],
  };
}

const apiStudentManager = {
  getStudentsEntries: getStudentsEntries,
  getStudentEntry: getStudentEntry,
  createStudentEntry: createStudentEntry,
  deleteStudentEntry: deleteStudentEntry,
};

export default apiStudentManager;
