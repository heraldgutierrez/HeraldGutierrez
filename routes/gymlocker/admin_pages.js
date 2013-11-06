var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

exports.index = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_index', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};

exports.users = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_users', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};

exports.pro_queue = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_pro_queue', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};

exports.exercises = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_ex', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};

exports.equip = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_equip', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};

exports.add_ex = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_add_ex', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};

exports.add_equip = function(req, res) {
	var currUser = req.session.currentUser;
	res.render('GymLocker/admin/admin_add_equip', {
		layout 	: './GymLocker/mainLayout',
		role 	: currUser.role,
		requests : 0,
		adminPage : true
	});
};