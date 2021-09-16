const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('static/about', {user: req.session.currentUser});
});

module.exports = router;
