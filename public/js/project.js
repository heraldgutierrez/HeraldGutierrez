$(document).ready(function() {
	setBackgroundImage();
	
	// change background image on hover
	$('.img').mouseover(function() {
		// only need to change background image if there is a secondary image
		var secondary = $(this).attr('data-secondary');
		if(secondary != '') {
			fadeBackground(this, secondary);
		}
	}).mouseleave(function() {
		// only need to change background image if there is a secondary image
		var secondary = $(this).attr('data-secondary');
		if(secondary != '') {
			fadeBackground(this, $(this).attr('data-primary'));
		}
	});
});