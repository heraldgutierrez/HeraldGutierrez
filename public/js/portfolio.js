$(document).ready(function() {
	$('.previewText').hide();
	$('.preview').mouseenter(function() {
		$(this).siblings('center').children('div').fadeIn(250);
	}).mouseleave(function() {
		$(this).siblings('center').children('div').hide();
		$(this).removeClass('fade');
	});

	$('.previewText').mouseenter(function() {
		$(this).show();
		$(this).parent().siblings('.preview').addClass('fade');
	});
});