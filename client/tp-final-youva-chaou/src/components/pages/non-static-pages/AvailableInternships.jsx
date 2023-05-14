import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import apiInternshipManager from "../../../utils/api-internship-manager";
import CustomLoader from "../../animated-components/CustomLoader";
import InternshipCard from "../../cards/InternshipCard";
import "../../styles/RadioButtons.css";

function AvailableInternships() {
  const [contentPlaceHolder, setContentPlaceHolder] = useState(
    <CustomLoader />
  );
  const [internshipsList, setInternshipList] = useState([]);

  useEffect(() => {
    apiInternshipManager
      .getInternshipsEntries()
      .then((res) => {
        console.log(res);
        const { internships } = res.data;
        setContentPlaceHolder(
          internships.map((internship) => {
            return (
              <InternshipCard
                companyName={internship.companyName}
                companyAdress={internship.companyAdress}
                contactFullName={internship.contactFullName}
                contactEmail={internship.contactEmail}
                contactNumber={internship.contactNumber}
                description={internship.description}
                availablePositions={internship.availablePositions}
                hourWage={internship.internshipHourWage}
              />
            );
          })
        );
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
                <input type="radio" name="radio" defaultChecked />
                <span class="name">Tout</span>
              </label>
              <label class="radio">
                <input type="radio" name="radio" />
                <span class="name">Développement d'applications</span>
              </label>

              <label class="radio">
                <input type="radio" name="radio" />
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
