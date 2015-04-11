<?php

$Businesses = array();

function GenerateBusiness()
{
	$business = array();
	
	$business['Name'] = count($Businesses) . ' inc';
	
	$Businesses[] = $business;
}

function GenerateBusinessAnswers()
{
	if(is_null($Questions)) return;

	for($businessIndex = 0; $businessIndex < count($Businesses); $businessIndex++)
	{
		$Businesses[$businessIndex]['Answers'] = array();
		
		for($questionIndex = 0; $questionIndex < count($Questions); $questionIndex++)
		{
			$Businesses[$businessIndex]['Answers'][$questionIndex] = rand(1, 5);
		}
	}
}

?>