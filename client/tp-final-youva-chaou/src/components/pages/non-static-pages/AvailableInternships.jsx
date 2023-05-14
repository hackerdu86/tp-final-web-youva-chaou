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
      setFilteredInternshipsList(currentInternshipsList);
    } else if (appDevelopmentRef.current.checked) {
      setFilteredInternshipsList(
        filterInternshipsByField("Développement d'applications")
      );
    } else if (itAndSecurityRef.current.checked) {
      setFilteredInternshipsList(
        filterInternshipsByField("Réseaux et sécurité")
      );
    }
  }
  //Event called by <InternshipCard />
  function deleteInternship(internshipId) {
    apiInternshipManager
      .deleteInternshipEntry(internshipId)
      .then((res) => {
        console.log(res);
        let currentInternshipsListCopy = currentInternshipsList.filter(
          (internship) => {
            return internship._id !== internshipId;
          }
        );
        let filteredInternshipsListCopy = filteredInternshipsList.filter(
          (internship) => {
            return internship._id !== internshipId;
          }
        );
        setCurrentInternshpsList(currentInternshipsListCopy);
        setFilteredInternshipsList(filteredInternshipsListCopy);
      })
      .catch((err) => {
        console.log(err);
        setContentPlaceHolder(
          <div class="alert alert-danger" role="alert">
            Une erreur s'est produite, veuillez communiquer avec le coordonateur
            des stage: sylvain.labranche@cmontmorency.qc.ca
          </div>
        );
      });
  }

  //Other functions
  function filterInternshipsByField(field = NaN) {
    const filteredList = [];
    if (field) {
      console.log("currentInternshipsList", currentInternshipsList);
      currentInternshipsList.map((internship) => {
        if (internship.internshipType === field) {
          filteredList.push(internship);
        }
      });
    }
    return filteredList;
  }

  const [contentPlaceHolder, setContentPlaceHolder] = useState(
    <CustomLoader />
  );
  const [currentInternshipsList, setCurrentInternshpsList] = useState([]);
  const [filteredInternshipsList, setFilteredInternshipsList] = useState([]);

  //Page reloading dependant
  useEffect(() => {
    apiInternshipManager
      .getInternshipsEntries()
      .then((res) => {
        console.log(res);
        const { internships } = res.data;
        setContentPlaceHolder(null);
        setCurrentInternshpsList(internships);
        setFilteredInternshipsList(internships);
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
        <div class="row">
          {contentPlaceHolder}
          {filteredInternshipsList.map((internship) => {
            return (
              <InternshipCard
                internshipId={internship._id}
                companyName={internship.companyName}
                companyAdress={internship.companyAdress}
                contactFullName={internship.contactFullName}
                contactEmail={internship.contactEmail}
                contactNumber={internship.contactNumber}
                description={internship.description}
                internshipType={internship.internshipType}
                availablePositions={internship.availablePositions}
                hourWage={internship.internshipHourWage}
                deleteInternship={deleteInternship}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AvailableInternships;
