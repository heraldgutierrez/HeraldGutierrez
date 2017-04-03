app.controller('siteController', ['$scope', '$window', function($scope, $window) {
	var self = this;

	$('header').hide();

	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
	});

	angular.element($window).bind("scroll", function(e) {
	    if ($window.pageYOffset > 1) {
			$('header').fadeIn(500);
		} else {
			$('header').fadeOut(500);
		}
	})
}]);