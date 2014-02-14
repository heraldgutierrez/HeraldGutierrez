
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var newrelic = require('newrelic');

// routes
var routes = require('./routes');

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 5000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

// development only
app.configure('development', function() {
	app.use(express.errorHandler());
});



/*********************************************************
**********************************************************
*
*	HTML pages/handlers
*
*********************************************************
*********************************************************/

app.get('/', routes.index);
app.get('/Portfolio', routes.portfolio);
app.get('/Resume', routes.resume);

// Scoreboard
app.get('/Portfolio/Scoreboard', routes.scoreboard);
app.get('/Portfolio/Scoreboard/Simple', routes.simpleScoreboard);
app.get('/Portfolio/Scoreboard/LED', routes.LEDScoreboard);

// Cards
app.get('/Portfolio/Cards', routes.Cards);

// Casino
app.get('/Portfolio/Casino/VideoPoker', routes.videoPoker);

// GymLocker
app.get('/Portfolio/GymLocker', routes.GymLocker);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
