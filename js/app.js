$(document).ready(function() {

	var xVal;
	var yVal;

	console.log('test');

	$('#xNum').focusout(function(){
		xVal = $(this).val();
		console.log("Out of focus!");
	});
	var addValues = function() {
		console.log('test');
	};

	addValues();
});