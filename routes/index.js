var express = require('express');

module.exports = (function() {
	'use strict';
	var router = express.Router();

	router.get('/', function(req, res) { res.render('layout'); });
	router.get('/Resume', function(req, res) { res.render('resume'); });

	return router;
})();