const mongoose = require("mongoose");
const bcrypt   = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const User = new mongoose.Schema({
	username: {unique: true, type: String},
	email: {unique: true, type: String},
	password: String,
	preferences: {
		dark_mode: Boolean,
		dull_mode: Boolean
	}
}, {timestamps: true});

User.methods.hash_password = function( ) {
	this.password = bcrypt.hashSync(this.password, 5);
}

User.methods.verify_password = function(password) {
	return bcrypt.compareSync(password, this.password);
}

User.plugin(uniqueValidator);

module.exports = mongoose.model("User", User);
