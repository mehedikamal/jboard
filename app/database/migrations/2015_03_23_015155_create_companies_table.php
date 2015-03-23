<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		// Create companies Table 
		
		Schema::create('companies', function($table){
			$table->increments('id');
			$table->string('title');
			$table->string('address');
			$table->string('website');
			$table->string('email');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		// Drop companies table
		Schema::drop('companies');
	}

}
