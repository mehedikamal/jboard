<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddJobs extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		// Add sample jobs

		DB::table('jobs')->insert(array(
			'title'=> 'Front-End Developer',
			'companyID'=>1,
        	'categoryID'=>1,
        	'applyAt'=>'Email jobs to at <a href="jobs@coxinc.com">jobs@coxinc.com</a>',
			'description'=>'HTML5, CSS3, JavaScript',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')
		));

		DB::table('jobs')->insert(array(

			'title'=> 'User Interface Engineer',
        	'companyID'=>1,
        	'categoryID'=>1,
        	'applyAt'=>'Email jobs to at <a href="jobs@coxinc.com">jobs@coxinc.com</a>',
        	'description'=>'Got JSF?',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('jobs')->insert(array(

			'title'=> 'User Interface & Experience Designer',
        	'companyID'=>3,
        	'categoryID'=>2,
        	'applyAt'=>'Email jobs to at <a href="jobs@coxinc.com">jobs@coxinc.com</a>',
        	'description'=>'Got JSF?',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
