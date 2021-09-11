



/* Do we need this if we already have the country routes? */





/*const router = require('express').Router();

const Country = require('./../models/Country.model');
const Recipe = require('./../models/Recipe.model');

/* GET home page *//*
router.get('/', (req, res) => {
	res.render('index');
});

router.get('/countries', (req, res) => {
	//Get rooms from DB
	Country.find()
		.then((countries) => {
			res.render('countries/all-countries', { countries });
		})
		.catch((error) => {
			console.log(error);
		});
});

router.get('/countries/:id', (req, res) => {
	const { id } = req.params;
	//const roomId = req.params.id

  

	Room.findById(req.params.id)
		.populate('recipe')
		.then((room) => {
			res.render('country/one-country', { room });
		})
		.catch((error) => {
			console.log(error);
		});
});
/** (reviews/rooms/:id) is better *//*
router.post('/countries/:id', (req, res) => {
	//GET the values
	const countryId = req.params.id;
	const { comment } = req.body;

	Recipe.create({
		user: req.session.currentUser._id,
		comment // comment: req.body.comment
	})
		.then((newRecipe) => {
			console.log(newRecipe);

			Room.findByIdAndUpdate(roomId, {
				$addToSet: { reviews: newReview._id } //$put or $addToSet is to talk to the array. Put will not make sure you have non-duplicates
			})
				.then((updatedRoom) => {
					console.log(updatedRoom);
					res.redirect(`/rooms/${roomId}`);
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
});

module.exports = router;*/