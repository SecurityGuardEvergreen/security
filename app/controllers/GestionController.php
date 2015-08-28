<?php

class GestionController extends BaseController {

public function elvis($id =null){



// $id_cookie = Cookie::get('dual');
// Session::put('Elvis', 'Nose');
// verificaruserlogin($id);
  $id_user = Auth::id();

if (Auth::check()){
    // usuario con sesión iniciada

  User::where('id',$id_user)
  ->update(array("activo"=>"1"));

}
// echo "False"; 
//   User::where('id',$id)
//   ->update(array("ext"=>"87"));


  // return "hola";
}

public function index(){
// Creando cookie
$name="dual";
$value =Auth::id();
$minutes =60;
Cookie::queue($name, $value, $minutes);
// Fin

  $data = new stdclass;
  $data->estado = Estado::all();
  $data->tipo_contrato = Tipocontrato::all();
  $data->cargo = Cargo::all();
  $data->preficed = Preficed::all();
  $data->rif= Rif::all();
  $data->educacion = Educationlevel::orderBy('id', 'asc')->get();
  $data->marital = Maritalstatu::orderBy('nombre', 'asc')->get();
  $data->title = "Jornada de Actualización";


   return View::make('empleados.index')->with('data',$data);

}

public function registros(){
  $data = new stdclass;
  $data->title = "Registros";
  return View::make('empleados.resgistros')->with('data',$data);
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
      $datos = Empleado::where('ci','=',Input::get('ced'))
              ->where('preficed_id','=',Input::get('tipo'))->get();

  return Response::json([
    "data" =>$datos
    ]);
}
public function empleado_rif(){

      $datos = Empleado::where('rif','=',Input::get('rif'))
            ->where('prefirif_id','=',Input::get('tipo'))->get();

  return Response::json([
    "data" =>$datos
    ]);
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
  $tipo_ced = Input::get('tipo_ced');
  $ced_empleado = Input::get('ced');
  $tipo_rif = Input::get('tipo_rif');
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
  $antiguedad = Input::get('ingreso');
  $estado = Input::get('estado');
  $municipio = Input::get('municipio');
  $parroquia = Input::get('parroquia');
  $address = Input::get('address');
  $discapacidad = Input::get('discapacidad');
  $n_familiar = Input::get('n_familiar');
  $nombre_contacto =Input::get('nombre_contacto');
  $telf_contacto =Input::get('telf_contacto');
  $rela_contacto = Input::get('rela_contacto');
  $id_update = Input::get('id');
  $tipo_contrato = Input::get('tipo_contrato');
  $user_id_log = Auth::id();


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
                    "centro"=>$centro,
                    "nombre" =>$nombre,
                    "segundo_nombre" =>$secondname,
                    "apellido" =>$lastname,
                    "segundo_apellido" =>$lastname2,
                    "preficed_id" =>$tipo_ced,
                    "ci" =>$ced_empleado,
                    "prefirif_id" => $tipo_rif,
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
                    "antiguedad" => $antiguedad,
                    "estado_id" =>$estado,
                    "municipio_id" =>$municipio,
                    "parroquia_id" =>$parroquia,
                    "direccion" =>$address,
                    "discapacidad" =>$discapacidad,
                    "nombre_contacto" =>$nombre_contacto,
                    "rela_contacto" =>$rela_contacto,
                    "telf_contacto" =>$telf_contacto,
                    "user_id_update" =>$user_id_log,
                    "tipocontrato_id"=> $tipo_contrato
                    ));
    $respuesta['mensaje'] = '<strong>Excelente!</strong> Los cambios se han guardado exitosamente .';
    $respuesta['update'] =true;


  }else{
    // Insertando registros
    $empleado ->centro = $centro;
    $empleado ->nombre = $nombre;
    $empleado ->segundo_nombre = $secondname;
    $empleado ->apellido = $lastname;
    $empleado ->segundo_apellido = $lastname2;
    $empleado ->preficed_id = $tipo_ced;
    $empleado ->ci = $ced_empleado;
    $empleado ->prefirif_id = $tipo_rif;
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
    $empleado ->antiguedad = $antiguedad;
    $empleado ->estado_id = $estado;
    $empleado ->municipio_id = $municipio;
    $empleado ->parroquia_id = $parroquia;
    $empleado ->direccion = $address;
    $empleado ->discapacidad = $discapacidad;
    $empleado ->rela_contacto = $rela_contacto;
    $empleado ->nombre_contacto = $nombre_contacto;
    $empleado ->telf_contacto = $telf_contacto;
    $empleado ->user_id = $user_id_log;
    $empleado ->user_id_update = $user_id_log;
    $empleado ->tipocontrato_id =$tipo_contrato;
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
    'apellido' => Input::get('apellidofamiliar'.$i),
    'ced' => Input::get('ced_familiar'.$i),
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
        'apellido' => $value['apellido'],
        'ced' => $value['ced'],
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

// ===================
// =====REGISTROS=====


public function data_empleados(){
  // $user = User::join('types_users','users.typeuser_id','=','types_users.id')
  //   ->select('types_users.name as type','users.*')
  //   ->get();
  // $condi = array();
  $tipo_user = Auth::user()->typeuser_id;
  $user_sesion_area = Auth::user()->area_update_id;
  // var_dump($tipo_user);

  // echo "<br>";

  if($tipo_user==1){
    $user = Empleado::join('preficeds','empleados.preficed_id','=','preficeds.id')
        ->join('rifs','empleados.prefirif_id','=','rifs.id')
        ->join('cargos','empleados.cargo_id','=','cargos.id')
        ->join('estados','empleados.estado_id','=','estados.id')
        ->join('municipios','empleados.municipio_id','=','municipios.id')
        ->join('parroquias','empleados.parroquia_id','=','parroquias.id')
        ->join('users','empleados.user_id','=','users.id')
        ->select('estados.nombre as estado','users.area_update_id as update',
          'municipios.nombre as municipio','parroquias.nombre as parroquia',
          'cargos.nombre as cargo','rifs.sigla as sigla_rif','empleados.*',
          DB::raw('CONCAT(preficeds.sigla, "-", ci) as full_ced'))
        ->orderBy('id', 'DESC')->get();
  }else{

    $user = Empleado::join('preficeds','empleados.preficed_id','=','preficeds.id')
        ->join('rifs','empleados.prefirif_id','=','rifs.id')
        ->join('cargos','empleados.cargo_id','=','cargos.id')
        ->join('estados','empleados.estado_id','=','estados.id')
        ->join('municipios','empleados.municipio_id','=','municipios.id')
        ->join('parroquias','empleados.parroquia_id','=','parroquias.id')
        ->join('users','empleados.user_id','=','users.id')
        ->select('estados.nombre as estado','users.area_update_id as update',
          'municipios.nombre as municipio','parroquias.nombre as parroquia',
          'cargos.nombre as cargo','rifs.sigla as sigla_rif','empleados.*',
          DB::raw('CONCAT(preficeds.sigla, "-", ci) as full_ced'))
        ->where('area_update_id','=',$user_sesion_area)
        // ->orWhere('typeuser_id','=',1)
        ->orderBy('id', 'DESC')->get();
  }



    return json_encode($user);
}

// editando el registro

public function edit($ced){
$data = new stdclass;
$data->tipo_contrato = Tipocontrato::all();
$data->cargo = Cargo::all();
$data->preficed = Preficed::all();
$data->rif= Rif::all();
$data->educacion = Educationlevel::orderBy('id', 'asc')->get();
$data->marital = Maritalstatu::orderBy('nombre', 'asc')->get();
$data->title = "Edición del usuario";

$tipo = substr($ced,0,1);
$ced = substr($ced, 2,strlen($ced));
$prefi = Preficed::where('sigla','=',$tipo)->first();

$data_user = Empleado::join('preficeds','empleados.preficed_id','=','preficeds.id')
        ->join('rifs','empleados.prefirif_id','=','rifs.id')
        ->join('cargos','empleados.cargo_id','=','cargos.id')
        ->select('cargos.nombre as cargo','rifs.sigla as sigla_rif','empleados.*')
        ->where('preficed_id','=',$prefi->id)
        ->where('ci','=',$ced)->first();

$data_familiar = Familiar::where('empleado_id','=',$data_user->id)->get() ;


if($data_familiar->isEmpty()){
  $data->cargaf = 0;
}else{
  $data->cargaf = 1;
  $data->data_familiar = $data_familiar;
}

$data->data_user = $data_user;


return View::make('empleados.edit')->with('data',$data);

}

// Función para guardar los registros editados
public function save(){
$respuesta = array();
// Capturando cantidad de familires
  $empleado = new Empleado;
  $familiar = new Familiar;
  // Datos del empleado
  $centro = Input::get('centro');
  $antiguedad = Input::get('ingreso');
  $nombre = Input::get('name');
  $secondname = Input::get('secondname');
  $lastname = Input::get('lastname');
  $lastname2 = Input::get('lastname2');
  $tipo_ced = Input::get('tipo_ced');
  $ced_empleado = Input::get('ced');
  $tipo_rif = Input::get('tipo_rif');
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
  $rela_contacto = Input::get('rela_contacto');
  $id_update = Input::get('id_update_empleado');
  $tipo_contrato = Input::get('tipo_contrato');

  $user_id_log = Auth::id();


// Fin captura de datos
//Verificando si el tipo de contrato está vacío 
  if($tipo_contrato=="")
    $tipo_contrato = 4;
//Verificando si el tipo de contrato está vacío 
// Actualizando datos del empleado

$up_empleado_base = DB::table('empleados')->where('id',$id_update)
->update(array(
  "centro"=>$centro,
  "nombre" =>$nombre,
  "segundo_nombre" =>$secondname,
  "apellido" =>$lastname,
  "segundo_apellido" =>$lastname2,
  "preficed_id" =>$tipo_ced,
  "ci" =>$ced_empleado,
  "prefirif_id" => $tipo_rif,
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
  "antiguedad" => $antiguedad,
  "estado_id" =>$estado,
  "municipio_id" =>$municipio,
  "parroquia_id" =>$parroquia,
  "direccion" =>$address,
  "discapacidad" =>$discapacidad,
  "nombre_contacto" =>$nombre_contacto,
  "rela_contacto" =>$rela_contacto,
  "telf_contacto" =>$telf_contacto,
  "user_id_update" =>$user_id_log,
  "tipocontrato_id"=> $tipo_contrato
  ));

// Actualizando datos del empleado

// Actualizado correctamente
$respuesta['Update_empleado'] = $up_empleado_base;
$respuesta['Mensaje'] = "<strong>Excelente!</strong> Los cambios fueron realizados exitosamente !!!";



$familia_update = Input::get('cant_family');
$n_familiar = Input::get('n_familiar');

$familyInsert = $n_familiar - $familia_update;


// Actualización dinámica del familiar
for ($i=1; $i <= $familia_update; $i++) {
  # code...

$update_fa1 =   Familiar::where('id',Input::get('edit_id_familiar'.$i))
    ->update(array(
      "nombre" =>Input::get('fullnameEdit'.$i),
      "apellido" =>Input::get('apellidofamiliarEdit'.$i),
      "ced" =>Input::get('ced_familiarEdit'.$i),
      "parentesco" =>Input::get('parentescoEdit'.$i),
      "nacimiento" =>Input::get('nacimientopEdit'.$i),
      "sexo_id" =>Input::get('sexop'.$i)
      ));

} // fin for
if(!empty($update_fa1) ){
  $respuesta['update_fa_dinamic'] = $update_fa1;
}

// Actualización dinámica del familiar


// Inserción dinámica de los familiares

for ($i=1; $i <= $familyInsert ; $i++) {
  # code...
  $familiar ->nombre= Input::get('fullname'.$i);
  $familiar ->apellido= Input::get('apellidofamiliar'.$i);
  $familiar ->ced= Input::get('ced_familiar'.$i);
  $familiar ->parentesco= Input::get('parentesco'.$i);
  $familiar ->nacimiento= Input::get('nacimientop'.$i);
  $familiar ->sexo_id= Input::get('sexop'.$i);
  $familiar ->empleado_id= $id_update;
  $familiar->save();
}
// Inserción dinámica de los familiares



// Eliminando Registros
$dele = Input::get('dele');
$ids = explode(',',$dele);
$respu = Familiar::destroy($ids);

//  Eliminando Registros
$respuesta['borrado_family_dinamic'] = $respu;

return $respuesta;

} // fin function save

// funcion borrar empleado
public function deleteempleado(){
  $dele = Input::get('ids');
  $respu = Empleado::destroy($dele);
  $respuesta= array();
  $respuesta['borrado'] = $respu;

  if($respu){
    $respuesta['mensaje'] = '<strong>Felicitaciones !!!</strong> El borrado de los registros fué realizado exitosamente.';
    $respuesta['alert'] ='success' ;
  }else{
    $respuesta['mensaje'] = '<strong>Error !!!</strong> No se pudo ejecutar el borrado. comuniquese con el departamento de IT';
     $respuesta['alert'] ='danger' ;
  }
  return $respuesta;
}
// Fin funcion borrar empleado


// ==============PDF===============
public function pdf(){
  $id_empleado = Input::get('id_empleado');
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
        ->where('empleados.id','=',$id_empleado)
        // ->orWhere('typeuser_id','=',1)
        ->get();




     $data['familiar'] = Familiar::join('sexos','familiars.sexo_id','=','sexos.id')
      ->select('sexos.name as sexof','familiars.*')
      ->where('familiars.empleado_id','=',$id_empleado)->get();


// Generando barcode
   DNS1D::getBarcodePNGPath("/barcode/".$data['empleado'][0]->full_ced, "C93",2,55);

// Generando barcode

$pdf = PDF::loadView('pdf.index',$data)->setPaper('a4');
return $pdf->stream();



}
// ==============PDF===============

  } // Fin function
