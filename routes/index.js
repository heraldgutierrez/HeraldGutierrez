// var userData = require('../model/users');
var mongoose = require('mongoose');
// var UserModel = mongoose.model('User_1');

/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { 
		title: 'Express', 
		layout: false
	});
};

// exports.addUser = function(req, res) {
// 	var name = req.body.name;
// 	var pass = req.body.password;

// 	console.log('Adding ' + name);

// 	var newUser = new UserModel({
// 		username : name,
// 		password : 'pass'
// 	});

// 	UserModel.findOne(
// 		{ username : name },
// 		function(err, result) {
// 			if(result == null) {
// 				// res.send(name + ' doesnt exist.');
// 				newUser.save(function(err, result2) {
// 					if(err) {
// 						// res.render(err);
// 						res.send('Duplicate Username');
// 					} else {
// 						res.send('user added');

// 					}
// 				});
// 			} else {
// 				// res.send('Hello ' + result.username + '!');
// 				// res.send('Username Already Exists.');
// 				// redirect to home with warning
// 				res.redirect('/?warning=userExists');
// 			}
// 		}
// 	);
// 	// newUser.save(function(err, result) {
// 	// 	console.log(err);
// 	// 	if(err) {
// 	// 		// res.render(err);
// 	// 		res.send('Duplicate Username');
// 	// 	} else {
// 	// 		res.send('user added');
// 	// 	}
// 	// });
// };

// exports.exists = function(req, res) {
// 	var name = req.query.name;

// 	console.log('Name = ' + name);
// 	console.log('Query = ' + req.query.name);

// 	UserModel.findOne(
// 		{ username : name },
// 		function(err, result) {
// 			console.log(result);
// 			if(result == null) 
// 				res.send(name + ' doesnt exist.');
// 			else 
// 				res.send('Hello ' + result.username + '!');
// 		}
// 	);
// };




// // exports.listusers = function(req, res) {
// // 	var numRole = 2;

// // 	userData.userlist(numRole, function(err, userlist) {
// // 		// console.log(userlist);

// // 		res.render('listusers', { 
// // 			title: 'List Users', 
// // 			layout: false,
// // 			users: userlist
// // 		});
// // 	});
// // }

// // exports.addUser = function(body, res) {
// // 	userData.addUser(body.name, function(err, res) {
// // 		if(err)
// // 			logErrors(err);
// // 	});

// // 	res.redirect('/ListUsers');
// // }

// // exports.userExists = function(body, res) {
// // 	userData.userExists(body.name, function(err, user) {
// // 		if(err)
// // 			logErrors(err);

// // 		console.log('inside userData.userExists: ' + user);
// // 		if(user == false)
// // 			res.send('Username/password is invalid');
// // 		else
// // 			res.send('Hello ' + user.name);
// // 	});

// // 	console.log('outside: ');
// // }

// // // function logErrors(err) { console.log('ERROR: ' + err); }