<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCompanies extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		// Add dummy companies

		DB::table('companies')->insert(array(

			'title'=> 'Cox AutoMotive',
			'address'=> 'Atlanta, GA',
			'website'=> 'http://www.coxinc.com',
			'email'=> 'jobs@coxinc.com',	
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('companies')->insert(array(

			'title'=> 'AutoTrader Group',
			'address'=> 'Atlanta, GA',
			'website'=> 'http://www.autotradergroup.com',
			'email'=> 'jobs@autotradergroup.com',	
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')

			));

		DB::table('companies')->insert(array(

			'title'=> 'Time Warner Inc',
			'address'=> 'New York City, NY',
			'website'=> 'http://www.timewarner.com',
			'email'=> 'jobs@timewarner.com',	
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
