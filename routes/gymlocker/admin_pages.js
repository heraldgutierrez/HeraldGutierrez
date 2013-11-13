exports.users = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_members', {
		role 	: currUser.role
	});
};

exports.pro_queue = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_pro_queue', {
		role 	: currUser.role
	});
};

exports.exercises = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_ex', {
		role 	: currUser.role
	});
};

exports.equip = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_equip', {
		role 	: currUser.role
	});
};

exports.add_ex = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_add_ex', {
		role 	: currUser.role
	});
};

exports.add_equip = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_add_equip', {
		role 	: currUser.role
	});
};