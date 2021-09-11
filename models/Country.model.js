const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
	name: { type: String },
	description: { type: String },
    playlistId: { type: String },
	imageUrl: {
		type: String,
		default:
			'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
	},
	
	
	recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe', default: []}] // ID String for the review, not for the user or comment
	/**
	 * 	user: ID String, // If you populate level 2, you will get the complete info about the User
	    comment: String
	 */
});

const Country = model('Country', countrySchema);

module.exports = Country;