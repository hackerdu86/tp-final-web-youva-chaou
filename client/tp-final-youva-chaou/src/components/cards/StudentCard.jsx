import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function StudentCard(props) {
  function autoDestroy() {
    props.deleteStudent(props.studentId);
  }

  function autoRegisterToInternship(internshipId) {
    props.registerStudentToInternship(props.studentId, internshipId, () => {
      setRegisteredInternshipsList([
        ...registeredIntershipsList,
        props.internshipsList.find((internship) => {
          return internship._id === internshipId;
        }),
      ]);
    });
  }

  const [registeredIntershipsList, setRegisteredInternshipsList] = useState(
    props.registeredInterships
  );

  return (
    <div
      class={
        "card " + (!props.primaryStyle ? "text-bg-light" : "text-bg-secondary")
      }
      style={{ maxWidth: "90%", margin: "1rem auto" }}
    >
      <h5 class="card-header">Nom de l'étudiant: {props.fullName}</h5>
      <div class="card-body">
        <h6 class="card-title">Courriel: {props.email}</h6>
        <h6 class="card-title">Profil: {props.profil}</h6>
        <span class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Inscrire à un stage
            <span class="caret"></span>
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {props.internshipsList
              .filter((internship) => {
                return !registeredIntershipsList.includes(internship._id);
              })
              .map((notRegisteredInternships) => {
                const internshipId = notRegisteredInternships.id;
                return (
                  <li
                    class={"dropdown-item"}
                    onClick={() => {
                      autoRegisterToInternship(internshipId);
                    }}
                  >
                    {" "}
                    {notRegisteredInternships.companyName +
                      ": (" +
                      internshipId +
                      ")"}
                  </li>
                );
              })}
            <li>
              <hr class="dropdown-divider" />
            </li>
            {props.internshipsList
              .filter((internship) => {
                return registeredIntershipsList.includes(internship._id);
              })
              .map((alreadyRegisteredInternships) => {
                return (
                  <li class={"dropdown-item disabled"}>
                    {" "}
                    {alreadyRegisteredInternships.companyName +
                      ": (" +
                      alreadyRegisteredInternships.id +
                      ") | Déjà inscrit"}
                  </li>
                );
              })}
          </ul>
        </span>
        <button
          class="btn btn-danger"
          style={{ float: "right" }}
          onClick={autoDestroy}
        >
          Supprimer cet étudiant
        </button>
      </div>
      <div class="card-footer text-body-secondary">ID: {props.studentId}</div>
    </div>
  );
}

export default StudentCard;
