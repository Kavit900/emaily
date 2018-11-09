const mongoose = require('mongoose');

// es2015 structure
const {Schema} = mongoose;

// add or subtract properties here as needed
const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);