/* Author: 

*/

var thisImage =  1,
	i = 1,
	z = 1,
	thisPath = "img/slides/",
	totalQuads = $("body div").length,
	totalImages = 3;

console.log(totalQuads);

$(document).ready(function() {

	function slideChange() {
		
		if (i > totalQuads) {
			i = 1;
		}
		
		if (thisImage > totalImage) { 
			thisImage = 1;
		}
/*
		for(var x = 0; x < totalQuads; x++) {
		}*/

		
		$("#quad" + i).css("background", " #000 url(" + thisPath + thisImage +".gif) no-repeat center center");
		console.log(i);


		i++;
		z++;
	}//slideChange

    setInterval(slideChange, 1000);

});






















