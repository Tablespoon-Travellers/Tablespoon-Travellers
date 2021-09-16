function isNotLoggedIn(req, res, next) {
	if (req.session.currentUser) {
		res.redirect('/random/');
	} else {
		next();
	}
}

module.exports = isNotLoggedIn;
