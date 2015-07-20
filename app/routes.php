<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('movil.index');
});

// Pagina principal donde está la autenticación
Route::get('login','UserLogin@login');


// =========Admin System=========
Route::group(array('before' => 'auth','prefix' => 'admin') ,function(){
	Route::any('/','HomeController@dashboard');

});
// =========Admin System=========

// Rutas referente al logueo y pass
Route::post('login','UserLogin@user');
Route::get('logout', 'UserLogin@logout');
Route::get('forgot','RemindersController@getRemind');
Route::post('forgot','RemindersController@postRemind');
Route::get('password/reset/{token?}','RemindersController@getReset');
Route::post('password/reset/t','RemindersController@postReset');
Route::get('otrousr',function(){

	$user = new User;

	$user->nickname = 'John';
	$user->password = Hash::make('password');
	$user->email = 'elvis.reyes@evergreenservice.net';
	$user->save();
	
	$insertedId = $user->id;
	return var_dump($insertedId);

});
Route::get('sesio',function(){

	$data = Session::all();

	return var_dump($data);

});
// ---------------------------
