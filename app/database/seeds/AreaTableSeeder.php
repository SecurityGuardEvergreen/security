<?php

class AreaTableSeeder extends Seeder{

	public function run(){
		$areas = [
			array('name' => 'Santa Rosa',
				'user_id' => 1),
			array('name' => 'Loma Linda',
				'user_id' => 1)
		];
		DB::table('areas')->insert($areas);
	}
}