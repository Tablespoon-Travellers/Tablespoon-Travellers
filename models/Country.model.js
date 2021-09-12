const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
	name: { type: String, unique: true, required: true },
	description: { type: String, required: true },
    playlistId: { type: String, required: true },
	created_by: {type: Schema.Types.ObjectId, ref:"User"},
	updated_by: {type: Schema.Types.ObjectId, ref:"User"},
	imageUrl: {
		type: String,
		required: true,
		default:
			'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
	},
	recipeUrl: {type: String, required: true},
});

const Country = model('Country', countrySchema);

module.exports = Country;