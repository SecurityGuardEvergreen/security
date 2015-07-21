<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCodeTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('codes',function($table){
			$table -> increments('id');
			$table -> integer('station_id') -> unsigned();
			$table -> foreign('station_id') -> references('id') -> on ('stations');
			$table -> integer('group_id') -> unsigned();
			$table -> foreign('group_id') -> references('id') -> on ('groups');
			$table -> string('pass_code',64);
			$table -> timestamps();
			
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
		Schema::drop('codes');
	}

}
