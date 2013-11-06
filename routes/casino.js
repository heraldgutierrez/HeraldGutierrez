
/*
 * Casino
 */

// GET home page
exports.index = function(req, res){
	res.render('Casino/index', { 
		title: 'Casino', 
		layout: false
	});
};
