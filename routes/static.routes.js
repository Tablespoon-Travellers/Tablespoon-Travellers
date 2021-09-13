const express = require('express');

const Country = require("../models/Country.model");

const router = express.Router();

router.get('/404', (req, res) => {
    res.render('static/404');
});

router.get('/500', (req, res) => {
    res.render('static/500');
});

router.get('/spin', (req, res) => {
    Country
    .find()
    .then((allCountries) => {
        res.render('Wheel spinner', {countries: JSON.stringify(allCountries)});
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
