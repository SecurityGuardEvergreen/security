<?php



function calcular_edad($fecha)
{
	$dias = explode("-", $fecha, 3);
	$dias = mktime(0,0,0,$dias[1],$dias[0],$dias[2]);
	$edad = (int)((time()-$dias)/31556926 );

	return $edad;
}
// Funcion que verifica si el usuario está logueado o perdió 


// sesión por cierre del navegador
function verificaruserlogin($auth)
{


while ($auth) 
{
// $id = Cookie::get('dual');
// if (Auth::check()){
//     // usuario con sesión iniciada

//   User::where('id',$id)
//   ->update(array("ext"=>"117".date('H:i:s')));

// }else{
//     // no hay usuario
//   $auth = false;
//   User::where('id',$id)
//   ->update(array("ext"=>"107".date('H:i:s')));

// }//end if else
	$auth = false;
// sleep(1);

}//end while

	// return $auth;

}
// Fin verificaruserlogin