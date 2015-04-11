<?php

$Users;

function GenerateUsers($count = 25)
{	
	$Users = array();

	for($i = 0; $i < $count; $i++) GenerateUser();
}

function GenerateUser()
{
	$user = array();
	
	$user['Name'] = 'Guy' . count($Users);
	
	$Users[] = $user;
}

function GenerateUserAnswers()
{
	if(is_null($Questions)) return;

	for($userIndex = 0; $userIndex < count($Users); $userIndex++)
	{
		$Users[$userIndex]['Answers'] = array();
		
		for($questionIndex = 0; $questionIndex < count($Questions); $questionIndex++)
		{			
			$Users[$userIndex]['Answers'][$questionIndex] = rand(1, 5);
		}
	}
}

?>