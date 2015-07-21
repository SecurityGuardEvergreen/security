<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreaateAlertTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('alerts',function($table){
			$table -> increments('id');
			$table -> integer('message_id') -> unsigned();
			$table -> integer('typealert_id') -> unsigned();
			$table -> integer('station_id') -> unsigned();
			$table -> foreign('station_id') -> references('id') -> on ('stations');
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
		Schema::drop('alerts');
	}

}
