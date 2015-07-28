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
	
	Route::any('/',array("before" => "roles:1-2-3,/",function(){
		return Redirect::to('admin/monitoring');
	}));
	Route::any('monitoring/{id?}',array("before" => "roles:1-2-3,/",'uses' => 'HomeController@dashboard'));
	Route::any('system/{dato?}',array("before" => "roles:1-2-3,/",'uses' => 'HomeController@system'));
	Route::get('data_user',array('before'=>'roles:1-2-3,/','uses' =>'HomeController@datausers'));


	// Route::get('new_post',array("before" => "roles:1-2-3,admin", function()
	// {
 
	// 	return "Como mínimo tu role debe ser editor, tu eres " . getRole(Auth::user()->type_user_id);
	    
	// }));

	Route::get('sin_acceso',function(){
		return "no tienes acceso =(";
	});



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

//devuelve el nombre del rol del usuario según el número
Route::get('update',function(){

	$yes= DB::table('users')
            ->where('id', 2)
            ->update(array('type_user_id' => 1));
     // $yes = DB::update();
	return "usuario actualizado :D es ".$yes;
});
 
 Route::get('ver',function(){

 	// $area = Area::find(1) -> zone() -> where('id', '=', '3')->first();
 	// $comments = Post::find(1)->comments;
 	$area = Area::find(1);

    foreach ($area -> zone as $key => $value) {
		# code...
		$valor[] = $value;
	}


	return var_dump($valor);

});

	
	Route::get('crearg',function(){

		$grupo = new Group;
		$grupo->name="Vengala";
		$grupo->zone_id=2; 
		$grupo->save();
		
	
	return "Listo";
});