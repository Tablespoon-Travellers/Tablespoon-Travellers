const express = require('express');
const router = express.Router();

router.get('/404', (req, res) => {
	res.render('static/404');
});

router.get('/500', (req, res) => {
	res.render('static/500');
});

module.exports = router;
