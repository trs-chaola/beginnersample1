<?php

$action = $_REQUEST['action'];

try {

	switch ($action) {
		case 'getquestion':
			echo json_encode(getQuestionList());
			break;
		case 'getresult':
			echo json_encode(getResult());
			break;
		default:
			throw new Exception('bad querry');
			break;
	}

} catch (Exception $e) {
	$error = array(
		'response' => 'error',
		'message'  => 'エラーが発生しました。しばらくたって再度アクセス頂くか、管理者までお問い合わせください。'
						 . '   mess(' . $e->getMessage() . ')   line(' . $e->getLine() . ')'
	);
	echo json_encode($error);
}


/*
 *  get Question List
 */

function getQuestionList() {

	$questionList = array(
		'response'      => 'ok',
		'result'  => array(
			'total'     => 3,
			'now'       => 0,
			'questions' => array(
				'1' => array(
					"id"       => "1",
					"question" => "i wana eat japanease ",
					"answer"   => ""
				),
				'2' => array(
					"id"       => "2",
					"question" => "near the sea",
					"answer"   => ""
				),
				'3' => array(
					"id"       => "3",
					"question" => "with Native American and one-on-one",
					"answer"   => ""
				)
			)
		)
	);
	return $questionList;
}


/*
 *  get Result
 */

function getResult() {
	$resultList = array(
		'response'      => 'ok',
		'result'  => array(
			'schoollist' => array(
				'1' => array(
					"name"   => "SME",
					"course" => "sparta",
					"room"   => "3",
					"url"    => "http://yahoo.com"
				),
				'2' => array(
					"name"   => "SME",
					"course" => "normal",
					"room"   => "5",
					"url"    => "http://google.com"
				)
			)
		)
	);
	return $resultList;
}


?>