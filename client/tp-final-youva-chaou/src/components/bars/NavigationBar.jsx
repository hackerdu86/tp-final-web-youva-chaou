import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <img
          src={require("../../images/montmorency-small-logo.png")}
          style={{ width: "2rem", height: "2rem", paddingRight: "5px" }}
        />
        <Link className="navbar-brand" to="/">
          Collège Montmorency
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Page informatives
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/internship-procedures-employers"
                  >
                    Déroulement des stages {"(aux employeurs)"}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/internship-procedures-students"
                  >
                    Déroulement des stages {"(aux étudiants)"}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profiles-and-skills">
                    Profils et compétence des stagiaires
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/FAQ">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Étudiant
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/students/add-student-form"
                  >
                    Inscrire un étudiant
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/students/registered-students"
                  >
                    Étudiants inscrits
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stages
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/internships/add-internship-form"
                  >
                    Ajouter un stage
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/internships/available-internships"
                  >
                    Stages disponibles
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
