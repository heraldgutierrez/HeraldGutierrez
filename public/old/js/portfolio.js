$(document).ready(function() {
	// Hide all preview texts
	$('#li_Portfolio').addClass('nav-active');
	$('.previewText').hide();

	// When hovering over preview images, fade the image and display the text.
	// Also highlight it's nav-link on the side
	$('.preview').mouseenter(function() {
		// highlight nav-link
		var navlink = $(this).attr('navlink');
		$('#' + navlink).addClass('hover');

		// display text
		$(this).siblings('center').children('div').fadeIn(250);
	}).mouseleave(function() {
		// de-highlight nav-link
		var navlink = $(this).attr('navlink');
		$('#' + navlink).removeClass('hover');

		// hide text
		$(this).siblings('center').children('div').hide();
		$(this).removeClass('fade');
	});

	// when hovering the preview text, perform the same behaviour
	$('.previewText').mouseenter(function() {
		// highlight nav-link
		var navlink = $(this).parent().siblings('.preview').attr('navlink');
		$('#' + navlink).addClass('hover');

		// show text
		$(this).show();

		// fade image preview
		$(this).parent().siblings('.preview').addClass('fade');
	});

	// when hovering over nav-links, fade image and display text
	$('.side-links ul li').mouseenter(function() {
		var navlink = $(this).attr('id');
		$('.preview[navlink="' + navlink + '"]').addClass('fade');
		$('.preview[navlink="' + navlink + '"]').siblings('center').children('div').fadeIn(250);
	}).mouseleave(function() {
		var navlink = $(this).attr('id');
		$('.preview[navlink="' + navlink + '"]').removeClass('fade');
		$('.preview[navlink="' + navlink + '"]').siblings('center').children('div').hide();
	});
});