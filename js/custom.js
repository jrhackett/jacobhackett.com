$(document).ready(function() {
	$('#robotarm').hide();
	$('#firerobot').hide();
	$('#website').hide();
	var count = 1;

	$('#moreProjects').click(function() {
		$('#robotarm').slideToggle("normal");
		$('#firerobot').slideToggle("normal");
		$('#website').slideToggle("normal");
		if(count === 1) {
			$('#button-text').text('Hide more projects');
			count = 0;
		} else {
			$('#button-text').text('Show more projects');
			count = 1;
		}
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