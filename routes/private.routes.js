const express = require('express');
const router = express.Router();

const Country = require('./../models/Country.model');

router.get('/profile', (req, res) => {
	res.render('private/profile', { user: req.session.currentUser });
});

module.exports = router;
