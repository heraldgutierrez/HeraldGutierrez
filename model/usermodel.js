// var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function create() {
	UserSchema = new Schema({
		username	: { type : String, index : { unique : true}},
		password	: String
	});

	mongoose.model('User_1', UserSchema);
	return mongoose.model('User_1');
}

exports.create = create;