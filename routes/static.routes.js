const express = require('express');
const router = express.Router();

const Country = require("../models/Country.model");

router.get('/404', (req, res) => {
    res.render('static/404');
});

router.get('/500', (req, res) => {
    res.render('static/500');
});

router.get('/flap', (req, res) => {
    Country
    .find()
    .then((allCountries) => {
        res.render('static/flap', {countries: JSON.stringify(allCountries), layout: false});
    })
    .catch((error) => { 
        console.log("Something bad happened:", error)
        throw error
    });
});

router.get('/landing-page', (req, res) => {
    res.render('static/landing-page');
});

router.get('/map', (req, res) => {
    res.render('static/map');
});


module.exports = router;
