import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function InternshipCard(props) {
  function autoDestroy() {
    props.deleteInternship(props.internshipId);
  }

  return (
    <div class="col-sm-6">
      <div class="card" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <h5 class="card-header">
          {props.companyName} <br></br>
          <br></br>
          {props.companyAdress}
        </h5>

        <div class="card-body">
          <h5 class="card-title">Contact du stage:</h5>

          <p class="card-text">Nom complet: {props.contactFullName}</p>
          <p class="card-text">Numéro de téléphone: {props.contactNumber}</p>
          <p class="card-text">Adresse courriel: {props.contactEmail}</p>
          <p class="card-text"></p>
          <h5 class="card-title">À propos du stage:</h5>
          <p class="card-text">{props.description}</p>
          <p class="card-text">Type de stage: {props.internshipType}</p>
          <p class="card-text">
            Nombre de places disponibles: {props.availablePositions}
          </p>
          <p class="card-text">Salaire: {props.hourWage}$/Heure</p>
          <button class="btn btn-danger" onClick={autoDestroy}>
            Supprimer ce stage
          </button>
        </div>
      </div>
    </div>
  );
}

export default InternshipCard;
