<?php

class RemindersControllerGestion extends Controller {

	/**
	 * Display the password reminder view.
	 *
	 * @return Response
	 */
	public function getRemind()
	{
		return View::make('password.gestion.remind');
	}

	/**
	 * Handle a POST request to remind a user of their password.
	 *
	 * @return Response
	 */
	public function postRemind()
	{	

		$reglas =  array('email' => array('required', 'email'));
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
    }else
    {	$credentials = array('email' => Input::only('email'));
    	switch ($response = Password::remind($credentials,function($message){
    		$message->setFrom(array('elvisreyes@rsmappdevelopers.com' => 'Gestion de Empleados'));
			$message->subject('Reestablece la contraseña de tu cuenta');
    	}))
		{
			case Password::INVALID_USER:

				return Redirect::back()->with('error', Lang::get($response));

			case Password::REMINDER_SENT:
				return Redirect::back()->with('status', Lang::get($response));
		}
    }
		
	}

	/**
	 * Display the password reset view for the given token.
	 *
	 * @param  string  $token
	 * @return Response
	 */
	public function getReset($token = null)
	{
		if (is_null($token)) App::abort(404);

		return View::make('password.gestion.reset')->with('token', $token);
	}

	/**
	 * Handle a POST request to reset a user's password.
	 *
	 * @return Response
	 */
	public function postReset()
	{
		$credentials = Input::only(
			'email', 'password', 'password_confirmation', 'token'
		);

		$response = Password::reset($credentials, function($user, $password)
		{
			$user->password = Hash::make($password);

			$user->save();
		});

		switch ($response)
		{
			case Password::INVALID_PASSWORD:
			case Password::INVALID_TOKEN:
			case Password::INVALID_USER:
				return Redirect::back()->with('error', Lang::get($response));

			case Password::PASSWORD_RESET:
				return Redirect::to('gde/ingresar')->with('message_pass_cambio_true','Contraseña cambiada exitosamente !!!');
		}

	}

}
