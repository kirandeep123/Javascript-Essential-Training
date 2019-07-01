function giveMeEms(pixels){
	var baseValue =16;
	function doTheMath(){
		return pixels/baseValue;
	}
	return doTheMath;
}
var smallSize =giveMeEms(12);
var mediumSIZE =giveMeEms(18);
var largeSize =giveMeEms(24);
var xLarge =giveMeEms(32);