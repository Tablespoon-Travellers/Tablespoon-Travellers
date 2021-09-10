const { Schema, model } = require('mongoose');

// FIXME: This is just junk to try make the code a tiny bit happier
const roomSchema = new Schema({
	username: String,
});

const Room = model('Room', roomSchema);

module.exports = Room;
