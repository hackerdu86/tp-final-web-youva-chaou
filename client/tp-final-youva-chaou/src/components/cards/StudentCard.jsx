import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function StudentCard(props) {
  return (
    <div
      class={
        "card " +
        (props.primaryStyle ? "text-bg-light" : "text-bg-secondary") +
        "mb-3"
      }
      style={{ maxWidth: "90%", margin: "1rem auto" }}
    >
      <h5 class="card-header">
        Nom de l'étudiant: {props.fullName} | ID: {props.studentId}{" "}
      </h5>
      <div class="card-body">
        <h6 class="card-title">Courriel: {props.email}</h6>
        <h6 class="card-title">Profil: {props.profil}</h6>
        <h6 class="card-title">
          Stages inscrits: {props.registeredInterships}
        </h6>
        <button class="btn btn-primary">Inscrire</button>
        <span class="dropdown">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Stages
          </a>

          <ul class="dropdown-menu">
            
          </ul>
        </span>
        <button class="btn btn-danger" style={{ float: "right" }}>
          Supprimer cet étudiant
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
