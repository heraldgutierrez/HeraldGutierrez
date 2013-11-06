var mongo = require('mongodb');

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var whichServer = 'localhost';
var whichPort = 27017;
var whichDB = 'GymLocker'
var server = new Server(whichServer, whichPort, { auto_reconnect: true });
var db = new Db(whichDB, server);

// collections
var users = 'users';

db.open(function(err, db) {
	if(!err)
		console.log("Connected to 'GymLocker' database");
});

exports.signup = function(body, callback) {
	var name = body.username;
	var pass = body.password;
	var user = {
		username: name,
		password: pass,
		role: 2
	};

	console.log('Does user exists? ' + userEx);
	console.log('GymLocker: adding new user - ' + name);
	db.collection(users, function(err, collection) {
		collection.insert(user, function(err, result) {});
	});

	console.log(name + ' successfully added');

	callback(null, true);
};

exports.listusers = function(body, callback) {

};

exports.login = function(body, callback) {
	var name = body.username;
	var pass = body.password;

	// console.log('Logging in ' + name);
	// db.collection(users, function(err, collection) {
	// 	var user = collection.findOne({'username' : name, 'password' : pass}, function(err, user) {

	// 	});
	// });
};

exports.userExist = function(query, res, callback) {
	var name = query.username;
	console.log('Checking if ' + name + ' already exists.');
 	db.collection(users, function(err, collection) {
		collection.findOne({'username' : name}, function(err, result) {
			if(result == null)
				return callback(null, { 'exists' : false, 'res' : res });
			else
				return callback(null, { 'exists' : true, 'res' : res });
		});
	});
};

// exports.findById = function(req, res) {
// 	var id = req.params.id;
// 	console.log('Retrieving wine: ' + id);
// 	db.collection('wines', function(err, collection) {
// 		collection.findOne({ '_id' : new BSON.ObjectID(id)}, function(err, item) {
// 			console.log('id = ' + item._id);
// 			res.send(item);
// 		});
// 	});
// };

// exports.findAll = function(req, res) {
// 	db.collection('wines', function(err, collection) {
// 		collection.find().toArray(function(err, items) {
// 			res.send(items);
// 		});
// 	});
// };

// exports.addWine = function(req, res) {
// 	var wine = req.body;
// 	console.log('Adding wine: ' + JSON.stringify(wine));
// 	db.collection('wines', function(err, collection) {
// 		collection.insert(wine, { safe: true }, function(err, result) {
// 			if(err) {
// 				res.send({ 'error' : 'An error has occurred' });
// 			} else {
// 				console.log('Success: ' + JSON.stringify(result[0]));
// 				res.send(result[0]);
// 			}
// 		});
// 	});
// };

// exports.updateWine = function(req, res) {
// 	var id = req.params.id;
// 	var wine = req.body;

// 	console.log('Updating wine: ' + id);
// 	console.log(JSON.stringify(wine));
// 	db.collection('wines', function(err, collection) {
// 		collection.update({'_id': new BSON.ObjectID(id)}, wine, { safe: true }, function(err, result) {
// 			if(err) {
// 				console.log('Error updating wine: ' + err);
// 				res.send({'error' : 'An error has occurred'});
// 			} else {
// 				console.log('' + result + ' document(s) updated');
// 				res.send(wine);
// 			}
// 		});
// 	});
// };

// exports.deleteWine = function(req, res) {
// 	var id = req.params.id;
// 	console.log('Deleing wine: ' + id);
// 	db.collection('wines', function(err, collection) {
// 		collection.remove({'_id': new BSON.ObjectID(id)}, { safe: true }, function(err, result) {
// 			if(err) {
// 				res.send({'error' : 'An error has occurred - ' + err});
// 			} else {
// 				console.log('' + result + ' document(s) deleted');
// 				res.send(req.body);
// 			}
// 		});
// 	});
// };


// var populateDB = function() {
// 	var count = {
// 		_id: 'wineid',
// 		seq: 0
// 	};

// 	db.collection('counters', function(err, collection) {
// 		collection.insert(count, {safe:true}, function(err, result) {});
// 	});

// 	var wines = [
// 	{
// 		name: 'Chateau De Saint Cosme',
// 		year: '2009',
// 		grapes: 'Grenache / Syrah',
// 		country: 'France',
// 		region: 'Southern Rhone',
// 		description: 'The aromas of fruit and spice...',
// 		picture: 'saint_cosme.jpg'
// 	},
// 	{
// 		name: 'Lan Rioja Crianza',
// 		year: '2006',
// 		grapes: 'Tempranillo',
// 		country: 'Spain',
// 		region: 'Rioga',
// 		description: 'A resurgence of interest in boutique vineyards...',
// 		picture: 'lan_rioja.jpg'
// 	}];

// 	db.collection('wines', function(err, collection) {
// 		collection.insert(wines, {safe:true}, function(err, result) {});
// 	});
// };