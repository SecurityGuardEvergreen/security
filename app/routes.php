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


// =========GESTION=========
Route::group(array('before' => 'gestionAuth','prefix' => 'jornada') ,function(){

	Route::any('/',array("before" => "roles:1-4,/",function(){
		return Redirect::to('jornada/staff');
	}));

	Route::any('gestion/',array("before" => "roles:1-4,/",'uses' => 'HomeController@dashboard'));
	Route::get('staff','GestionController@index');
	Route::get('estados', 'GestionController@estados');
	Route::post('municipios','GestionController@municipios');
	Route::post('parroquias','GestionController@parroquias');
	Route::post('ciudades','GestionController@ciudades');
	Route::post('empleado_cd','GestionController@empleado_cd');
	Route::post('empleado_rif','GestionController@empleado_rif');
	Route::post('procesar','GestionController@procesar');
	Route::post('procesar2','GestionController@procesar2');
	Route::any('pdf','GestionController@pdf');
	Route::post('deleteempleado','GestionController@deleteempleado');
	Route::post('elvis/{id?}', 'GestionController@elvis');
	

	Route::any('registros',array("before" => "roles:1-4-5,/",'uses' => 'GestionController@registros'));
	Route::any('edit/{ced?}',array("before" => "roles:1-4-5,/",'uses' => 'GestionController@edit'));
	Route::post('save/',array("before" => "roles:1-4-5,/",'uses' => 'GestionController@save'));

	Route::get('gestion',function(){
	return View::make('gestion.index');
	});

	Route::get('data_empleados',array('before'=>'roles:1-4-5,/','uses' =>'GestionController@data_empleados'));

	// Route::any('system/{dato?}',array("before" => "roles:1-2-3,/",'uses' => 'HomeController@system'));
	// Route::get('data_user',array('before'=>'roles:1-2-3,/','uses' =>'HomeController@datausers'));

	Route::get('sin_acceso',function(){
		return "no tienes acceso =(";
	});



});
// ========= FIN GESTION=========

// Pagina principal donde está la autenticación
Route::get('login','UserLogin@login');

// Rutas referente al logueo y pass
Route::post('login','UserLogin@user');
Route::get('logout', 'UserLogin@logout');
Route::get('forgot','RemindersController@getRemind');
Route::post('forgot','RemindersController@postRemind');
Route::get('password/reset/{token?}','RemindersController@getReset');
Route::post('password/reset/t','RemindersController@postReset');


Route::get('ingresar','UserIngresar@login');
// login
Route::post('ingresar','UserIngresar@user');
Route::get('salir', 'UserIngresar@logout');





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



Route::get('cambio',function(){


	return View::make('admin.systemc');

});
// Gestion
Route::get('gestion',function(){
	return View::make('gestion.index');
});

// Route::get('estados', 'GestionController@estados');
// Route::post('municipios','GestionController@municipios');
// Route::post('parroquias','GestionController@parroquias');
// Route::post('ciudades','GestionController@ciudades');
// Route::post('empleado_cd','GestionController@empleado_cd');
// Route::post('empleado_rif','GestionController@empleado_rif');
// Route::post('pdf','GestionController@pdf');

// Route::get('staff','GestionController@index');
// Route::any('ingresado','GestionController@busca');
Route::any('ingresado/{busca?}', array('as' => 'ingresado', 'uses' => 'GestionController@busca'));
// Route::post('procesar','GestionController@procesar');
Route::get('ir',function(){
	return View::make('empleados.dos');
});



Route::get('pruebac',function(){

// Session::put('Elvis', 'koo');
	$value = Auth::user()->activo;
// $data = Session::all();

// $value = Cookie::get('dual');

// if (Auth::check()){
//     // usuario con sesión iniciada

//   echo "Logueado con = ".$value." == ";



// }else{
//     // no hay usuario
//   echo "False con = ".$value." == "; 
 

// }

echo $value;



});

Route::any('pdf2',function(){
	// $data = array();
 //  // $data['empleado'] = array('nombre'=>'holas');
  // $pdf = PDF::loadView('pdf.index');
  // return $pdf->stream();

	return View::make('pdf.index');
// return $pdf->download('invoice.pdf');
});

Route::any('pdf3',function(){


	// DNS1D::getBarcodePNGPath("/barcode/mm", "C39");

	 $data = array();

     // $data['empleado'] = array('nombre'=>'holas');
	 $data['empleado'] = Empleado::join('preficeds','empleados.preficed_id','=','preficeds.id')
        ->join('rifs','empleados.prefirif_id','=','rifs.id')
        ->join('cargos','empleados.cargo_id','=','cargos.id')
        ->join('estados','empleados.estado_id','=','estados.id')
        ->join('municipios','empleados.municipio_id','=','municipios.id')
        ->join('parroquias','empleados.parroquia_id','=','parroquias.id')
        ->join('users','empleados.user_id','=','users.id')
        ->join('maritalstatus','empleados.maritalstatus_id','=','maritalstatus.id')
        ->join('educationlevels','empleados.educationlevel_id','=','educationlevels.id')
        ->join('sexos','empleados.sexo_id','=','sexos.id')
        ->select('estados.nombre as estado','users.area_update_id as update',
        	'educationlevels.nombre as niveledu','maritalstatus.nombre as marital',
          'municipios.nombre as municipio','parroquias.nombre as parroquia',
          'cargos.nombre as cargo','rifs.sigla as sigla_rif','empleados.*',
          'sexos.name as sexop',
          DB::raw('CONCAT(preficeds.sigla, "-", ci) as full_ced'))
        ->where('empleados.id','=',150)
        // ->orWhere('typeuser_id','=',1)
        ->get();




     $data['familiar'] = Familiar::join('sexos','familiars.sexo_id','=','sexos.id')
     	->select('sexos.name as sexof','familiars.*')
     	->where('familiars.empleado_id','=',150)->get();

        // var_dump($data['empleado']);
        // echo "<br><br>";

        // if($data['familiar']->isEmpty()){
        // 	echo "<br>Está vacia <br>";
        // }else{
        // 	echo "<br>Nooo vacia <br>";
        // }
        // var_dump($data['familiar']);

        // var_dump($data['empleado'][0]->full_ced);


// $pdf = PDF::loadView('pdf.index',$data)->setPaper('a4');
// return $pdf->stream();


});


Route::get('print',function(){
	return View::make('pdf.print');
});
// App::missing(function($exception)
// {
//     // return Response::view('errors.missing', array(), 404);
//     return Redirect::to('/');
// });


