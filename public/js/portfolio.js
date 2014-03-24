$(document).ready(function() {
	setBackgroundImage();

	// change background image on hover
	$('figure').mouseover(function() {
		// 'figure' is the parent container
		// need to find the div.img container that actually has the background image
		var container = $(this).children('a').children('.img');

		// only need to change background image if there is a secondary image
		var secondary = $(container).attr('data-secondary');
		if(secondary != '') {
			fadeBackground(container, secondary);
		}
	}).mouseleave(function() {
		// 'figure' is the parent container
		// need to find the div.img container that actually has the background image
		var container = $(this).children('a').children('.img');

		// only need to change background image if there is a secondary image
		var secondary = $(container).attr('data-secondary');
		if(secondary != '') {
			fadeBackground(container, $(container).attr('data-primary'));
		}
	});
});