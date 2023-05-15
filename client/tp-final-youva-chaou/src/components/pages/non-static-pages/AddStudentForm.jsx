import React from "react";
import { createRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import apiStudentManager from "../../../utils/api-student-manager";

function AddStudentForm() {
  function onRegisterButtonClick(event) {
    event.preventDefault();
    const daNumber = daNumberRef.current.value.trim(),
      fullName = fullNameRef.current.value.trim(),
      email = emailRef.current.value.trim(),
      profilType = profilTypeRef.current.checked
        ? "Développement d'applications"
        : "Réseaux et sécurité";
    console.log(daNumber, fullName, email, profilType);
    if (!daNumber || !fullName || !email || !profilType) {
      setAlertPlaceHolder(fieldsNotFilledAlertComponent);
      return;
    }
    setSpinnerClass(spinnerClassName);

    //Posting student object to server
    apiStudentManager
      .createStudentEntry(daNumber, fullName, email, profilType)
      .then((res) => {
        console.log(res);
        setSpinnerClass(null);
        setAlertPlaceHolder(studentCreatedAlertComponent);
      })
      .catch((err) => {
        console.log(err);
        setSpinnerClass(null);
        setAlertPlaceHolder(unknownErrorAlertComponent);
      });
  }
  //States
  const [alertPlaceHolder, setAlertPlaceHolder] = useState(null);
  const [spinnerClass, setSpinnerClass] = useState(null);

  const fieldsNotFilledAlertComponent = (
    <div class="alert alert-danger" role="alert">
      Veuillez remplir tous les champs.
    </div>
  );
  const unknownErrorAlertComponent = (
    <div class="alert alert-danger" role="alert">
      Une erreur s'est produite, veuillez communiquer avec le coordonateur des
      stage: sylvain.labranche@cmontmorency.qc.ca
    </div>
  );
  const studentCreatedAlertComponent = (
    <div class="alert alert-success" role="alert">
      L'étudiant a bien été inscrit.
    </div>
  );

  const spinnerClassName = "spinner-border spinner-border-sm";

  //Fields refs
  const daNumberRef = createRef(),
    fullNameRef = createRef(),
    emailRef = createRef(),
    profilTypeRef = createRef(),
    sumbitButtonRef = createRef();

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h5>Inscription d'un étudiant</h5>
        </div>
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
                ref={daNumberRef}
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
              ref={fullNameRef}
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
              ref={emailRef}
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
                  ref={profilTypeRef}
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
            <button
              onClick={onRegisterButtonClick}
              className="btn btn-primary"
              ref={sumbitButtonRef}
            >
              <span
                className={spinnerClass}
                role="status"
                aria-hidden="true"
              ></span>
              Inscrire l'étudiant
            </button>
          </div>
          {alertPlaceHolder}
        </div>
      </div>
    </form>
  );
}

export default AddStudentForm;
