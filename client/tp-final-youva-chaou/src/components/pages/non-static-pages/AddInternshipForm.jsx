import React from "react";
import { useState, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import sendEmail from "../../../utils/email-sender";
import apiInternshipManager from "../../../utils/api-internship-manager";

function AddInternshipForm() {
  function onRegisterButtonClick(event) {
    event.preventDefault();
    const companyName = companyNameRef.current.value.trim(),
      companyAdress = companyAdressRef.current.value.trim(),
      contactFullName = contactFullNameRef.current.value.trim(),
      contactEmail = contactEmailRef.current.value.trim(),
      contactNumber = contactNumberRef.current.value.trim(),
      profilType = profilTypeRef.current.checked
        ? "Développement d'applications"
        : "Réseaux et sécurité",
      availablePosition = availablePositionRef.current.value,
      description = descriptionRef.current.value.trim(),
      hourWage = hourWageRef.current.value;
    console.log(
      companyName,
      companyAdress,
      contactFullName,
      contactEmail,
      contactNumber,
      profilType,
      description,
      hourWage
    );
    if (
      !companyName ||
      !companyAdress ||
      !contactFullName ||
      !contactEmail ||
      !contactNumber ||
      !description ||
      !availablePosition ||
      !hourWage
    ) {
      setAlertPlaceHolder(fieldsNotFilledAlertComponent);
      return;
    }
    setSpinnerClass(spinnerClassName);

    //Posting internship object to server
    apiInternshipManager
      .createInternshipEntry(
        contactFullName,
        contactEmail,
        contactNumber,
        companyName,
        companyAdress,
        profilType,
        availablePosition,
        description,
        hourWage
      )
      .then((res) => {
        console.log(res);
        setSpinnerClass(null);
        setAlertPlaceHolder(internshipCreatedAlertComponent);
        const emailBody =
          "Compagnie: " +
          companyName +
          "\n Contact du stage: \n" +
          contactFullName +
          "\n" +
          contactEmail +
          "\n" +
          contactNumber;
        //sendEmail("youvachaou1234@gmail.com", "Un nouveau stage a été ajouté");
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
  const internshipCreatedAlertComponent = (
    <div class="alert alert-success" role="alert">
      Le stage a bien été créé.
    </div>
  );

  const spinnerClassName = "spinner-border spinner-border-sm";

  //Fields refs
  const companyNameRef = createRef(),
    companyAdressRef = createRef(),
    contactFullNameRef = createRef(),
    contactEmailRef = createRef(),
    contactNumberRef = createRef(),
    profilTypeRef = createRef(),
    availablePositionRef = createRef(),
    descriptionRef = createRef(),
    hourWageRef = createRef(),
    sumbitButtonRef = createRef();

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
                ref={companyNameRef}
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
                  ref={companyAdressRef}
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
                  ref={contactFullNameRef}
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
                  ref={contactEmailRef}
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
                  ref={contactNumberRef}
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
              <label htmlFor="textarea">Description du stage</label>
              <textarea
                id="textarea"
                name="textarea"
                cols="40"
                rows="5"
                className="form-control"
                aria-describedby="textareaHelpBlock"
                required="required"
                ref={descriptionRef}
              ></textarea>
              <span id="textareaHelpBlock" className="form-text text-muted">
                Fournissez une brève description du stage, incluez si vous le
                souhaitez les différentes tâches associés à celui-ci et les
                exigences générales.
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="text7">Nombre de positions disponibles</label>
              <input
                id="text7"
                name="text7"
                placeholder="Nombre d'étudiant maximum qui seront sélectionné pour ce stage"
                type="number"
                className="form-control"
                required="required"
                ref={availablePositionRef}
              />
            </div>

            <div className="form-group">
              <label htmlFor="text3">Salaire</label>
              <input
                id="text3"
                name="text3"
                placeholder="$/heure (approximatif)"
                type="number"
                className="form-control"
                required="required"
                ref={hourWageRef}
              />
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
                Ajouter le stage
              </button>
            </div>
            {alertPlaceHolder}
          </form>
        </div>
      </div>
    </form>
  );
}

export default AddInternshipForm;
