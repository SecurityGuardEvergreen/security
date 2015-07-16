<?php

class AuthController extends BaseController {

	public function login()
	{
		$nickname = mb_strtolower(trim(Input::get('nickname')));
		$password = Imput::get('password');

		// Autenticando
		if(Auth::attempt(['nickname' => $nickname, 'password' => $password]))
		{
			return Redirect::to('/hidden');
		}

		return Redirect::back()->with('msg','Datos incorrectos');
	}

	public function logout()
	{	
		// Desconenctando al usuario
		// Auth::logout();

		return Redirect::to('/')->with('msg','Gracias por visitarnos !!!');
	}


	// ================Sesion 2
	 public function showLogin()
    {
        // Verificamos si hay sesión activa
        if (Auth::check())
        {
            // Si tenemos sesión activa mostrará la página de inicio
            return Redirect::to('/');
        }
        // Si no hay sesión activa mostramos el formulario
        return View::make('login');
    }
 
    public function postLogin()
    {
        // Obtenemos los datos del formulario
        $data = [
            'nickname' => Input::get('nickname'),
            'password' => Input::get('password')
        ];
 
        // Verificamos los datos
        if (Auth::attempt($data, Input::get('remember'))) // Como segundo parámetro pasámos el checkbox para sabes si queremos recordar la contraseña
        {
            // Si nuestros datos son correctos mostramos la página de inicio
            return Redirect::intended('/');
        }
        // Si los datos no son los correctos volvemos al login y mostramos un error
        return Redirect::back()->with('error_message', 'Invalid data')->withInput();
    }
 
    public function logOut()
    {
        // Cerramos la sesión
        Auth::logout();
        // Volvemos al login y mostramos un mensaje indicando que se cerró la sesión
        return Redirect::to('login')->with('error_message', 'Logged out correctly');
    }
    // ==================================================
}