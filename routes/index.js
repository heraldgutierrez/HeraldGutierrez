
/*
 * GET home page.
 */

exports.index = function(req, res){
	var time = new Date();
	time = time.getHours();

	var greet = 'Hello';

	if(time >= 5 && time < 12)
		greet = 'Good morning';
    else if(time >= 12 && time < 17)
		greet = 'Good afternoon';
    else if(time >= 17 && time < 21)
		greet = 'Good evening';
	
	res.render('index', { 
		greeting: greet
	});
};

exports.portfolio = function(req, res) {
	res.render('portfolio');
};

exports.resume = function(req, res) {
	res.render('resume');
};

// Portfolio Pages
exports.simpleScoreboard = function(req, res) {
	res.render('portfolio/simple-scoreboard');
};

exports.LEDScoreboard = function(req, res) {
	res.render('portfolio/led-scoreboard');
};

exports.Cards = function(req, res) {
	res.render('portfolio/cards');
};
exports.GymLocker = function(req, res) {
	res.render('portfolio/gymlocker');
};

exports.scoreboard = function(req, res) {
	res.render('scoreboard');
};

exports.ledscoreboard = function(req, res) {
	res.render('scoreboard_led');
};