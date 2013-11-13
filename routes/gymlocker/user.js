var mongoose = require('mongoose');
var UserModel = mongoose.model('User');
var ObjectId = mongoose.Types.ObjectId;
// var id = new ObjectId('id string');

exports.get_settings = function(req, res) {
	var curr = req.session.currentUser;
	var id = new ObjectId(curr._id);
	UserModel.find({ _id : id }, function(err, result) {
		console.log(result);
		res.json(result);
	});
};