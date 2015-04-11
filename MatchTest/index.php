<?php

require('GenerateQuestions.php');
require('GenerateUserAnswers.php');
require('GenerateBusinessAnswers.php');
require('GenerateMatches.php');

function main() {
	GenerateQuestions();
	
	GenerateUsers();
	
	GenerateUserAnswers();
	
	GenerateBusiness();
	
	GenerateBusinessAnswers();
	
	GenerateMatches();
}

main();
?>