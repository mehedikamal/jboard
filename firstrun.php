<?php
	if(HasNotBeenUpdated()) RunUpdate();
	
	function HasNotBeenUpdated() {
		$lastUp = filemtime("last_up");
		
		// Update once per day.
		return !$lastUp == false || date($lastUp) < strtotime('-1 day');
	}
	
	function RunUpdate() {
		// exec('"C:\ProgramData\ComposerSetup\bin\composer.bat" install');
		// @ECHO OFF
		// exec('php "%~dp0composer.phar" %*');
		try {
			exec('php composer.phar install');
		} catch (Exception $ex) { echo $ex;}
		
		$myfile = fopen("last_up", "w") or die("Unable to open file!");
		fclose($myfile);
	}
?>