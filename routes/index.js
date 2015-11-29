var express = require('express');

module.exports = (function() {
	'use strict';
	var router = express.Router();

	router.get('/', function(req, res) { res.render('index'); });

	router.get('/Resume', function(req, res) { res.render('resume'); });

	router.get('/Portfolio', function(req, res) { res.render('portfolio'); });

	router.get('/Portfolio/Scoreboard', function(req, res) { res.redirect('/Portfolio'); });
	router.get('/Portfolio/Scoreboard/Simple', function(req, res) { res.render('portfolio/simple-scoreboard'); });
	router.get('/Portfolio/Scoreboard/LED', function(req, res) { res.render('portfolio/led-scoreboard'); });
	router.get('/Portfolio/Scoreboard/LEDSimple', function(req, res) { res.render('portfolio/led-simple'); });

	router.get('/Portfolio/Cards', function(req, res) { res.render('portfolio/cards'); });
	
	router.get('/Portfolio/Casino/VideoPoker', function(req, res) { res.render('portfolio/casino'); });

	router.get('/Portfolio/GymLocker', function(req, res) { res.render('portfolio/gymlocker'); });

	router.get('/Portfolio/MIPS', function(req, res) { res.render('portfolio/mips'); });

	router.get('/Portfolio/NumberMunchers', function(req, res) { res.render('portfolio/numbermunchers'); });


	// Christmas Wishlist
	router.get('/Christmas2015', function(req, res) { res.render('xmas-wishlist'); });

	return router;
})();