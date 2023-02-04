<style type="text/css">
 .question {
     font-size:24px;
     font-family: "Helvetica Neue", "Arial", sans-serif;
}
 .question-text {
     font-size:20px;
     line-height:30px;
     font-family: Lato, sans-serif;
     height: 94px;
     width: 541px;
     border-bottom: 1px solid darkgray;
}
 .answer {
     font-size:17px;
     font-family: "Helvetica Neue", "Arial", sans-serif;
     margin-top:7%;
     display:block;
     height:110px;
}
 #shadergtm {
     position: fixed;
     height: 100%;
     width: 100%;
     background: #000;
     background: rgba(0,0,0,.7);
     z-index: 99999;
     top: 0;
     left: 0;
}
 #gtmclose {
     position: absolute;
     background: black;
     color: white;
     right: -15px;
     top: -15px;
     border-radius: 50%;
     width: 30px;
     height: 30px;
     line-height: 30px;
     text-align: center;
     font-size: 11px;
     font-weight: bold;
     font-family: 'Arial Black', Arial, sans-serif;
     cursor: pointer;
     box-shadow: 0 0 10px 0 #000;
}
 #gtmclose:hover {
    font-size: 12px;
     animation-name: closes;
     animation-duration: 0.5s;
}
/* Chrome, Safari, Opera */
 @-webkit-keyframes closes {
     0% {
        transform: rotate(90deg);
    }
     25% {
        transform: rotate(180deg);
    }
     50% {
        transform: rotate(270deg);
    }
     100% {
        transform: rotate(360deg);
    }
}
/* Standard syntax */
 @keyframes closes {
     0% {
        transform: rotate(90deg);
    }
     25% {
        transform: rotate(180deg);
    }
     50% {
        transform: rotate(270deg);
    }
     100% {
        transform: rotate(360deg);
    }
}
 #gtmheader {
     height:31px;
     -moz-border-radius: 0px;
     -webkit-border-radius: 10px 10px 0px 0px;
     border-radius: 10px 10px 0px 0px;
     background: rgb(251, 248, 244) linear-gradient(rgb(255, 250, 250), rgb(245, 245, 236)) repeat-x scroll 0% 0% / auto padding-box border-box;
     border-top: 0px none rgb(51, 51, 51);
     border-right: 0px none rgb(51, 51, 51);
     border-bottom: 1px solid rgb(234, 234, 234);
     border-left: 0px none rgb(51, 51, 51);
     border-radius: 4px 4px 0 0;
     outline: rgb(51, 51, 51) none 0px;
     text-align: center;
     padding-top: 12px;
     font-size: 20px;
     font-family:Lato, sans-serif;
     font-weight:bold;
     color: rgb(41, 101, 12);
}
 .gtmnextback {
    background:#3E83FD;
     padding: 8px 20px 8px 20px;
     color:white;
     font-family:Open Sans, sans-serif;
     text-decoration: none;
     font-size: 14px;
     margin-left:19px;
     box-shadow: 0px 0.5px 2px 0px black;
}
 .gtmnextback:hover {
    background:#3364BB;
}
 .gtmnextback:active {
    box-shadow: 0px 0px 0px 0px black;
}
 .gtmmain {
     background:white;
     width:0px;
     height:0px;
     border-radius: 5px 5px 5px 5px;
     position: fixed;
     z-index: 100000;
     top: 50%;
     left: 50%;
     margin-top: -200px;
     margin-left: -300px;
     box-shadow:0px 0px 30px 0px black;
     opacity:0;
}
 .gtmradio {
    display:none;
}
 .gtmradio:checked ~ * {
     color: white !important;
     background:#2de1a8 !important;
}
 .gtmcheckbutton{
     font-size:13px;
     font-weight:bolder;
     text-align:center;
     width:18px;
     height:18px;
     float:left;
     background:#d7d7d7;
     color:#d7d7d7;
     border-radius:50% 
}
 .gtmform{
     margin-left:30px;
     margin-top:35px;
     margin-right:30px;
}
 .gtmnextbackdiv{
     margin-top:28px;
    margin-left:34.5%;
}
 .gtmthanks{
     margin-top: 7%;
     font-size: 35px;
     margin-left: 17%;
     font-family: Arial, sans-serif;
}
 .radio{
    cursor: pointer;
}

  
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script>

