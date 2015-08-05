<?php

class GestionController extends BaseController {

public function index(){
	$data = new stdclass;
	$data->estado = Estado::all();
  $data->cargo = Cargo::all();
  $data->educacion = Educationlevel::orderBy('id', 'asc')->get();
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

public function empleado_cd(){
      $datos = Empleado::where('ci','=',Input::get('ced'))->get();

  return Response::json([
    "data" =>$datos
    ]);
}
public function empleado_rif(){
      $datos = Empleado::where('rif','=',Input::get('rif'))->get();

  return Response::json([
    "data" =>$datos
    ]);
}

public function pdf(){
  $id = Input::get('id_registro');
  $empleado = Empleado::where('id','=',$id)->first();
  // echo "el registro es";
  // echo $id."<br>";
  // print_r($empleado);
  // echo "<br>";
  // var_dump($empleado->nombre);

  $data = array();
  $data['empleado'] = $empleado;
  $pdf = PDF::loadView('pdf.index',$data);
  return $pdf->stream();
return $pdf->download('invoice.pdf');
}
// ==========Procesar datos creados
public function procesar(){

  $respuesta = array('respuesta' => '',
          'insert'=>false,
          'update'=>false );
  // Capturando cantidad de familires
  $empleado = new Empleado;
  $familiar = new Familiar;
  // Datos del empleado
  $centro = Input::get('centro');
  $nombre = Input::get('name');
  $secondname = Input::get('secondname');
  $lastname = Input::get('lastname');
  $lastname2 = Input::get('lastname2');
  $ced_empleado = Input::get('ced');
  $rif = Input::get('rif');
  $edo_civil = Input::get('edo_civil');
  $nacimiento = Input::get('nacimiento');
  $sexo = Input::get('sexo');
  $blood = Input::get('blood');
  $lateralidad = Input::get('lateralidad');
  $telf = Input::get('telf');
  $telf_movil = Input::get('telf_movil');
  $educacion = Input::get('educacion');
  $cargo = Input::get('cargo');
  $estado = Input::get('estado');
  $municipio = Input::get('municipio');
  $parroquia = Input::get('parroquia');
  $address = Input::get('address');
  $discapacidad = Input::get('discapacidad');
  $n_familiar = Input::get('n_familiar');
  $nombre_contacto =Input::get('nombre_contacto');
  $telf_contacto =Input::get('telf_contacto');
  $id_update = Input::get('id');



  // Insertando el registro en la db
  // $cedula = Empleado::where('ci','=',$ced_empleado)->get(array('id'));
  // $rift = Empleado::where('rif','=',$rif)->get(array('id'));
  // $empleadoExiste = Empleado::where('ci', '=', $ced_empleado)
  //                           ->orWhere('rif','=', $rif)
  //                           ->get();
          // var_dump(!$cedula->isEmpty());
  // var_dump(Input::all());
  if($id_update!=''){
    // if para actualizar

    Empleado::where('id',$id_update)
                  ->update(array(
                    "centro_id"=>$centro,
                    "nombre" =>$nombre,
                    "segundo_nombre" =>$secondname,
                    "apellido" =>$lastname,
                    "segundo_apellido" =>$lastname2,
                    "ci" =>$ced_empleado,
                    "rif" =>$rif,
                    "maritalstatus_id" =>$edo_civil,
                    "fecha_nacimiento" =>$nacimiento,
                    "sexo_id" =>$sexo,
                    "sangre_tipo" =>$blood,
                    "lateralidad" =>$lateralidad,
                    "telf_fijo" =>$telf,
                    "telf" =>$telf_movil,
                    "educationlevel_id" =>$educacion,
                    "cargo_id" =>$cargo,
                    "estado_id" =>$estado,
                    "municipio_id" =>$municipio,
                    "parroquia_id" =>$parroquia,
                    "direccion" =>$address,
                    "discapacidad" =>$discapacidad,
                    "nombre_contacto" =>$nombre_contacto,
                    "telf_contacto" =>$telf_contacto
                    ));
    $respuesta['mensaje'] = '<strong>Excelente!</strong> Los cambios se han guardado exitosamente .';
    $respuesta['update'] =true;


  }else{
    // Insertando registros
    $empleado ->centro_id = $centro;
    $empleado ->nombre = $nombre;
    $empleado ->segundo_nombre = $secondname;
    $empleado ->apellido = $lastname;
    $empleado ->segundo_apellido = $lastname2;
    $empleado ->ci = $ced_empleado;
    $empleado ->rif = $rif;
    $empleado ->maritalstatus_id = $edo_civil;
    $empleado ->fecha_nacimiento = $nacimiento;
    $empleado ->sexo_id = $sexo;
    $empleado ->sangre_tipo = $blood;
    $empleado ->lateralidad = $lateralidad;
    $empleado ->telf_fijo = $telf;
    $empleado ->telf = $telf_movil;
    $empleado ->educationlevel_id =$educacion;
    $empleado ->cargo_id = $cargo;
    $empleado ->estado_id = $estado;
    $empleado ->municipio_id = $municipio;
    $empleado ->parroquia_id = $parroquia;
    $empleado ->direccion = $address;
    $empleado ->discapacidad = $discapacidad;
    $empleado ->nombre_contacto = $nombre_contacto;
    $empleado ->telf_contacto = $telf_contacto;

    $empleado -> save();
    $insertedId = $empleado->id;

    $respuesta['insertedId'] =$insertedId;


    // evaluando si tiene por lo menos una carga familiar
    $InputCarga = Input::get('fullname1');

    if($InputCarga !='')//If Cuando no hay carga familiar
    {
      // Perarando el array de carga familiar
for ($i=1; $i <= $n_familiar ; $i++) {
  # code...
  $carga['familiar'][] = array(
    'nombre' => Input::get('fullname'.$i),
    'parentesco' => Input::get('parentesco'.$i),
    'nacimiento' => Input::get('nacimientop'.$i),
    'sexo' => Input::get('sexop'.$i)
    );

  }

  foreach ($carga['familiar'] as $key => $value) {
    # code...
     $tmp[] = [
                //'order_id' => $order->id,
        'nombre' => $value['nombre'],
        'parentesco' => $value['parentesco'],
        'nacimiento' => $value['nacimiento'],
        'sexo_id' => $value['sexo'],
        'empleado_id' => $insertedId,
        'created_at'=>date('Y-m-d H:i:s'),
        'updated_at' =>date('Y-m-d H:i:s')

    ];

  }//for each

  $familiar -> insert($tmp);

  if($familiar){
    $respuesta['mensaje'] = '<strong>Perfecto!</strong> El registro se ha guardado exitosamente.';
    $respuesta['insert'] =true;
  }
    }else{//If cuando hay carga familiar

      $respuesta['mensaje'] = '<strong>Perfecto!</strong> El registro se ha guardado exitosamente sin carga familiar.';
    $respuesta['insert'] =true;


    }//else fin



  }//fin if
// var_dump($respuesta);

return $respuesta;

}




	}
