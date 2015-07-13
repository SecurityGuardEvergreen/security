<?php

class UserTableSeeder extends Seeder{

	public function run(){
		$dt = new DateTime();
		$today = $dt->format('Y-m-d H:i:s');

		$users = [
			['nickname' => 'Admin', 'password' => Hash::make('1234567890yo'),'createddate_user' => $today,'lastupdate_user' =>$today ]
		];
		DB::table('users')->insert($users);
	}
}