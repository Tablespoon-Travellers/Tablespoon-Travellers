const express = require("express");
const router = express.Router();

const Country = require("../models/Country.model");

router.get("/", (req, res) => {
  Country.find()
    .then((allCountries) => {
      res.render("static/flap", {
        countries: JSON.stringify(allCountries),
        user: req.session.currentUser
      });
    })
    .catch((error) => {
      console.log("Something bad happened:", error);
      throw error;
    });
});

module.exports = router;
