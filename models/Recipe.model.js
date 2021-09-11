const { Schema, model } = require('mongoose');

// FIXME: This is just junk to try make the code a tiny bit happier
const recipeSchema = new Schema({
	description: String,
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
