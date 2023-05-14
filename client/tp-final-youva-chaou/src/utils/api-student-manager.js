import axios from "axios";
const URL = "/students/";

//GET
async function getStudentsEntries() {
  return await axios.get(URL);
}

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
async function registerStudentEntry(studentId, internshipId) {
  return await axios.patch(URL + studentId + "/internships/" + internshipId);
}

//DELETE
async function deleteStudentEntry(studentId) {
  return await axios.delete(URL + studentId);
}

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
  createStudentEntry: createStudentEntry,
  registerStudentEntry: registerStudentEntry,
  deleteStudentEntry: deleteStudentEntry,
};

export default apiStudentManager;
