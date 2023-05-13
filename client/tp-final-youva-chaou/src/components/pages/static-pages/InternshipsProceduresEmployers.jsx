import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function InternshipsProceduresEmployers() {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Formulaire d'inscription de milieu de stage</h5>
        <div className="card-body">
          <p>
            Stages réguliers ayant lieu à la session hiver Les stages sont du 21
            janvier au 3 mai 2019 (il est toutefois possible après entente avec
            le coordonnateur de débuter le stage un peu plus tôt) sur réception
            de ce formulaire, le coordonnateur des stages entrera en contact
            avec le responsable en entreprise pour discuter du stage.
          </p>
          <br />
          <p>
            Veuillez vous référez à la page{" "}
            <Link to="/profiles-and-skills">Profil de sortie</Link> pour
            connaître le profil de sortie et les compétences des étudiants.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InternshipsProceduresEmployers;
