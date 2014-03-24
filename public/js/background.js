// Set default (primary) background image for all div.img
function setBackgroundImage() {
	var length = $('.img').length;
	var img, bg;
	for(var i = 0; i < length; i++) {
		img = $('.img')[i];
		bg = $(img).attr('data-primary');
		setBackground(img, bg);
	}
}

// Fade the background by setting opacity 0, change the background source image,
// and then setting opacity back to 1
function fadeBackground(container, background) {
	$(container).fadeTo(250, 0, function() {
		setBackground(container, background);
		$(container).fadeTo(250, 1);
	});
}

// Change the background source image to a new source
function setBackground(container, background) {
	$(container).css('background-image', 'url("/img/portfolio/' + background + '")');	
}