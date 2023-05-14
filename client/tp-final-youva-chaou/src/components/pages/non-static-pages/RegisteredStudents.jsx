import { useEffect, useState } from "react";
import apiStudentManager from "../../../utils/api-student-manager";
import StudentCard from "../../cards/StudentCard";
import CustomLoader from "../../animated-components/CustomLoader";

function RegisteredStudents() {
  function deleteStudent(studentId) {
    apiStudentManager
      .deleteStudentEntry(studentId)
      .then((res) => {
        console.log(res);
        let studentListUpdated = studentsList.filter((student) => {
          return student._id !== studentId;
        });
        setStudentsList(studentListUpdated);
      })
      .catch((err) => {
        console.log(err);
        setContentPlaceHolder(
          <div class="alert alert-danger" role="alert">
            Une erreur s'est produite, veuillez communiquer avec le coordonateur
            des stage: sylvain.labranche@cmontmorency.qc.ca
          </div>
        );
      });
  }

  const [studentsList, setStudentsList] = useState([]);
  const [contentPlaceHolder, setContentPlaceHolder] = useState(
    <CustomLoader />
  );
  useEffect(() => {
    apiStudentManager
      .getStudentsEntries()
      .then((res) => {
        console.log(res);
        setContentPlaceHolder(null);
        setStudentsList(res.data.students);
      })
      .catch((err) => {
        console.log(err);
        setContentPlaceHolder(
          <div class="alert alert-danger" role="alert">
            Une erreur s'est produite, veuillez communiquer avec le coordonateur
            des stage: sylvain.labranche@cmontmorency.qc.ca
          </div>
        );
      });
  }, []);

  return (
    <div class="card">
      <div className="card-header">
        <h5>Étudiants éligibles au programme de stage</h5>
      </div>
      <div class="card-body">
        <div class="row">
          {contentPlaceHolder}
          {studentsList.map((student, index) => {
            let primaryStyle = true;
            if (index % 2 === 0) {
              primaryStyle = false;
            }
            return (
              <StudentCard
                studentId={student._id}
                fullName={student.studentFullName}
                email={student.studentEmail}
                profil={student.exitProfil}
                registeredInterships={student.registeredInterships}
                primaryStyle={primaryStyle}
                deleteStudent={deleteStudent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RegisteredStudents;