(function() {
	$('body').prepend('<div id="shadergtm"><div class="gtmmain"><div id="gtmclose">X</div><div id="gtmheader">Help us make our services better!</div><form class="gtmform"><div class="question-container"></div></form><div class="gtmnextbackdiv"><a id="backBtn" href="#" class="btn_btn_large gtmnextback">Back</a><a id="nextBtn" href="#" class="btn_btn_large gtmnextback">Next</a></div></div></div>');
	$(".gtmmain").animate({
		opacity: "1",
		width: '600px',
		height: '400px'
	}, 500);
	$('#gtmclose').click(function() {
		$('#shadergtm').remove();
	});

	//YOU CAN MODIFY THE ANSWERS AND QUESTIONS HERE.                  
	var questions = [
		{
			text: 'Did you manage to complete your goal by visiting our site?',
			id: '1',
			type: 'single-select',
			options: ["Yes", "No"]
		},
		{
			text: 'Would you recommend our site to a friend?',
			id: '2',
			type: 'single-select',
			options: ["Highly unlikely ", "Unlikely", "Likely", "Highly likely"]
		},
		{
			text: 'How would you rate the experience?',
			id: '3',
			type: 'single-select',
			options: ["Very negative", "Negative", "Positive", "Very positive"]
		},
		{
			text: 'You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?',
			id: '4',
			type: 'single-select',
			options: ["a cucumber", "an ear of corn", "a watermelon", "cheese"]
		}

	];
	//YOU CAN MODIFY THE ANSWERS AND QUESTIONS HERE. 






	var portionOfWindowSizeForQuestions = 0.05;
	var firstQuestionDisplayed = 0;
	var lastQuestionDisplayed = 0;

	$(document).ready(function() {

		questions.forEach(function(question) {
			generateQuestionElement(question);
		});

		$('#backBtn').click(function() {
			if (!$('#backBtn').hasClass('disabled')) {
				showPreviousQuestionSet();
			}
		});

		$('#nextBtn').click(function() {
			if ($('#nextBtn').text() === 'Next') {
				showNextQuestionSet();
			} else {
				var xgtm = $('.gtmform').serializeArray();
				for (i = 0; i < xgtm.length; i++) {
					dataLayer.push({
						'event': 'AnswerPush',
						'Question': xgtm[i].name,
						'Answer': xgtm[i].value
					});
				}
				// call submitting stuff here. 
				$(".gtmform").remove();
				$(".gtmnextbackdiv").remove();
				$("#gtmheader").remove();
				$(".gtmmain").animate({
					height: '-=270'
				});
				$('.gtmmain').prepend('<div class="gtmthanks">Thank you for your help!</div>');
				setTimeout(function() {
					$("#shadergtm").remove();
				}, 1100);

			}

		});

		showNextQuestionSet();

	});



	function generateQuestionElement(question) {

		var questionId = "q_" + question.id;
		var questionElement = $('<div id="' + questionId + '" class="question"></div>');
		var questionTextElement = $('<legend class="question-text"></legend>');
		var questionAnswerElement = $('<ul class="answer"></ul>');
		questionElement.appendTo($('.question-container'));
		questionElement.append(questionTextElement);
		questionElement.append(questionAnswerElement);
		questionTextElement.text(question.text);
		if (question.type === 'single-select') {
			questionElement.addClass('single-select');
			question.options.forEach(function(option) {
				questionAnswerElement.append(
					'<li style="margin:0 0 10px 0;"><label class="radio"><input type="radio" class="gtmradio" value="' + option + '" name="' + questionId + '"/><div class="gtmcheckbutton">&#10004;</div>' + "&nbsp" + "&nbsp" + option + '</label></li>');
			});
		}
		questionElement.hide();
	}




	function hideAllQuestions() {
		$('.question:visible').each(function(index, element) {
			$(element).hide();
		});
	}


	function showNextQuestionSet() {
		hideAllQuestions();
		var finished = false;
		firstQuestionDisplayed = ++lastQuestionDisplayed;

		do {
			$('.question-container > div.question:nth-child(' + lastQuestionDisplayed + ')').show();
			var nextElement = $('.question-container > div.question:nth-child(' + (lastQuestionDisplayed + 1) + ')');
			nextElement.show();

			if (lastQuestionDisplayed >= questions.length || $('.question-container').height() > $(window).height() * portionOfWindowSizeForQuestions) {
				nextElement.hide();
				finished = true;
			} else {
				lastQuestionDisplayed++;
			}
		} while (!finished);

		doButtonStates();
	}


	function showPreviousQuestionSet() {
		hideAllQuestions();
		var finished = false;
		lastQuestionDisplayed = --firstQuestionDisplayed;

		do {
			$('.question-container > div.question:nth-child(' + firstQuestionDisplayed + ')').show();
			var previousElement = $('.question-container > div.question:nth-child(' + (firstQuestionDisplayed - 1) + ')');
			previousElement.show();

			if (firstQuestionDisplayed <= 1 || $('.question-container').height() > $(window).height() * portionOfWindowSizeForQuestions) {
				previousElement.hide();
				finished = true;
			} else {
				firstQuestionDisplayed--;
			}

		} while (!finished);

		doButtonStates();

	}


	function doButtonStates() {

		if (firstQuestionDisplayed == 1) {
			$('#backBtn').addClass('disabled');
		} else if ($('#backBtn').hasClass('disabled')) {
			$('#backBtn').removeClass('disabled');
		}

		if (lastQuestionDisplayed == questions.length) {
			$('#nextBtn').text('Finish');
		} else if ($('#nextBtn').text() === 'Finish') {
			$('#nextBtn').text('Next');
		}
	}

})();

</script>