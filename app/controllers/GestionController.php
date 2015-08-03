<?php

class GestionController extends BaseController {

public function index(){
	$data = new stdclass;
	$data->estado = Estado::all();
  $data->cargo = Cargo::all();
  $data->marital = Maritalstatu::orderBy('nombre', 'asc')->get();



	 return View::make('empleados.index')->with('data',$data);

}

// Sacando estados
public function estados(){

    return Estado::all()->toJson();

}

// Controlando la carga de los municipios
public function municipios(){

  return Municipio::where('estado_id','=', Input::get('estado'))->get();
}

// Controlando la carga de las parroquias
public function parroquias(){

  return Parroquia::where('municipio_id','=', Input::get('municipio'))
  					->get();
}

// Controlando la carga de las ciudades
public function ciudades(){

  return Ciudad::where('municipio_id','=', Input::get('municipio'))
  					->get();
}

// Procesar
public function procesar(){
  // Capturando cantidad de familires
$n_familiar = Input::get('n_familiar');

echo "Nombres de familiares ".$n_familiar;
echo "<br>";
// $carga = array();
for ($i=1; $i <= $n_familiar ; $i++) {
  # code...
  $carga['familiar'][] = array(
    'nombre' => Input::get('fullname'.$i),
    'parentesco' => Input::get('parentesco'.$i),
    'edad' => Input::get('edadp'.$i),
    'sexo' => Input::get('sexop'.$i)
    );
  // $carga['parentesco'] = Input::get('parentesco'.$i);
  }
  echo "<br>";
   // var_dump($carga);
  foreach ($carga['familiar'] as $key => $value) {
    # code...
     echo "El nombre es ".$value['nombre'];
     echo " El parentesco es ".$value['parentesco'];
     echo " La edad es ".$value['edad'];
     echo " y el sexo es ".$value['sexo'];
     echo "<br>";
    // print_r($value);
     // echo "<br> dos ".$key." es key ";
     // var_dump($value['parentesco']);
  }

// $input = Input::all();
// var_dump($name);
// var_dump($nf);
}




	}
