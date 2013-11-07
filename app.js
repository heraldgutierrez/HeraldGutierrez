
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var partials = require('express-partials');	// layouts
var app = express();

// mongodb
var mongoose = require('mongoose');
var mongoDBConnect = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/GymLocker';
mongoose.connect(mongoDBConnect);

// models
var glModel = require('./model/GymLocker/models');
var generateGLModels = glModel.generate();
var glPopulate = require('./model/GymLocker/populate');
var tryPopulateGL = glPopulate.tryPopulate();

// routes
var routes = require('./routes');
// var user = require('./routes/user');
var gymlocker = require('./routes/gymlocker/routes');
var isLoggedIn = gymlocker.isLoggedIn;
var casino = require('./routes/casino');

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 5000);	// listen to default port or port 5000
	app.set('views', __dirname + '/views');		// find HTML files under /views
	app.set('view engine', 'ejs');				// use HTML rather than Jade templating
	app.use(partials());						// used for layouts

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, '/public')));
});

// development only
app.configure('development', function() {
//if ('development' == app.get('env')) {
  app.use(express.errorHandler());
});

/*********************************************************
**********************************************************
*
*	HTML pages/handlers
*
*********************************************************
*********************************************************/

// Example Routes
// app.get('/', isLoggedIn, routes.index);
// app.get('/users/:id', isLoggedIn, andIsOwner, user.show);
// app.get('/users', user.list);
// app.get('/users/new', user.new);
// app.post('/users/create', user.create);


// Index page: select which demo to select
// app.get('/', routes.index);
app.get('/', function(req, res) { res.redirect('/GymLocker'); });
// app.get('/ListUsers', routes.listusers);

// app.post('/addUser', routes.addUser);
// app.get('/addUser', function(req, res) { routes.addUser(req.query, res); });
// app.post('/addUser', function(req, res) { routes.addUser(req.body, res); });

// app.get('/exists', routes.exists);
// app.post('/userExists', function(req, res) { routes.userExists(req.body, res); });
// app.get('/getTest', function(req, res) {
// 	console.log(req.query.login);
// 	res.json({ done : req.query.login });
// });

/*********************************************************
*	GymLocker
*********************************************************/
app.get('/GymLocker', gymlocker.home);				// index page
app.post('/GymLocker/signup', gymlocker.signup);	// add new user
app.post('/GymLocker/login', gymlocker.login);		// user login
app.get('/GymLocker/main', isLoggedIn, gymlocker.main);
app.get('/GymLocker/logout', gymlocker.logout);

// admin pages
app.get('/GymLocker/admin', isLoggedIn, gymlocker.admin);
app.get('/GymLocker/admin/members', isLoggedIn, gymlocker.admin_users);
app.get('/GymLocker/admin/professional_queue', isLoggedIn, gymlocker.admin_pro_queue);
app.get('/GymLocker/admin/exercises', isLoggedIn, gymlocker.admin_exercises);
app.get('/GymLocker/admin/equipment', isLoggedIn, gymlocker.admin_equip);
app.get('/GymLocker/admin/add_exercises', isLoggedIn, gymlocker.admin_add_ex);
app.get('/GymLocker/admin/add_equipment', isLoggedIn, gymlocker.admin_add_equip);

// admin json calls
app.get('/GymLocker/get_all_members', gymlocker.db_get_all_members);
// app.get('/GymLocker/delete_members', gymlocker.db_delete_members);
// app.get('/GymLocker/get_pro_queue', gymlocker.db_get_pro_queue);
// app.get('/GymLocker/get_all_exs', gymlocker.db_get_all_ex);
app.get('/GymLocker/get_equipment', gymlocker.db_get_all_equip);
app.get('/GymLocker/add_equipment', gymlocker.db_add_equip);
app.get('/GymLocker/get_muscle_groups', gymlocker.db_get_muscle_groups);
app.get('/GymLocker/get_exercise_types', gymlocker.db_get_exercise_types);
app.get('/GymLocker/add_exercise', gymlocker.db_add_exercise);
app.get('/GymLocker/get_exercises', gymlocker.db_get_exercises);

/*********************************************************
*	Casino
*********************************************************/
app.get('/Casino', casino.index);



/*********************************************************
*	start app and listen
*********************************************************/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});