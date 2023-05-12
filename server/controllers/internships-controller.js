const HttpError = require("../models/http-error");
const Student = require("../models/student");
const Internship = require("../models/internship");
const { internshipExists } = require("../utils/existances-controller");
const studentExists = require("../utils/existances-controller").internshipExists;
let ObjectId = require("mongoose").Types.ObjectId;

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
    new HttpError("Erreur lors de la récupération des stages", 500);
  }
}
async function getInternship(req, res, next) {
    const internshipId = req.params.id;
    try {
      const exists = await internshipExists(internshipId);
      if (!exists) {
        next(new HttpError("Ce stage n'existe pas", 404));
      }
      const internship = await Internship.findById(internshipId);
      res.json({ internship: internship.toObject({ getters: true }) });
    } catch (err) {
      console.log(err);
      next(
        new HttpError(
          "Erreur lors de la vérification de l'existance du stage",
          500
        )
      );
    }
}

//POST functions
async function addInternship(req, res, next) {}

//DELETE functions
async function deleteInternship(req, res, next) {}

module.exports = {
  getInternships: getInternships,
  getInternship: getInternship,
  addInternship: addInternship,
  deleteInternship: deleteInternship,
};
