app.controller('siteController', ['$scope', '$window', function($scope, $window) {
	var self = this;

	$('header').hide();

	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
	});


	// Get all navigation links that link to a section and store as a list
	var navigationLinks = $("nav li a[href*=#]");
	var navigationLinkIDs = [];
	for (var i = 0; i < navigationLinks.length; i++) {    
		var ahref = $(navigationLinks[i]).attr('href');
		navigationLinkIDs.push(ahref);
	}

	var navigationDisplayedAfter = 25;
	angular.element($window).bind("scroll", function(e) {
		// Display navigation when the window has been scrolled down
		if ($window.pageYOffset > navigationDisplayedAfter) {
			$('header').fadeIn(500);
		} else {
			$('header').fadeOut(500);
		}

		// Add the 'active' class to the navigation when we are viewing the appropiate section
		var windowPosition = $(window).scrollTop(); 	// Get the offset of the window from the top of page
		var windowHeight = $(window).height(); 			// Get the height of the window
		var sectionBuffer = windowHeight * 0.30;		// Add .active class once the section has reached 25% from the top of the window
		var docHeight = $(document).height();

		for (var i = 0; i < navigationLinkIDs.length; i++) {
			var sectionID = navigationLinkIDs[i];
			var sectionPosition = $(sectionID).offset().top - sectionBuffer; // Get the offset of the section from the top of page - the buffer
			var sectionHeight = $(sectionID).height(); 		// Get the height of the section in question

			if (windowPosition >= sectionPosition && windowPosition < (sectionPosition + sectionHeight)) {
				$("a[href='" + sectionID + "']").addClass("active");
			} else {
				$("a[href='" + sectionID + "']").removeClass("active");
			}
		}
	})

	var showMobile = false;
	self.mobileMenuClick = function()
	{
		showMobile = !showMobile;

		if (showMobile) {
			$('#mobile-nav-links').slideDown();
		} else {
			$('#mobile-nav-links').slideUp();			
		}
	}
}]);