const HttpError = require("../models/http-error");
const Student = require("../models/student");
const Internship = require("../models/internship");
const { get } = require("mongoose");
let ObjectId = require("mongoose").Types.ObjectId;

//GET functions
async function getInternships(req, res, next) {}
async function getInternship(req, res, next) {}

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
