<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreaateStacionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('stations',function($table){
			$table -> increments('id');
			$table -> integer('zone_id') -> unsigned();
			$table -> foreign('zone_id') -> references('id') -> on ('zones');
			$table -> string('name',45) -> unique();
			$table -> string('mac_address',45) -> unique();
			$table -> string('serial',45) -> unique();
			$table -> string('model',45) -> nullable();
			$table -> string('brand',45) -> nullable();
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
		Schema::drop('stations');
	}

}
