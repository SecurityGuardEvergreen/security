<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('hello');
	}

	public function login()
	{
		// Get post
		$userdata = array(
			'name' => Input::get('nickname'),
			'password' =>  Input::get('password')
			);

		if(Auth::attempt($userdata))
		{
			return "Usuario logeado correctamente";
		}
		else
		{
			return Redirect::back()->with('error_message', 'Datos incorrectos, intenta nuevamente !!!');
		}
	}

	// -Dashboard-
	public function dashboard()
	{	
		$data = new stdclass;
		$data->areas = Area::all();
		$data->primero = Area::first();
		$id_primer_registro = $data->primero->id;

		$data->primerof = DB::table('areas')
		->join('users','areas.id','=','users.id')
		->where('areas.id','=',$data->primero->user_id)->get();

		$data->zona_actual = Area::find($id_primer_registro)->zone;
		// $data->zona = Zone::find(2)->group;
		// $manag = User::find($data->primero->user_id)->area;
		  // var_dump($data->primerof[0]->name);
		return View::make('admin.dashboard') -> with('data',$data);

	}
	// -----------

}
