import axios from 'axios';
const URL = "/internships/";

//GET
async function getInternshipsEntries() {}

async function getInternshipEntry(internshipId) {}
//POST
async function createInternshipEntry(
  contactFullName,
  contactEmail,
  companyName,
  companyAdress,
  internshipType,
  availablePositions,
  internshipDescription,
  internshipHourWage
) {
  const internshipEntry = fromInternshipDateToJsonObject(
    contactFullName,
    contactEmail,
    companyName,
    companyAdress,
    internshipType,
    availablePositions,
    internshipDescription,
    internshipHourWage
  );
  return response = await axios.post(URL, internshipEntry)
}

//DELETE
async function deleteInternshipEntry(internshipId) {}

//Other functions
function fromInternshipDateToJsonObject(
  contactFullName,
  contactEmail,
  companyName,
  companyAdress,
  internshipType,
  availablePositions,
  internshipDescription,
  internshipHourWage
) {
  return {
    contactFullName: contactFullName,
    contactEmail: contactEmail,
    companyName: companyName,
    companyAdress: companyAdress,
    internshipType: internshipType,
    availablePositions: availablePositions,
    internshipDescription: internshipDescription,
    internshipHourWage: internshipHourWage,
    registeredStudents: [],
  };
}

const apiInternshipManager = {
  getInternshipsEntries: getInternshipsEntries,
  getInternshipEntry: getInternshipEntry,
  createInternshipEntry: createInternshipEntry,
  deleteInternshipEntry: deleteInternshipEntry,
};

export default apiInternshipManager;
