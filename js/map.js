
var draw_circle=null;
var flag = 1;

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.87041555, lng: -23.81835937},
    scrollwheel: false,
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

	draw_circle = new google.maps.Circle({
		center: new google.maps.LatLng(33.87041555, -23.81835937),
		radius: 10000,
		strokeColor: "red",
		strokeOpacity: 0.8,
		strokeWeight: 4,
		fillColor: "red",
		fillOpacity: 0.0,
		map: map
	});
	loop();
}

function loop() {
	//console.log("hi");
	setTimeout(function() {
		/*if(draw_circle.radius > 10000 && flag === 1) {
			// draw_circle.radius-=10000;
			draw_circle.setRadius(draw_circle.radius - 10000);
			console.log("subtract");
		}
		else if(draw_circle.radius < 700000 && flag === 0) {
			// draw_circle.radius+=10000;
			draw_circle.setRadius(draw_circle.radius + 10000);
			console.log("add");
		}
		else {
			if(flag === 1){flag = 0;}else{flag = 1;}
			console.log(flag, draw_circle.radius);
		}*/

		if(draw_circle.radius < 900000) {
			draw_circle.setRadius(draw_circle.radius + 40000);
			draw_circle.setProperty("strokeOpacity", (Math.log(draw_circle.radius/900000)/Math.log(0.0036029)));
			console.log(draw_circle.strokeOpacity);
		}
		else {
			draw_circle.setRadius(900000);
			draw_circle.setMap(null);
			draw_circle = null;
		}
		if(draw_circle != null) {
			loop();
		}
	}, 25)
}



