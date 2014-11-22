$(document).ready(function() {

	var xVal;
	var yVal;
	var operator;
	var answer;


	// GRAB VALUES ON FOCUSOUT
	$('#xNum').on('focusout', function(){
		xVal = parseInt($(this).val(), 10);
	});

	$('#yNum').on('focusout', function(){
		yVal = parseInt($(this).val(), 10);
	});


	// CALCULATE ANSWER WHEN BUTTONS ARE CLICKED
	$('.op1').on('click', function(){
		answer = xVal + yVal;
		operator = "+";
		showAns();
		$('.button').removeClass('active');
		$(this).addClass('active');
	});

	$('.op2').on('click', function(){
		answer = xVal - yVal;
		operator = "-";
		showAns();
		$('.button').removeClass('active');
		$(this).addClass('active');
	});

	$('.op3').on('click', function(){
		answer = xVal * yVal;
		operator = "×";
		showAns();
		$('.button').removeClass('active');
		$(this).addClass('active');

	});

	$('.op4').on('click', function(){
		answer = xVal / yVal;
		operator = "÷";
		showAns();
		$('.button').removeClass('active');
		$(this).addClass('active');
	});


	// DISPLAY ANSWER

	var showAns = function () {
		$('.error1').hide();
		$('.error2').hide();
		$('.resultsLine').hide();
		$('.xValue').text(xVal);
		$('.operator').text(operator);
		$('.yValue').text(yVal);
		$('.answer').text(answer);
		if(isNaN(xVal) && isNaN(yVal)) {
			$('.error2').show();
		}
		else if (isNaN(xVal) || isNaN(yVal)) {
			$('.error1').show();	
		}

		else {
			$('.resultsLine').show();
		};
		
	};





});