<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		// create jobs table for migration

		Schema::create('jobs', function($table){

			$table->increments('id');
			$table->integer('companyID');
			$table->integer('categoryID');
			$table->string('title');
			$table->text('ApplyAt');
			$table->text('description');
			$table->boolean('isFeatured')->default(0);
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
		//Drop jobs table

		Schema::drop('jobs');
	}

}
