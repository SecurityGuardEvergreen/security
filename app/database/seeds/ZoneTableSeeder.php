<?php

class ZoneTableSeeder extends Seeder{

	public function run(){
		$zonas = [
			array('name' => 'Clave 01-A',
				'area_id' => 1),
			array('name' => 'Clave 02-A',
				'area_id' => 1),
			array('name' => 'Clave 03-A',
				'area_id' => 1),
			array('name' => 'Clave 04-A',
				'area_id' => 1),
			array('name' => 'Clave 05-A',
				'area_id' => 1)
		];
		DB::table('zones')->insert($zonas);
	}
}