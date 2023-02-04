<style>

 #gtmmain {
     width:350px;
     border-radius: 4px 4px 4px 4px;
     position: fixed;
     z-index: 100000;
     left: 70%;
     bottom: 0px;
     box-shadow:0px 0px 8px 0px black;
}
 #gtmclose {
     position: absolute;
     background: #333333;
     color: white;
     right: 24px;
     top: -21px;
    /* border-radius: 18%;
     */
     border-radius: 4px 4px 0px 0px;
     width: 32px;
     height: 21px;
     line-height: 30px;
     text-align: center;
     font-size: 14px;
     cursor: pointer;
     box-shadow: 0 0 0px 0 #000;
}
 #gtmheader {
     background: #333;
     color:white;
     font-weight:bold;
     border-radius: 4px 4px 0px 0px;
}
 .gtmquestion {
     padding-top: 14px;
     padding-left: 4%;
     padding-right: 4%;
     padding-bottom: 4%;
     font-size: 14px;
     line-height: 20px;
     text-align: center;
     word-break: break-word;
     word-wrap: break-word;
}
 .answerelement {
     padding-top: 14px;
     padding-left: 14%;
     padding-right: 4%;
     padding-bottom: 4%;
     font-size: 12px;
     line-height: 20px;
     text-align:left;
     word-break: break-word;
     word-wrap: break-word;
     background:#4D4D4D;
     color:white;
     border-bottom: 1px solid #333333 !important;
     border-top: 1px solid #666666 !important;
}
 .answerelement:hover {
     background:grey;
     color:black;
}
 #gtmfooter {
     background: #333;
     height: 44px;
     padding-top: 12px;
}
 #gtmsubmit {
     background: #4D4D4D;
     color: #333333;
     height: 22px;
     width: 55px;
     border-radius: 6px;
     padding-left: 20px;
     padding-top: 10px;
     margin-left: 39%;
}
 .gtmradio {
    display:none;
}
 .gtmradio:checked + div {
     color: white !important;
     background:#2de1a8 !important;
}
 .gtmcheckbutton{
     font-size: 11px;
     font-weight: bolder;
     text-align: center;
     width: 16px;
     height: 16px;
     float: left;
     background: #d7d7d7;
     color: #d7d7d7;
     border-radius: 15%;
     margin-top: 5%;
     margin-left: 4%;
}
 .radiolabel {
    cursor:pointer;
}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 
<script>
 (function() {

 	//YOU CAN ADD/REMOVE YOUR OWN ANSWERS HERE
 	var answers = [{
 			text: 'The pricing is out of my budget.',
 			id: '1'
 		},
 		{
 			text: 'I am unsure about what product is the best for me.',
 			id: '2'
 		},
 		{
 			text: 'The products do not reflect what I need.',
 			id: '3'
 		},
 		{
 			text: 'No.',
 			id: '4'
 		}
 	];
 	//YOU CAN ADD/REMOVE YOUR OWN ANSWERS HERE


 	$('body').prepend('<div id="gtmmain"><div id="gtmclose">-</div><div id="gtmheader"><p class="gtmquestion">Is something wrong buddy?</p></div><form id="gtmanswercontainer"></form><div id="gtmfooter"><div id="gtmsubmit">Send</div></div></div>');

 	answers.forEach(function(answer) {
 		generateQuestionElement(answer);
 	});


 	function generateQuestionElement(answer) {
 		var answerelement = $('<label class="radiolabel"><input type="checkbox" class="gtmradio" value="' + answer.text + '" name="' + answer.id + '"/><div class="gtmcheckbutton">&#10004;</div><div class="answerelement">' + answer.text + '</div></label>');
 		answerelement.appendTo($('#gtmanswercontainer'));
 	}

 	$('#gtmsubmit').click(function() {
 		if ($("#gtmanswercontainer input:checkbox:checked").length > 0) {
 			var xgtm = $('#gtmanswercontainer').serializeArray();
 			for (i = 0; i < xgtm.length; i++) {
 				dataLayer.push({
 					'event': 'AnswerPush',
 					'Answer_id': xgtm[i].name,
 					'Answer_name': xgtm[i].value
 				});
 			}

 			$('#gtmmain').remove();
 		}
 	});

 	$(document).click(function() {
 		if ($("#gtmanswercontainer input:checkbox:checked").length > 0) {
 			$('#gtmsubmit').css("background", "#00C764");
 			$('#gtmsubmit').css("color", "white");
 			$('#gtmsubmit').css("cursor", "pointer");
 		} else {
 			$('#gtmsubmit').css("background", "#4D4D4D");
 			$('#gtmsubmit').css("color", "#333333");
 			$('#gtmsubmit').css("cursor", "default");
 		}
 	});


 	var minimized = 0;
 	var container_height = $('#gtmmain').height();
 	var header_height = $('#gtmheader').height();
 	var closing_distance = container_height - header_height;

 	$('#gtmclose').click(function() {
 		if (minimized == 0) {
 			minimized = 1;
 			$("#gtmmain").animate({
 				bottom: "-=" + closing_distance
 			}, 700);
 			$('#gtmclose').text('+');
 		} else {
 			minimized = 0;
 			$("#gtmmain").animate({
 				bottom: "+=" + closing_distance
 			}, 700);
 			$('#gtmclose').text('-');
 		}
 	});


 })();  
</script>
