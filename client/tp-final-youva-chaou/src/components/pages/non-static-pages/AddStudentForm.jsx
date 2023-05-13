import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function AddStudentForm() {
  function onRegisterButtonClick() {
    console.log("dsds");
  }

  return (
    <form>
      <div className="card">
        <div className="card-header">Inscription d'un étudiant</div>
        <div className="card-body">
          <div class="form-group">
            <label for="text">Da de l'étudiant</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-id-card-o"></i>
                </div>
              </div>
              <input
                id="text"
                name="text"
                type="text"
                aria-describedby="textHelpBlock"
                required="required"
                class="form-control"
              />
            </div>
            <span id="textHelpBlock" class="form-text text-muted">
              Chiffres uniquement
            </span>
          </div>
          <div class="form-group">
            <label for="text1">Nom complet de l'étudiant</label>
            <input
              id="text1"
              name="text1"
              placeholder="Prénom et nom de famille"
              type="text"
              required="required"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="text2">Courriel de l'étudiant</label>
            <input
              id="text2"
              name="text2"
              placeholder="exemple@cmontmorency.qc.ca"
              type="text"
              required="required"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Profil de l'étudiant</label>
            <div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  name="radio"
                  id="radio_0"
                  type="radio"
                  class="custom-control-input"
                  value="profil1"
                  defaultChecked
                />
                <label for="radio_0" class="custom-control-label">
                  Développement d'applications
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  name="radio"
                  id="radio_1"
                  type="radio"
                  class="custom-control-input"
                  value="profil2"
                />
                <label for="radio_1" class="custom-control-label">
                  Réseaux et sécurité
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <button onClick={onRegisterButtonClick} class="btn btn-primary">
              Inscrire l'étudiant
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddStudentForm;
