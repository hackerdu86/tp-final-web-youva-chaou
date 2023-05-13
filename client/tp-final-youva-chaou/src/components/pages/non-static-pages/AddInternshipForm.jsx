import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AddInternshipForm() {
  function onRegisterButtonClick(event) {
  }

  return (
    <form>
      <div className="card">
        <div className="card-header">
        <h5>Ajout d'un nouveau stage</h5>
            </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="text1">Nom de l'entreprise</label>
              <input
                id="text1"
                name="text1"
                type="text"
                required="required"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="text5">Adresse de l'entreprise</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-map-marker"></i>
                  </div>
                </div>
                <input
                  id="text5"
                  name="text5"
                  type="text"
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="text">Nom de la personne contact</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-address-card"></i>
                  </div>
                </div>
                <input
                  id="text"
                  name="text"
                  placeholder="Prénom et nom de famille"
                  type="text"
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="text2">Courriel de la personne contact</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-at"></i>
                  </div>
                </div>
                <input
                  id="text2"
                  name="text2"
                  placeholder="exemple@domain.com"
                  type="text"
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="text4">
                Numéro de téléphone de la personne contact
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-phone"></i>
                  </div>
                </div>
                <input
                  id="text4"
                  name="text4"
                  placeholder="xxx-xxx-xxxx"
                  type="text"
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Type de stage</label>
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
              <label htmlFor="textarea">Description du stage</label>
              <textarea
                id="textarea"
                name="textarea"
                cols="40"
                rows="5"
                className="form-control"
                aria-describedby="textareaHelpBlock"
                required="required"
              ></textarea>
              <span id="textareaHelpBlock" className="form-text text-muted">
                Fournissez une brève description du stage, incluez si vous le
                souhaitez les différentes tâches associés à celui-ci et les
                exigences générales.
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="text3">Salaire</label>
              <input
                id="text3"
                name="text3"
                placeholder="$/heure (approximatif)"
                type="text"
                className="form-control"
                required="required"
              />
            </div>
            <div className="form-group">
              <button
                onClick={onRegisterButtonClick}
                className="btn btn-primary"
              >
                Ajouter le stage
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
  );
}

export default AddInternshipForm;
