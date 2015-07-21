<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAreasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('areas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name',45)->unique();
			$table->string('telf',30);
			$table->timestamp('created_at');
			$table->timestamp('update_at');
		});

		// Schema::table('areas', function($table)
		// {
		//     $table->string('email');
		// });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
		Schema::drop('areas');
	}

}
