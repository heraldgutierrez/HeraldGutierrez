
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

/*************************************
		Portfolio Pages
*************************************/

/***** Scoreboard *****/
exports.simpleScoreboard = function(req, res) {
	res.render('portfolio/simple-scoreboard');
};

exports.LEDScoreboard = function(req, res) {
	res.render('portfolio/led-scoreboard');
};

exports.scoreboard = function(req, res) {
	res.render('portfolio/scoreboard');
};

// exports.ledscoreboard = function(req, res) {
// 	res.render('scoreboard_led');
// };

/***** Cards *****/
exports.Cards = function(req, res) {
	res.render('portfolio/cards');
};

/***** Casino *****/
exports.videoPoker = function(req, res) {
	res.render('portfolio/casino')
}

/***** GymLocker *****/
exports.GymLocker = function(req, res) {
	res.render('portfolio/gymlocker');
};
