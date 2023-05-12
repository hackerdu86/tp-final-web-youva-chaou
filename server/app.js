const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");


//Controller assignation
const studentRoutes = require("./routes/student-routes");
const internshipRoutes = require("./routes/internship-routes");


const app = express();

app.use(bodyParser.json());

//Routes definition
app.use("/students", studentRoutes);
app.use("/internships", internshipRoutes);

app.use((requete, reponse, next) => {
  return next(new HttpError("Route non trouvée", 404));
});

app.use((error, requete, reponse, next) => {
  if (reponse.headerSent) {
    return next(error);     
  }
  reponse.status(error.code || 500);
  reponse.json({
    message: error.message || "Une erreur inconnue est survenue",
  });
});

mongoose.set('strictQuery', true);

mongoose
.connect("mongodb://127.0.0.1:27017/internshipsdb")
.then(() => {
    app.listen(5000)
    console.log("Connexion à la base de données réussie");
})
.catch(erreur => {
    console.log(erreur);
});

