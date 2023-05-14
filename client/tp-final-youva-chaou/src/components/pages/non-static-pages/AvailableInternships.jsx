import InternshipCard from "../../cards/InternshipCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../styles/RadioButtons.css";

function AvailableInternships() {
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
        <div class="row">
          <InternshipCard
            companyName={"MacDounald"}
            companyAdress={"484 rue de la pommeraie"}
            contactFullName={"Youva Chaou"}
            contactNumber={"4389852733"}
            contactEmail={"youvachaou1234@gmail.com"}
            availablePositions={23}
            hourWage={32.21}
            description={"oijdsoiajdoisajdoisajidojsaiodjsaiojdasoijdiosaj"}
          />
          <InternshipCard
            companyName={"MacDounald"}
            companyAdress={"484 rue de la pommeraie"}
            contactFullName={"Youva Chaou"}
            contactNumber={"4389852733"}
            contactEmail={"youvachaou1234@gmail.com"}
            availablePositions={23}
            hourWage={32.21}
            description={"oijdsoiajdoisajdoisajidojsaiodjsaiojdasoijdiosaj"}
          />{" "}
          <InternshipCard
            companyName={"MacDounald"}
            companyAdress={"484 rue de la pommeraie"}
            contactFullName={"Youva Chaou"}
            contactNumber={"4389852733"}
            contactEmail={"youvachaou1234@gmail.com"}
            availablePositions={23}
            hourWage={32.21}
            description={"oijdsoiajdoisajdoisajidojsaiodjsaiojdasoijdiosaj"}
          />{" "}
          <InternshipCard
            companyName={"MacDounald"}
            companyAdress={"484 rue de la pommeraie"}
            contactFullName={"Youva Chaou"}
            contactNumber={"4389852733"}
            contactEmail={"youvachaou1234@gmail.com"}
            availablePositions={23}
            hourWage={32.21}
            description={"oijdsoiajdoisajdoisajidojsaiodjsaiojdasoijdiosaj"}
          />
        </div>
      </div>
    </div>
  );
}

export default AvailableInternships;
