<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCategories extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		// Add Sample Categories to table

		DB::table('categories')->insert(array(

			'title'=> 'Programming Jobs',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('categories')->insert(array(

			'title'=> 'Design Jobs',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('categories')->insert(array(

			'title'=> 'System Administration Jobs',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('categories')->insert(array(

			'title'=> 'Virtual Assistant Jobs',
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('categories')->insert(array(

			'title'=> 'Business & Management Jobs',
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
