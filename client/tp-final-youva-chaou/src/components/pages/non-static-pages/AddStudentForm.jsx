import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function AddStudentForm() {
  function onRegisterButtonClick(event) {

  }

  return (
    <form>
      <div className="card">
        <div className="card-header">Inscription d'un étudiant</div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="text">Da de l'étudiant</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-id-card-o"></i>
                </div>
              </div>
              <input
                id="text"
                name="text"
                type="text"
                aria-describedby="textHelpBlock"
                required="required"
                className="form-control"
              />
            </div>
            <span id="textHelpBlock" className="form-text text-muted">
              Chiffres uniquement
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="text1">Nom complet de l'étudiant</label>
            <input
              id="text1"
              name="text1"
              placeholder="Prénom et nom de famille"
              type="text"
              required="required"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text2">Courriel de l'étudiant</label>
            <input
              id="text2"
              name="text2"
              placeholder="exemple@cmontmorency.qc.ca"
              type="text"
              required="required"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Profil de l'étudiant</label>
            <div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  name="radio"
                  id="radio_0"
                  type="radio"
                  className="custom-control-input"
                  value="profil1"
                  defaultChecked
                />
                <label htmlFor="radio_0" className="custom-control-label">
                  Développement d'applications
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  name="radio"
                  id="radio_1"
                  type="radio"
                  className="custom-control-input"
                  value="profil2"
                />
                <label htmlFor="radio_1" className="custom-control-label">
                  Réseaux et sécurité
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button onClick={onRegisterButtonClick} className="btn btn-primary">
              Inscrire l'étudiant
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddStudentForm;
