const { Schema, model } = require('mongoose');

// FIXME: This is just junk to try make the code a tiny bit happier
const reviewSchema = new Schema({
	username: String,
});

const Review = model('Review', reviewSchema);

module.exports = Review;
