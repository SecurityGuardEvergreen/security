<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('persons',function($table){
			$table -> increments('id');
			$table -> string('name',45) -> unique();
			$table -> string('identify_card',15) -> unique();
			$table -> string('address',100) -> nullable();
			$table -> string('telf',20) -> nullable();
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
		Schema::drop('persons');
	}

}
