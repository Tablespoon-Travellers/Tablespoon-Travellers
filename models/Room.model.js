const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
	name: { type: String },
	description: { type: String },
	imageUrl: {
		type: String,
		default:
			'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
	},
	
	owner: { type: Schema.Types.ObjectId, ref: 'User' },
	/**
	 * 	username: String,
    	password: String,
		  email: String,
	   favorites: [{ type: Schema.Types.ObjectId, ref: 'Room', default: [] }]
	 */
	
	reviews: [{type: Schema.Types.ObjectId, ref: 'Review', default: []}] // ID String for the review, not for the user or comment
	/**
	 * 	user: ID String, // If you populate level 2, you will get the complete info about the User
	    comment: String
	 */
});

const Room = model('Room', roomSchema);

module.exports = Room;
