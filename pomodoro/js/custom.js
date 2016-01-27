var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio.mp3');
audioElement.setAttribute('autoplay', 'autoplay');
var total;
var working = 1;

function createTimer(time) {
	total = time;

	updateTimer()
	window.setTimeout("tick()", 1000);
}

$(document).ready(function() {
	$('#minutes').text("0");
	$('#seconds').text(":00");
	$('#status').text("Start working");
	$('#start').click(function() {
		start();
	})
});

function start() {
	if(working === 1) {
		working = 0;
		$('#title').text("Working");
		$('#status').text("Start your break");
		createTimer(5);
	}
	else {
		working = 1;
		$('#title').text("On a break");
		$('#status').text("Start working");
		createTimer(10);
	}
}

function tick() {
	if(total <= 0) {
		//play the sound here
		total = 0;
		start();
		return;
	}

	total -= 1;
	updateTimer();
	window.setTimeout("tick()", 1000);
}

function updateTimer() {
	var seconds = total;

	var minutes = Math.floor(seconds / 60);
	seconds -= minutes * (60);

	$('#minutes').text(minutes);
	if(seconds === 0) {
		$('#seconds').text(":00");
	} else if(seconds < 10) {
		$('#seconds').text(":0" + seconds);
	}else {
		$('#seconds').text(":" + seconds);
	}
}
