<?php

class UserLogin extends BaseController {


	public function user()
	{	
		$reglas =  array(
            // validamos que el nombre sea un campo obligatorio
        'nickname' => array('required', 'min:4'),
            // validamos que el usuario sea un campo obligatorio y de mínimo 8 caracteres
        'password'  => array('required')
    	);
    	 $validator = Validator::make(Input::all(), $reglas);

    	 if ( $validator->fails() ){

        // en caso de que la validación falle vamos a retornar al formulario
        // pero vamos a enviar los errores que devolvió Validator
        // y también los datos que el usuario escribió
        return Redirect::back()
                // Aquí se esta devolviendo a la vista los errores
                ->withErrors($validator)
                // Aquí se esta devolviendo a la vista todos los datos del formulario
                ->withInput();
    }else{
        
    	$userdata = array(
			'nickname' => Input::get('nickname'),
            'password' => Input::get('password')
			);

		if (Auth::attempt($userdata)) {

			Session::put('m_monitoring', 'active');
			Session::put('m_system', 'active');
			Session::put('m_reports', 'active');
			Session::put('m_help', 'active');
			// Actualizar si activo
			$id = Auth::id();

			$user = User::find($id );
			$user->activo = 1;
			$user->save();
			return Redirect::to('admin');
		}else{
			return Redirect::back()
			->with('error_message','Los datos suministrados son incorrectos !!!');
		}

        exit;
    }

		

	}
	// Fin función user validar sesion

	// --Funcion verificar display login--
	public function login()
	{	
		if(Auth::check())
		{	
			
			return Redirect::to('admin');
		}
		else
		{
			return View::make('login.index');
		}


		
	}
	// Fin Login
	// --Funcion verificar display login--
	public function logingestion()
	{	
		if(Auth::check())
		{	
			
			return Redirect::to('jornada');
		}
		else
		{
			return View::make('login.index');
		}


		
	}
	// Fin Login

	public function logout()
	{		
			$id = Auth::id();
			$user = User::find($id );
			$user->activo = 0;
			$user->save();

			Auth::logout();
		return Redirect::to('login')->with('msg','Gracias Por visitarnos');
	}
	// fin logout

	// Forgot vista
	public function forgotView()
	{
		return View::make('login.forgot');
		// return View::make('emails.auth.reminder');
	}
	// fin Forgot vista


}
