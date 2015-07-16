<?php

class UserLogin extends BaseController {


	public function user()
	{	

		$userdata = array(
			'nickname' => Input::get('nickname'),
            'password' => Input::get('password')
			);

		if (Auth::attempt($userdata)) {
			return Redirect::to('admin');
		}else{
			return Redirect::to('login')->with('error_message','Datos incorrectos, intenta nuevamente !!!');
		}
	}
	// Fin función user validar sesion

	// --Funcion verificar display login--
	public function login()
	{	
		if(Auth::check())
		{	
			// Actualizar si activo
			$id = Auth::id();

			$user = User::find($id );
			$user->activo = 1;
			$user->save();

			return Redirect::to('admin');
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
