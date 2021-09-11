const express = require('express');
const router = express.Router();

const Country = require('./../models/Country.model');

router.get('/profile', (req, res) => {
	res.render('private/profile', { user: req.session.currentUser });
});

router.get('/countries/add', (req, res) => {
	res.render('countries/new-country');
});

router.post('/countries/add', (req, res) => {
	
	//Get the form data from the body
	const { name, description, imageUrl } = req.body;

	console.log(name, description, imageUrl);

	Country.create({
		name,
		description,
		imageUrl,
	})
	.then((createdCountry) => {

		console.log(createdCountry)
		res.redirect('/private/countries/add');

	})
	.catch((error) => {console.log(error)})

});

module.exports = router;
