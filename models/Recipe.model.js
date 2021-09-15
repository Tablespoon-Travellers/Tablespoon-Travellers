const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
	description: String,
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
