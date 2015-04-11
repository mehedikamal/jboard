<?php

$Questions = array();

function GenerateQuestions($count = 25)
{
	$Questions = array();
	
	for($i = 0; $i < $count; $i++)
	{
		$Questions[] = CreateQuestion();
	}
	
	//var_dump($Questions);
}

function CreateQuestion()
{
	return getRandomWord();

	//$question = array();
	
	//$question["
}

function getRandomWord($len = 10) {
    $word = array_merge(range('a', 'z'), range('A', 'Z'));
    shuffle($word);
    return substr(implode($word), 0, $len);
}
?>