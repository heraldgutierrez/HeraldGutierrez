
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

exports.mips = function(req, res) {
	res.render('mips');
};