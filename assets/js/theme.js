
(function ($) {
	"use strict";

	/*=================	sidebar scroll
	===========================================*/
	$(window).scroll(function () {
		var wintop = $(window).scrollTop(), docheight =

			$(document).height(), winheight = $(window).height();
		var scrolled = (wintop / (docheight - winheight)) * 100;

		$('.scroll-line').css('height', (scrolled + '%'));
	});
	
	
	
	$('a.nav-link[href^="#"]').on('click', function (e) {
				e.preventDefault();
				var target = this.hash;
				var $target = $(target);
				$('html, body').animate({
					'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});	
	
	
 
	
  $('.close_triger').on('click', function(e) {
      $('.pop_up').toggleClass("d-hide"); 
      e.preventDefault();
    });
	
	$(".pop_up").delay(5000).fadeIn(400);
	$(document).keyup(function(e){
    	if(event.which=='27'){
    		$('.pop_up').toggleClass("d-hide");
			 e.preventDefault();
	    }
    });

})(window.jQuery);


