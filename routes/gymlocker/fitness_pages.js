var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

exports.library = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/fitness/library', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role
	});
};
