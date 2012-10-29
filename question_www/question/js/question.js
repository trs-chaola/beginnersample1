/**
 *
 *
 *     ini
 *
 *
 */

var questionList;
var result;
var DISPLAY_QUESTION_ID = '#question';
var DISPLAY_RESULT_ID = '#school_list';
var BLOCK_QUESTION = '#question_block';
var BLOCK_RESULT   = '#result_block';
var BLOCK_ANSWER   = '#answer_block';
$(document).ready(function(){
	// get question
	getQuestionList();
	// set answer event
	setEventAnswerButton();
});

/**
 *
 *
 *     go
 *
 *
 */

/**
 *  go Next
 */
function goNext() {
	if (questionList.now >= questionList.total) {
		goResult();
		return;
	}
	questionList.now++;
	displayCurrentQuestion();
}

/**
 *  go Result
 */
function goResult() {

	getResult();
}

/**
 *
 *
 *     display
 *
 *
 */

/**
 *  display current question
 */
function displayCurrentQuestion() {
	$(DISPLAY_QUESTION_ID).html(questionList['questions'][questionList.now]['question']);
}

/**
 *  display result
 */
function displayResult() {
	//$.print_r(result);

	$(BLOCK_QUESTION).css('display', 'none');
	$(BLOCK_RESULT).css('display', 'block');
	$(BLOCK_ANSWER).css('display', 'none');

	var html =  '<ul>' +
					'<li>' +
						'<a href="' +result['schoollist']['1']['url']+  '">' +
							result['schoollist']['1']['name'] +
							' course:' + result['schoollist']['1']['course'] +
							' room:'   + result['schoollist']['1']['room'] +
						'</a>' +
					'</li>' +
					'<li>' +
						'<a href="' +result['schoollist']['2']['url']+  '">' +
						' course:' + result['schoollist']['2']['course'] +
						' room:'   + result['schoollist']['2']['room'] +
						'</a>' +
					'</li>' +
				'</ul>';
	$(DISPLAY_RESULT_ID).html(html);
}

/**
 *
 *
 *     get
 *
 *
 */


/**
 *  get Question List
 */
function getQuestionList() {

	$.ajax({
		type: "POST",
		url: "question/receive.php",
		data: "action=getquestion",
		success: function(json){
			var obj = $.evalJSON(json);
			switch (obj.response) {
				case 'error':
					alert(obj.message);
					break;
				case 'ok':
					questionList = obj.result;
					$.print_r(questionList);
					// go next
					goNext();
					break;
				default:
					break;
			}
		}
	});
}


/**
 *  get Result
 */

function getResult() {
	$.ajax({
		type: "POST",
		url: "question/receive.php",
		data: "action=getresult&questionlist=" + $.toJSON(questionList),
		success: function(json){
			var obj = $.evalJSON(json);
			switch (obj.response) {
				case 'error':
					alert(obj.message);
					break;
				case 'ok':
					result = obj.result;
					$.print_r(result);
					displayResult();
					break;
				default:
					break;
			}
		}
	});
}


/**
 *
 *
 *     get
 *
 *
 */

/**
 *  set Answer
 */
function setAnswer(answer_no) {
	questionList['questions'][questionList.now]['answer'] = answer_no;
}

/**
 *  set Answer Event
 */

function setEventAnswerButton() {
	$(".answer_button").click(function(event){
		var answer_no = event.target.id.replace('answer_', '');
		setAnswer(answer_no);
		goNext();
	});
}

