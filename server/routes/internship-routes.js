const express = require("express");

const internshipController = require("../controllers/internships-controller")
const router = express.Router();

router.get('/', internshipController.getInternships);
router.get('/:id', internshipController.getInternship);

router.post('/', internshipController.addInternship);

router.delete('/:id', internshipController.deleteInternship);


module.exports = router;
