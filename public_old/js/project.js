// $(document).ready(function() {
// 	setBackgroundImage();
	
// 	// change background image on hover
// 	$('.img').mouseover(function() {
// 		// only need to change background image if there is a secondary image
// 		var secondary = $(this).attr('data-secondary');
// 		if(secondary != '') {
// 			fadeBackground(this, secondary);
// 		}
// 	}).mouseleave(function() {
// 		// only need to change background image if there is a secondary image
// 		var secondary = $(this).attr('data-secondary');
// 		if(secondary != '') {
// 			fadeBackground(this, $(this).attr('data-primary'));
// 		}
// 	});
// });

window.onload = function() {
	setBackgroundImage();

	var img = document.querySelectorAll('.img');
	for(var i = 0; i < img.length; i++) {
		(function() {
			// change background image on hover

			img[i].onmouseover = function () {
				// only need to change background image if there is a secondary image
				var secondary = this.getAttribute('data-secondary');
				if(secondary !== '') 
					fadeBackground(this, secondary);
			};

			img[i].onmouseout = function() {
				// only need to change background image if there is a secondary image
				var secondary = this.getAttribute('data-secondary');
				if(secondary !== '') 
					fadeBackground(this, this.getAttribute('data-primary'));
			};
		})();
	}
}