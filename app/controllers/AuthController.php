<?php

class AuthControllers extends BaseController {

	public function login()
	{
		$nickname = mb_strtolower(trim(Input::get('nickname')));
		$password = Imput::get('password');

		// Autenticando
		if(Auth::attempt(['nickname'] => $nickname, 'password' => $password))
		{
			return Redirect::to('/hidden');
		}

		return Redirect::back()->with('msg','Datos incorrectos');
	}

	public function logout()
	{	
		// Desconenctando al usuario
		Auth::logout();

		return Redirect::to('/')->with('msg','Gracias por visitarnos !!!');
	}
}