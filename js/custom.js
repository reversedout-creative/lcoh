(function($){
	"use strict";
	/* ---- Preloader ---- */

	$(window).load(function() {
		$('.loader').fadeOut();
		$('.page-loader').delay(350).fadeOut('slow');
	});

     
    /*---- STICKY NAVIGATION ---*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });
    
	$(document).ready(function() {

    /* --- Full height module --- */
	function buildModuleHero() {
			if (moduleHero.length > 0) {
				if (moduleHero.hasClass('module-full-height')) {
					moduleHero.height($(window).height());
				} else {
					moduleHero.height($(window).height() * 0.85);
				}
			}
		}
  
	/* --- WOW Animation --- */
	var wow = new WOW({
			mobile: false
		});

	wow.init();

	/* --- Scroll Animation --- */
	$('.section-scroll').bind('click', function(e) {
            var anchor = $(this);
           if($(window).outerWidth() < 992){
               $('html, body').stop().animate({
                   scrollTop: $(anchor.attr('href')).offset().top
               }, 1000);
           }
           else{
               $('html, body').stop().animate({
                   scrollTop: $(anchor.attr('href')).offset().top -80
               }, 1000);
           }
            e.preventDefault();
        }); 
		
	/* --- Scroll top --- */
	$(window).scroll(function() {
			if ($(this).scrollTop()) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

	$('a[href="#totop"]').click(function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});
	}); 
})(jQuery);