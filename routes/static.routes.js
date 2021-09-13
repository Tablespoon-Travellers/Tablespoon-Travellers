const express = require('express');
const router = express.Router();

router.get('/404', (req, res) => {
	res.render('static/404');
});

router.get('/500', (req, res) => {
	res.render('static/500');
});

router.get('/spin', (req, res) => {
	res.render('Wheel spinner');
});

router.get('/landing-page', (req, res) => {
	res.render('static/landing-page');
});

router.get('/map', (req, res) => {
	res.render('static/map');
});


module.exports = router;
