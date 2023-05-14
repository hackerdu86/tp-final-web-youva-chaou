import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import apiInternshipManager from "../../../utils/api-internship-manager";
import CustomLoader from "../../animated-components/CustomLoader";
import InternshipCard from "../../cards/InternshipCard";
import "../../styles/RadioButtons.css";

function AvailableInternships() {
  //Events
  function onChangeRadioButton() {
    if (everyInternshipRef.current.checked) {
      setContentPlaceHolder(fromListToInternshipCard(currentInternshipsList));
    } else if (appDevelopmentRef.current.checked) {
      setContentPlaceHolder(fromListToInternshipCard(filterInternshipsByField("Développement d'applications")));
    } else if (itAndSecurityRef.current.checked) {
      setContentPlaceHolder(fromListToInternshipCard(filterInternshipsByField("Réseaux et sécurité")));
    }
  }

  //Other functions
  function filterInternshipsByField(field = NaN) {
    let filteredList = [...currentInternshipsList];
    if (
      field
    ) {
      filteredList = filteredList.filter((internship) => {
        return internship.internshipType === field;
      });
    }
    return filteredList;
  }

  function fromListToInternshipCard(internshipsList) {
    return internshipsList.map((internship) => {
      return (
        <InternshipCard
          companyName={internship.companyName}
          companyAdress={internship.companyAdress}
          contactFullName={internship.contactFullName}
          contactEmail={internship.contactEmail}
          contactNumber={internship.contactNumber}
          description={internship.description}
          internshipType={internship.internshipType}
          availablePositions={internship.availablePositions}
          hourWage={internship.internshipHourWage}
        />
      );
    });
  }

  const [contentPlaceHolder, setContentPlaceHolder] = useState(
    <CustomLoader />
  );
  const [currentInternshipsList, setCurrentInternshpsList] = useState([]);

  useEffect(() => {
    apiInternshipManager
      .getInternshipsEntries()
      .then((res) => {
        console.log(res);
        const { internships } = res.data;
        setContentPlaceHolder(fromListToInternshipCard(internships));
        setCurrentInternshpsList(internships);
      })
      .catch((err) => {
        console.log(err);
        setContentPlaceHolder(
          <div class="alert alert-danger" role="alert">
            Une erreur s'est produite.
          </div>
        );
      });
  }, []);

  //RadioButtons Refs
  const everyInternshipRef = React.createRef(),
    appDevelopmentRef = React.createRef(),
    itAndSecurityRef = React.createRef();
  return (
    <div class="card">
      <div className="card-header">
        <h5>Stages disponibles</h5>
      </div>
      <div class="card-body">
        <div class="card">
          <div class="card-body">
            <div class="radio-inputs">
              <label class="radio">
                <input
                  type="radio"
                  name="radio"
                  defaultChecked
                  onChange={onChangeRadioButton}
                  ref={everyInternshipRef}
                />
                <span class="name">Tout</span>
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="radio"
                  onChange={onChangeRadioButton}
                  ref={appDevelopmentRef}
                />
                <span class="name">Développement d'applications</span>
              </label>

              <label class="radio">
                <input
                  type="radio"
                  name="radio"
                  onChange={onChangeRadioButton}
                  ref={itAndSecurityRef}
                />
                <span class="name">Réseaux et sécurité</span>
              </label>
            </div>
          </div>
        </div>
        <div class="row">{contentPlaceHolder}</div>
      </div>
    </div>
  );
}

export default AvailableInternships;
