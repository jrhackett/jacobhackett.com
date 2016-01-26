$(document).ready(function() {
	$('#robotarm').hide();
	$('#firerobot').hide();

	$('#moreProjects').click(function() {
		$('#robotarm').slideToggle("normal");
		$('#firerobot').slideToggle("normal");
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});