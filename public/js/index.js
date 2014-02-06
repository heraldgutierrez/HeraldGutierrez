$(document).ready(function() {
	var curr = 0;
	$('#li_Home').addClass('nav-active');
	$('#portfolio').hide();

	$(window).mousemove(function(e) {
		var index = Math.floor(e.pageX / $(window).width() * 4);

		if(index != curr) {
			$('#pos').html(e.pageX + ' (' + index + ')');
			$('#background').removeClass();
			$('#background').addClass('background-' + index);
			curr = index;

			if(index == 3) {
				$('#portfolio').fadeIn(500);
			} else {
				$('#portfolio').hide();
			}

		}
	});
});