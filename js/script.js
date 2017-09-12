$(document).ready(function() {
    $('.hamburger').click(function() {
                
        $('.header__items').slideToggle(350);

        $(window).resize(function() {
            if (  $(window).width() > 375 ) {			
				$('.header__items').removeAttr('style');
			}
		});
    });
});