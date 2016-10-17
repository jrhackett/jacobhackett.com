(function($) {
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {});
	});

	$(document).ready(function() {
		$('.project-card').height($('.project-card').width());
		$('.project-details').height($('.project-details').width());

		$('.hamburger').click(function(){
			$(this).toggleClass('open');
			$('#menu').toggleClass('open');
			$('nav').toggleClass('open');
		});

		$('#menu a').click(function() {
			$('.hamburger').removeClass('open');
			$('#menu').removeClass('open');
			$('nav').removeClass('open');
		});

		$('.project-details span').hide();

		$('.project-details').hover(function () {
			$(this).find('span').slideDown();
		}, function () {
			$(this).find('span').slideUp();
		});

	});

	$(document).on('scroll', function() {
    if($('body').scrollTop() >= 300){
        $('body').addClass('scrolled');
    }
    else {
    	$('body').removeClass('scrolled');
    }
})

})(jQuery);