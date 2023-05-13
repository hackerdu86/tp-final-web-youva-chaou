import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function AddStudentForm() {
  function onRegisterButtonClick() {
    console.log("dsds");
  }

  return (
    <form>
      <div className="card">
        <div className="card-header">Inscription d'un étudiant</div>
        <div className="card-body">
          <div className="form-group row">
            <label htmlFor="text" className="col-4 col-form-label">
              Da de l'étudiant
            </label>
            <div className="col-8">
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
                  className="form-control"
                  required="required"
                  aria-describedby="textHelpBlock"
                ></input>
              </div>
              <span id="textHelpBlock" className="form-text text-muted">
                Chiffres uniquement
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text1" className="col-4 col-form-label">
              Nom complet de l'étudiant
            </label>
            <div className="col-8">
              <input
                id="text1"
                name="text1"
                placeholder="Nom de famille et prénom"
                type="text"
                className="form-control"
                required="required"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text2" className="col-4 col-form-label">
              Courriel de l'étudiant
            </label>
            <div className="col-8">
              <input
                id="text2"
                name="text2"
                placeholder="exemple@cmontmorency.qc.ca"
                type="text"
                className="form-control"
                required="required"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4">Profil de l'étudiant</label>
            <div className="col-8">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  name="radio"
                  id="radio_0"
                  type="radio"
                  className="custom-control-input"
                  value="profil1"
                  defaultChecked
                ></input>
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
                ></input>
                <label htmlFor="radio_1" className="custom-control-label">
                  Réseaux et sécurité
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button
                onClick={onRegisterButtonClick}
                className="btn btn-primary"
              >
                Inscrire l'étudiant
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddStudentForm;
