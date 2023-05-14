import axios from "axios";
const URL = "/internships/";

//GET
async function getInternshipsEntries() {
  return await axios.get(URL);
}

//POST
async function createInternshipEntry(
  contactFullName,
  contactEmail,
  contactNumber,
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
    contactNumber,
    companyName,
    companyAdress,
    internshipType,
    availablePositions,
    internshipDescription,
    internshipHourWage
  );
  return await axios.post(URL, internshipEntry);
}

//DELETE
async function deleteInternshipEntry(internshipId) {
  return await axios.delete(URL + internshipId);
}

//Other functions
function fromInternshipDateToJsonObject(
  contactFullName,
  contactEmail,
  contactNumber,
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
    contactNumber: contactNumber,
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
  createInternshipEntry: createInternshipEntry,
  deleteInternshipEntry: deleteInternshipEntry,
};

export default apiInternshipManager;
