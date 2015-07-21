<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelaciontableAlertMessages extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::table('alerts',function($table){
			$table -> foreign('message_id') -> references('id') -> on ('messages');
			$table -> foreign('typealert_id') -> references('id') -> on ('types_alerts');
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
	}

}
