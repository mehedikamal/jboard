<?php
	if(FilesAreNotUpToDate()) UpdateFiles();
	
	// Setup should be run manually once until this is resolved
	//if(DatabaseIsNotPresent()) CreateDatabase();
	CreateDatabase();
	
	echo '<br />Done.';
	
	function FilesAreNotUpToDate() {
		$lastUp = filemtime("last_up");
		
		// Update once per day.
		return !$lastUp == false || date($lastUp) < strtotime('-1 day');
	}
	
	function UpdateFiles() {
		// exec('"C:\ProgramData\ComposerSetup\bin\composer.bat" install');
		// @ECHO OFF
		// exec('php "%~dp0composer.phar" %*');
		try {
			exec('php composer.phar install');
		} catch (Exception $ex) { echo $ex;}
		
		$myfile = fopen("last_up", "w") or die("Unable to open file!");
		fclose($myfile);
	}
	
	function DatabaseIsNotPresent() {
	}
	
	function CreateDatabase() {
		mysql_connect('localhost', 'snatchapro', 'changeme');
		mysql_query('CREATE DATABASE `noOfficeNeeded`') or die(mysql_error());
		
		exec('php artisan migrate');
	}
?>