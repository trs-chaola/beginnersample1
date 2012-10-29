<?php


if ($_REQUEST['action'] == 'getquestion') {


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


	print_r($questionList);


}
