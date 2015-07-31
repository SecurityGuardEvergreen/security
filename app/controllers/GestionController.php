<?php

class GestionController extends BaseController {

public function index(){
	$data = new stdclass;
	$data->estado = Estado::all();
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





	}