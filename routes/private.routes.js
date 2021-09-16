const express = require('express');
const router = express.Router();

const Country = require('./../models/Country.model');

router.get('/', (req, res) => {
	Country
	.find()
	.or(
		[{ updated_by: req.session.currentUser._id }, { created_by: req.session.currentUser._id }]
	)
	.then(
		(editedCountries) => {
			res.render('private/profile', { user: req.session.currentUser, editedCountries });
		}
	)
});

module.exports = router;
