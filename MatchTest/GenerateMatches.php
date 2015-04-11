<?php

function GenerateMatches()
{
	$business = $Businesses[0];
	
	$business['Matches'] = array();

	for($userIndex = 0; $userIndex < count($Users); $userIndex++)
	{
		$user = $Users[$userIndex];
		$matchPercent = 0;
	
		for($questionIndex = 0; $questionIndex < count($Questions); $questionIndex++)
		{
			$businessValue = $business['Answers'][$questionIndex];
			$userValue = $user['Answers'][$questionIndex];
			
			$matchPercent += (4 - abs($businessValue - $userValue));
		}
		
		$business['Matches'][$userIndex] = $matchPercent;
	}
	
	var_dump($business['Matches']);
}

?>