const express = require("express");

const studentController = require("../controllers/students-controller")
const router = express.Router();

router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudent);

router.post('/', studentController.addStudent);

router.patch('/:studentId/internships/:internshipId', studentController.addStudentToInternship);

router.delete('/:id', studentController.deleteStudent);


module.exports = router;
