/* Author: 

*/

$("document").ready(function() { 

	function changeSlide() {
		var thisImage =  ,
			thisPath = "img/gifs/";
		$("html").css("background", "url(" thisPath + thisImage + ") no-repeat");
	}

	setTimeout( changeSlide, 1000);

});




















