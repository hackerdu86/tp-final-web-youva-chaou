const HttpError = require("../models/http-error");
const Student = require("../models/student");
const Internship = require("../models/internship");
const {
  internshipExists,
  removeInternshipFromStudentsEntries,
} = require("../utils/useful-functions");

//GET functions
async function getInternships(req, res, next) {
  let internships = [];
  try {
    internships = await Internship.find({});
    res.json({
      internships: internships.map((internship) => {
        return internship.toObject({ getters: true });
      }),
    });
  } catch (err) {
    console.log(err);
    new HttpError("Error while trying to fetch internships", 500);
  }
}
async function getInternship(req, res, next) {
  const internshipId = req.params.id;
  try {
    const exists = await internshipExists(internshipId);
    if (!exists) {
      next(new HttpError("This internship does not exist", 404));
    }
    const internship = await Internship.findById(internshipId);
    res.json({ internship: internship.toObject({ getters: true }) });
  } catch (err) {
    console.log(err);
    next(new HttpError("Error while verifying internship's existance", 500));
  }
}

//POST functions
async function addInternship(req, res, next) {
  const {
    contactFullName,
    contactEmail,
    contactNumber,
    companyName,
    companyAdress,
    internshipType,
    availablePositions,
    internshipDescription,
    internshipHourWage,
  } = req.body;
  try {
    const internshipToAdd = new Internship({
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
    });
    await internshipToAdd.save();
    res
      .status(201)
      .json({ internship: internshipToAdd.toObject({ getters: true }) });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while creating internship", 500));
  }
}

//DELETE functions
async function deleteInternship(req, res, next) {
  const internshipId = req.params.id;
  try {
    const exists = await internshipExists(internshipId);
    if (!exists) {
      next(new HttpError("This internship does not exist", 404));
    }
    await Internship.deleteOne({ _id: internshipId });
    await removeInternshipFromStudentsEntries(internshipId);
    res
      .status(200)
      .json({
        message:
          "Intership was successfully deleted and removed from all students entries",
      });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while trying to delete internship", 500));
  }
}

module.exports = {
  getInternships: getInternships,
  getInternship: getInternship,
  addInternship: addInternship,
  deleteInternship: deleteInternship,
};
