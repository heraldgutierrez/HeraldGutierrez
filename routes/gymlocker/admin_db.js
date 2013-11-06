var mongoose = require('mongoose');
var UserModel = mongoose.model('User');
// var ExerciseModel = mongoose.model('Exercises');
// var ProQueModel = mongoose.model('ProQueue');
// var ObjectId = mongoose.Types.ObjectId;
// var id = new ObjectId('id string');

exports.get_all_members = function(req, res) {
	UserModel.find({}).sort({username : 1 }).execFind(
		function(err, result) {
			res.json(result);
		}
	);
};

// exports.delete_member = function(req, res) {
// 	var id = new ObjectId();
// 	UserModel.remove({ _id : id }, function(err, result) {
		
// 	});
// };

// exports.get_pro_queue = function(req, res) {
// 	ProQueModel.find({}, 
// 		function(err, result) {
// 			if(result != null) {
// 				for(var i = 0; i < result.length; i++) {
// 					UserModel.find({ _id : new ObjectId(result.user_id) })
// 						.sort({ username : 1 })
// 						.execFind(
// 						);
// 				}
// 			}
// 		}
// 	);
// };
