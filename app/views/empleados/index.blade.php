@extends('empleados.base')


@section('content')
    <link rel="stylesheet" href="/assets/empleados/css/bootstrap-datetimepicker.css">
    <link rel="stylesheet" href="/assets/empleados/css/validate.css">

    <section id="get-trial" class="section text-center">
        <div class="container">
            <h2 style="color:#fff;" class="section-title">Importante !!!</h2>
            <br>
            <h4 class="wow fadeInLeft" data-wow-duration="1s">

                Necesitamos actualizar la información de nuestros empleados, Por favor actualice sus datos
            </h4>




        </div>
    </section>
    <!-- END GET TRIAL -->

    <!-- CONTACT US -->
    <section id="contact" class="section text-center">
        <div class="container">
            <h2 class="section-title">Actualizaci&oacute;n de datos</h2>
            <div class="row">

        <a href="registros" class="btn btn-success" id="registros" name="registros">Ver registros</a>
<!-- <input class="btn btn-primary" type="button" id="print" value="Imprimir"> -->
                <!-- CONTACT FORM -->
<div class="col-md-10 col-md-offset-1 text-left wow fadeInLeft" data-wow-duration="1s">
<!-- Form dos -->
{{ Form::open(array(
            'url'  => '/procesar',
            'method' => 'post',
            'class' => 'form-horizontal',
            'name'=>'form-update-data',
            'id'=>'form-update-data')) }}

                <div class="form-group">
                    <!-- &nbsp;&nbsp;&nbsp; -->
                    <label for="centro" class="control-label">Centro de trabajo</label>
                    <div class="col-sm-12" id="centro_radio">
                       
                       <input type="hidden" id="area_acces" value="{{Auth::user()->area_update_id}}">
                       <input type="hidden" id="tipo_user" value="{{Auth::user()->typeuser_id}}">

                        <div id="radios_centro" class="btn-group col-sm-12" data-toggle="buttons">
                          <label class="btn btn-info btn-sm ">
                            <input type="radio" name="centro" id="centroOpcion1"  value="OFICINA ANACO" autocomplete="off" title="Seleccione un centro de trabajo" required> OFICINA ANACO
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion2"  value="CIMD LOMA LINDA" autocomplete="off"title="Seleccione un centro de trabajo" required> CIMD LOMA LINDA
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion3"  value="CIMD SANTA ROSA" autocomplete="off"title="Seleccione un centro de trabajo" required>
                          CIMD SANTA ROSA
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion5"  value="OP SANTA ROSA" autocomplete="off"title="Seleccione un centro de trabajo" required>
                          OP SANTA ROSA
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion6"  value="TALADROS-NORTE" autocomplete="off"title="Seleccione un centro de trabajo" required>
                          TALADROS-NORTE
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion7"  value="TALADROS-ANACO" autocomplete="off"title="Seleccione un centro de trabajo" required>
                          TALADROS-ANACO
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion4"  value="4" autocomplete="off"title="Seleccione un centro de trabajo" required>
                          Otro
                          </label>
                        </div>


                    </div>



                    <div id="nombre_otro_centro" class="col-sm-6 hide">
                          <label for="input_nombre" class="control-label">Nombre del centro</label>
                          {{Form::text('input_nombre',Input::old('input_nombre'),
                          array('autofocus','class' => 'form-control','id' => 'input_otro_centro',
                          'placeholder' => 'Ingrese el nombre del otro centro',
                          'required'=>'required',
                          'title'=>'Necesitamos el nombre del otro centro')
                          )}}
                      </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="ingreso" class=" control-label">Fecha de ingreso en nuestra empresa</label>
                        <div class='input-group date ' id='ingreso'>
                                    {{Form::text('ingreso',Input::old('ingreso'),
                                    array('autofocus','class' => 'form-control','id' => 'ingreso',
                                    'placeholder' => 'Fecha de ingreso',
                                    'required'=>'required',
                                    'title'=>'Necesitamos saber su antigüedad en la empresa')
                                    )}}
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                        </div>

                        
                    </div>
                    <div class="col-sm-8">
                        <br><br>
                        <div id="antigueadad" class="hide"></div>
                    </div>
                </div>
                 <!-- Tipo de contrato -->
                <div class="form-group">
                    <div class="col-sm-4" style="padding-right: 0px;">
                        <label for="tipo_contrato" class="control-label">Condición de empleo</label>
                        <select style="padding-left:2px;" name="tipo_contrato" id="tipo_contrato" required class="form-control" title="tipo de contrato requerido">
                            <option value="">Tipo de contrato...</option>
                            @foreach($data->tipo_contrato as $tipo_contrato)
                             <option value="{{$tipo_contrato->id}}">-{{strtoupper($tipo_contrato->nombre)}}</option>
                            @endforeach
                        </select>
                        
                    </div>
                </div>
                <!-- /Tipo de contrato -->
                <div class="form-group">

                    <div class="col-sm-6">
                        <label for="name" class="control-label">Nombre</label>
                        {{Form::text('name',Input::old('name'),
                        array('autofocus','class' => 'form-control','id' => 'name',
                        'placeholder' => 'Ingrese su nombre',
                        'required'=>'required',
                        'title'=>'Necesitamos su nombre')
                        )}}
                    </div>

                    <div class="col-sm-6">
                         <label for="secondname" class="control-label">Segundo nombre</label>
                        {{Form::text('secondname',Input::old('secondname'),
                        array('autofocus','class' => 'form-control','id' => 'secondname',
                        'placeholder' => 'Ingrese su segundo nombre',
                        'title'=>'Necesitamos su segundo nombre')
                        )}}
                    </div>
                </div>

                <div class="form-group">

                    <div class="col-sm-6">
                        <label for="lastname" class="control-label">Apellido</label>
                        {{Form::text('lastname',Input::old('lastname'),
                        array('autofocus','class' => 'form-control','id' => 'lastname',
                        'placeholder' => 'Ingrese su apellido',
                        'required'=>'required',
                        'title'=>'Necesitamos su apellido')
                        )}}
                    </div>
                    <div class="col-sm-6">
                        <label for="lastname" class="control-label">Segundo apellido</label>
                        {{Form::text('lastname2',Input::old('lastname2'),
                        array('autofocus','class' => 'form-control','id' => 'lastname2',
                        'placeholder' => 'Ingrese su segundo apellido',
                        'title'=>'Necesitamos su segundo apellido')
                        )}}
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-1" style="padding-right: 0px;">
                        <label for="tipo_ced" class="control-label">Cédula</label>
                        <select style="padding-left:2px;" name="tipo_ced" id="tipo_ced" class="form-control" required title="tipo de ced requerido">
                            <option value="">-</option>
                            @foreach($data->preficed as $prefi)
                             <option value="{{$prefi->id}}">{{strtoupper($prefi->sigla)}}-</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-sm-3" style="padding-left: 0px;">
                        <label for="ced" class="control-label" style="color:#fff;">.</label>
                        {{Form::text('ced',Input::old('ced'),
                        array('autofocus',
                        'class' => 'form-control',
                        'id' => 'ced',
                        'placeholder' => 'Ingrese su cédula')
                        )}}
                    </div>

                    <div class="col-sm-1" style="padding-right: 0px;">
                        <label for="tipo_rif" class="control-label">RIF</label>
                        <select style="padding-left:2px;" name="tipo_rif" id="tipo_rif" class="form-control" title="tipo de rif requerido">
                            
                            @foreach($data->rif as $rif)
                             <option value="{{$rif->id}}">{{strtoupper($rif->sigla)}}-</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-sm-3" style="padding-left: 0px;">
                        <label for="rif" class="control-label" style="color:#fff;">.</label>
                        {{Form::text('rif',Input::old('rif'),
                        array('autofocus','class' => 'form-control','id' => 'rif',
                        'placeholder' => 'Ingrese su rif',
                        'disabled'=>'disabled',
                        'required' =>'required')
                        )}}
                    </div>

                    <div class="col-sm-4">
                        <label for="edo_civil" class="control-label">Estado civil</label>
                        <select class="form-control" id="edo_civil" name="edo_civil" required>
                            <option value="">-</option>
                            @foreach($data->marital as $situacion)
                             <option value="{{$situacion->id}}">{{$situacion->nombre}}</option>
                            @endforeach

                        </select>
                    </div>
                </div>

                <div class="form-group">

                    <div class="col-sm-3">
                        <label for="nacimiento" class=" control-label">Fecha de nacimiento</label>
                        <div class='input-group date' id='nacimientocontrol' class="nacimientocontrol">
                                    {{Form::text('nacimiento',Input::old('nacimiento'),
                                    array('autofocus','class' => 'form-control','id' => 'nacimiento',
                                    'placeholder' => 'Fecha de nacimiento',
                                    'required'=>'required',
                                    'title'=>'Necesitamos saber cuando nació')
                                    )}}
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>

                        </div>

                        <div style="margin-top:5px;">
                            <span id="erroredadempleado" class="label label-danger hide"></span>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <label for="" class="control-label">Edad</label>
                        <!-- <input type="text" class="form-control"> -->
                        <br><br>
                        <span id="edadempleado" class="label label-success hide">25 años</span>
                    </div>
                    <div class="col-sm-2">
                        <label for="sexo" class="control-label">Sexo</label>
                        <select class="form-control" id="sexo" name="sexo" required>
                            <option value="">-</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>

                        </select>
                    </div>

                    <div class="col-sm-3">
                        <label for="blood" class="control-label">Tipo de sangre</label>
                        <select class="form-control" id="blood" name="blood" >
                            <option value="">-</option>
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                        </select>
                    </div>

                    <div class="col-sm-3">
                        <label for="lateralidad" class="control-label">Lateralidad</label>
                        <select class="form-control" id="lateralidad" name="lateralidad" required>
                            <option value="">-</option>
                            <option value="diestro">Diestro</option>
                            <option value="siniestro">Siniestro</option>
                            <option value="ambidiestro">Ambidiestro</option>

                     </select>
                    </div>
                </div>


                <div class="form-group">

                    <div class="col-sm-3">
                        <label for="telf" class="control-label">N° Teléfono Fijo</label>
                        {{Form::text('telf',Input::old('telf'),
                        array('autofocus','class' => 'form-control','id' => 'telf',
                        'placeholder' => 'Ingrese su teléfono')
                        )}}
                    </div>

                    <div class="col-sm-3">
                        <label for="telf_movil" class="control-label">N° Teléfono Movil</label>
                        {{Form::text('telf_movil',Input::old('telf_movil'),
                        array('autofocus','class' => 'form-control','id' => 'telf_movil',
                        'placeholder' => 'Ingrese su teléfono',
                        'title'=>'Necesitamos su número de telefono')
                        )}}
                    </div>
                    <div class="col-sm-3">
                        <label for="educacion" class="control-label">Nivel de educación</label>
                        <select name="educacion" id="educacion" class="form-control" required>
                            <option value="">Seleccione el nivel</option>
                            @foreach($data->educacion as $educacion)
                             <option value="{{$educacion->id}}">{{$educacion->nombre}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label for="cargo" class="control-label">Cargo en la empresa</label>
                        <select name="cargo" id="cargo" class="form-control" required>
                            <option value="">Seleccione el cargo</option>
                            @foreach($data->cargo as $cargo)
                             <option value="{{$cargo->id}}">{{$cargo->nombre}}</option>
                            @endforeach
                        </select>
                    </div>

                </div>
                <div class="form-group">

                    <div class="col-sm-4">
                        <label for="estado" class="control-label">Estado</label>
                        <select class="form-control" id="estado" name="estado" title="Seleccione el estado donde vive" required></select>
                    </div>

                    <div class="col-sm-4">
                        <label for="municipio" class="control-label">Municipio</label>
                        <select class="form-control" id="municipio" name="municipio" title="Seleccione el municipio donde vive"  required>
                            <option value="">-Seleccione un municipio</option>

                     </select>
                    </div>

                    <div class="col-sm-4">
                        <label for="parroquia" class="control-label">Parroquia</label>
                        <select class="form-control" id="parroquia" name="parroquia" title="Seleccione la parroquia donde vive"  required>
                            <option value="">-Seleccione parroquia</option>

                     </select>
                    </div>
                </div>


                <div class="form-group">
                    <label for="address" class="col-sm-1 control-label">Dirección</label>
                    <div class="col-sm-11">
                        {{Form::text('address',Input::old('address'),
                        array('autofocus','class' => 'form-control','id' => 'address',
                        'placeholder' => 'Ingrese su dirección completa',
                        'required'=>'required',
                        'title'=>'Necesitamos saber donde vive')
                        )}}
                    </div>
                </div>
                <div class="for-group">
                    <label for="" class="control-label">¿Posee alguna discapacidad?</label>
                    <div id="question_check" class="btn-group" data-toggle="buttons">
                      <label id="checkdiscap" class="btn btn-warning btn-xs ">
                        <input  name="discap" type="radio" value="1" autocomplete="off"> si
                      </label>
                      <label  class="btn btn-danger btn-xs active">
                        <input  name="discap" type="radio" value="2" autocomplete="off"> no
                      </label>
                    </div>
                </div>
                <div class="for-group">
                    <div id="div_discapacidad" class=" col-sm-12 hide">
                        <label for="discapacidad" class="control-label">Ingrese la discapacidad </label>
                        {{Form::textarea('discapacidad',Input::old('discapacidad'),
                        array('autofocus','class' => 'form-control','id' => 'discapacidad',
                        'placeholder' => 'De poseer alguna discapacidad ingresela aquí',
                        'required' =>'required')
                        )}}
                        <br>
                    </div>
                </div>
                <br>
                <div class="for-group">
                    <label for="" class="control-label">¿Posee alguna carga familiar?</label>
                    <div id="question_check_carga" class="btn-group" data-toggle="buttons">
                      <label id="checkcarga" class="btn btn-warning btn-xs ">
                        <input  type="radio" name="family" value="1" autocomplete="off"> si
                      </label>
                      <label class="btn btn-danger btn-xs active">
                        <input  type="radio" name="family" value="2" autocomplete="off"> no
                      </label>
                    </div>
                </div>

                <div id="carga_familiar" class="hide">

                    <h3>Carga familiar</h3>

                <div class="form-group">

                     <div class="col-sm-12">
                         <center><span class="label label-primary">Familiar # 1</span></center>
                     </div>

                    <div class="col-sm-4">
                        <label for="fullname1" class="control-label">Nombres </label>
                        {{Form::text('fullname1',Input::old('fullname1'),
                        array('autofocus','class' => 'form-control','id' => 'fullname1',
                        'placeholder' => 'Nombres del familiar 1',
                        'title'=>'Ingrese el nombre del familiar')
                        )}}
                    </div>
                    <div class="col-sm-4">
                        <label for="apellidofamiliar1" class="control-label">Apellidos</label>
                        {{Form::text('apellidofamiliar1',Input::old('apellidofamiliar1'),
                        array('autofocus','class' => 'form-control','id' => 'apellidofamiliar1',
                        'placeholder' => 'Apellido del familiar 1',
                        'title'=>'Ingrese el apellido del familiar')
                        )}}

                    </div>
                    <div class="col-sm-3">
                        <label for="ced_familiar1" class="control-label">cédula</label>
                        {{Form::text('ced_familiar1',Input::old('ced_familiar1'),
                        array('autofocus','class' => 'form-control','id' => 'ced_familiar1',
                        'placeholder' => 'Cédula del familiar 1',
                        'title'=>'Ingrese el nombre completo del familiar')
                        )}}
                        <!-- <input type="text" class="form-control" name="ced_familiar1" id="ced_familiar1" placeholder="ingrese la cédula" required> -->
                    </div>
                    <div class="col-sm-3">
                       <label for="parentesco1" class="control-label">Parentesco</label>       
                        <select name="parentesco1" id="parentesco1" class="form-control" required title="¿Cuál es su parentesco?">
                            <option value="">-</option>
                            <option value="Hijo">Hijo</option>
                            <option value="Hija">Hija</option>
                            <option value="Esposo/a">Esposo/a</option>
                            <option value="Concubino/a">Concubino/a</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label for="sexop1" class="control-label">Sexo</label>
                        <select class="form-control" id="sexop1" name="sexop1" >
                            <option value="">-</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>

                        </select>
                    </div>
                    <div class="col-sm-3">
                      <label for="nacimientop1" class=" control-label">Fecha de nacimiento</label>
                        <div class='input-group date' id='nacimientocontrolp1' >
                            <input type="text" class='form-control' id='nacimientop1' name='nacimientop1' placeholder='Fecha de nacimiento' title='Necesitamos saber cuando nació su familiar' >
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <label class="control-label">Edad</label>
                        <br><br>
                        <span id="edadempleadofamilia1" class="label label-success hide"></span>
                    </div>
                </div>


                <div id="parentescoAdd"></div>
                <input type="hidden" id="n_familiar" name="n_familiar" value="1">


                <a href="javascript:;" id="add_parentesco" class="btn btn-primary btn-sm"><i class="fa fa-plus-circle fa-lg"></i></a>

                
                </div>
                <div id="mensaje_max_family" class="form-group hide"></div>
                <!-- /div carga_familiar -->

                <h3>PERSONA De CONTACTO EN CASO DE EMERGENCIA</h3>
                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="nombre_contacto" class="control-label">Nombre </label>
                        {{Form::text('nombre_contacto',Input::old('nombre_contacto'),
                        array('autofocus','class' => 'form-control','id' => 'nombre_contacto',
                        'placeholder' => 'Nombre completo del conctacto',
                        'title'=>'Es importante para nosotros tener el nombre del contacto en caso de emergencia.',
                        'required'=>'required')
                        )}}
                    </div>
                    <div class="col-sm-4">
                        <label for="rela_contacto" class="control-label">Relación</label>
                        {{Form::text('rela_contacto',Input::old('rela_contacto'),
                        array('autofocus','class' => 'form-control','id' => 'rela_contacto',
                        'placeholder' => '¿Cuál es su relación? Ejm (Vecino)',
                        'title'=>'Es sumamente importante que ingrese su relación con el contacto',
                        'required'=> 'required')
                        )}}
                    </div>
                    <div class="col-sm-4">
                        <label for="telf_contacto" class="control-label">Teléfono</label>
                        {{Form::text('telf_contacto',Input::old('telf_contacto'),
                        array('autofocus','class' => 'form-control','id' => 'telf_contacto',
                        'placeholder' => 'Número telefónico del contacto',
                        'title'=>'Es sumamente importante que ingrese el número telefónico del contacto',
                        'required'=> 'required')
                        )}}
                    </div>

                </div>

              <div class="form-group">
                <div class="col-sm-12 ">
                  <center>
                        <div id="mensajeajax"></div>

                        <!-- <div class="btn-group" role="group" aria-label="..."> -->
                            <button type="reset" id="btn_reset" class="btn btn-primary"><i class="fa fa-plus"></i> Nuevo registro</button>
                            <button  type="submit" id="btn_update" class="btn btn-success"><i class="fa fa-floppy-o"></i> Agregar registro</button>
                            <!-- <a id="btn_print_f" class="btn btn-success disabled"><i class="fa fa-print"></i> Imprimir</a> -->
                            <a id="btn_print_pdf" target="_blank" class="btn btn-success disabled"><i class="fa fa-file-pdf-o"></i> PDF</a>
                        <!-- </div> -->
                  </center>
                    <br>
                    <div id="mesajeresponse"></div>


                </div>
              </div>
            {{ Form::close() }}
            <div id="pdf"></div>
            
            <!-- /form user -->
<!-- /form dos -->
<!-- div print -->
<div id="print_f"></div>
<!-- /div print -->


</div>
                <!-- END CONTACT FORM -->



            </div>
        </div>
    </section>
    <!-- END CONTACT US -->


    <!-- js files -->
    <script src="/assets/empleados/js/vendor/jquery-1.11.1.js"></script>
<script src="/assets/empleados/js/plugins.js"></script>
<script src="/assets/empleados/js/bootstrap.min.js"></script>
<script src="/assets/empleados/js/wow.min.js"></script>
<script src="/assets/empleados/js/prettyPhoto.js"></script>
<script src="/assets/empleados/js/owl.carousel.min.js"></script>
    <script src="/assets/empleados/js/main.js"></script>
    <script src="/assets/empleados/js/moment-locales.js"></script>
    <script src="/assets/empleados/js/bootstrap-datetimepicker.js"></script>
    <script src="/assets/empleados/js/jquery.validate.js"></script>
    <script src="/assets/empleados/js/localization/messages_es.js"></script>
    <script src="/assets/empleados/js/select.js"></script>




    <script type="text/javascript">
// include jQuery first.
jQuery.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=a[i].split(".");
        o=window;
        for (j=0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
};


// console.log(namespace);
    // var error_edad=false;
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1; //hoy es 0!
    var yyyy = hoy.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    var dateToday= yyyy +"-"+ mm +"-"+dd;
    // dateToday.setFullYear(new Date().getFullYear()-18);

            $(function () {
                $('#nacimientocontrol').datetimepicker({
                    locale: 'es',
                    format: 'DD-MM-YYYY',
                    // maxDate: dateToday
                    maxDate:hoy
                }).on("dp.change", function(e) {

                    fecha = $('#nacimientocontrol').data('date');
                    $('#edadempleado').addClass('hide');
                    $('#erroredadempleado').addClass('hide');
                    if(fecha!=''){

                     año = fecha.substring(6, 10);
                     mes = fecha.substring(3, 5);
                     dia = fecha.substring(0, 2);
                     años = calcular_edad(dia+'/'+mes+'/'+año);


                    if(años>=15){
                      // console.log(año);
                      error_edad=false;
                      $('#edadempleado').removeClass('hide');
                      $('#erroredadempleado').addClass('hide');
                      $('#edadempleado').text(años+' años');

                  } else if(años==1){
                    error_edad=true;
                    $('#erroredadempleado').removeClass('hide');
                    $('#erroredadempleado').text(años+' año no es una edad para trabajar');
                  }else if(años>1){
                    error_edad=true;
                    $('#erroredadempleado').removeClass('hide');
                    $('#erroredadempleado').text(años+' años no es una edad para trabajar');
                    console.log(años+" años no es una edad para trabajar");
                  }else if(años<1){
                    error_edad=true;
                    $('#erroredadempleado').removeClass('hide');
                    $('#erroredadempleado').text('un bebé no puede trabajar');
                    // console.log(años+" un bebé no puede trabajar");
                  }
              }//end if

                });

                 $('#nacimientocontrolp1').datetimepicker({
                    locale: 'es',
                    format: 'DD-MM-YYYY',
                    maxDate: dateToday
                }).on("dp.change", function(e) {

                    fecha = $('#nacimientocontrolp1').data('date');
                    $('#edadempleadofamilia1').addClass('hide');
                    if(fecha!=''){

                     año = fecha.substring(6, 10);
                     mes = fecha.substring(3, 5);
                     dia = fecha.substring(0, 2);
                     años = calcular_edad(dia+'/'+mes+'/'+año);


                    if(años>1){
                      // console.log(año);
                      $('#edadempleadofamilia1').removeClass('hide');
                      $('#edadempleadofamilia1').text(años+' años');

                  }else if(años<1){
                   $('#edadempleadofamilia1').removeClass('hide');
                   $('#edadempleadofamilia1').text('Bebé sin el año cumplido');
                    // console.log(años+" un bebé no puede trabajar");
                  }else if(años==1){
                   $('#edadempleadofamilia1').removeClass('hide');
                   $('#edadempleadofamilia1').text(años+' año');
                    // console.log(años+" un bebé no puede trabajar");
                  }

              }//end primer if

                });
                 // Calcular tiempo en la empresa
            $('#ingreso').datetimepicker({
                    locale: 'es',
                    format: 'DD-MM-YYYY',
                    maxDate: dateToday
                }).on("dp.change", function(e){
                    fecha = $('#ingreso').data('date');
                    if(fecha!=''){
                        $('#antigueadad').empty();
                        año = fecha.substring(6, 10);
                        mes = fecha.substring(3, 5);
                        dia = fecha.substring(0, 2);
                        tiempo= calcular_tiempo(dia,mes,año);


                            // console.log(mensajerespuestaOk);

                        if(tiempo[0]==0){

                        mensaje = 'El empleado tiene '+tiempo[1]+' trabajando con nosotros.';
                        }else{
                        mensaje = 'El empleado está en su '+tiempo[1]+' con nosotros.';
                        }
                        $('#antigueadad').removeClass('hide');

                        msj_antigueadad ="<h5><span class='label label-primary'>";
                        msj_antigueadad = msj_antigueadad + mensaje + "</span></h5>";
                        $('#antigueadad').append(msj_antigueadad);


                    } //end if fecha
                });
            // Calcular tiempo en la empresa

            });




    </script>

<!-- ===============Links para imrpimir============== -->
<link rel="stylesheet" href="/assets/empleados/css/customp.css">
<script src="/assets/empleados/js/jquery.print.js"></script>
<script src="/assets/empleados/js/imp.js"></script>
<!-- ===============Fin links para imrpimir========== -->

<!-- =================== -->
<!-- ==== Imprimir ===== -->
<!-- =================== -->
<div id="imprime">

 <table >
    <tbody>
      <tr class="head">
        <td style="width:190px;" rowspan="2"><img src="/assets/empleados/img/evergreen_logo_pdf.png" width="150"></td>
        <td style="width:500px;text-align:center;" rowspan="2"><h3>Sistema de Gestión Integral Formatos </h3> </td>
        <td style="width:190px;border-bottom-style:none;" width="200px">Documento No.:</td>
      </tr>
      <tr class="head">
        <td style="text-align:right;border-top-style:none;"><b>EGS-AD-RH-23-F</b></td>
      </tr>
      <tr>
        <td colspan="3" style="text-align:center; font-size:18"><b>Actualización de datos de los empleados</b></td>
      </tr>
      <tr>
          <td style="width:190px;">Reemplaza a: <b>N/A</b></td>
          <td style="width:190px;">Fecha de comprobación: <b>Agosto 2015</b></td>
          <td style="width:190px;">Rev.No.: <b>0</b></td>
      </tr>
    </tbody>
  </table>


<div id="printe" style="clear:both;" >


  <h5>datos laborales</h5>
  <table>
    <tbody>
      <tr>
        <td class="td_h" style="width:293.33px;">Centro de trabajo</td>
        <td class="td_h" style="width:293.33px;">nivel de educacion</td>
        <td class="td_h" style="width:293.33px;">cargo</td>
      </tr>
      <tr>
        <td id="print_centro"></td>
        <td id="print_nivel_edu"></td>
        <td id="print_cargo"></td>
      </tr>
    </tbody>
  </table>

  <!-- fin datos de la empresa -->
  <h5>Datos personales</h5>

  <table>
    <tbody>
      <tr>
        <td class="td_h" colspan="2">Primer nombre</td>
        <td class="td_h" colspan="2">Segundo Nombre</td>
      </tr>
      <tr>
        <td colspan="2" id="print_nombre"></td>
        <td colspan="2" id="print_segundonombre"></td>
      </tr>
      <tr>
        <td class="td_h" colspan="2">Primer apellido</td>
        <td class="td_h" colspan="2">segundo apellido</td>
      </tr>
      <tr>
        <td colspan="2" id="print_apellido"></td>
        <td colspan="2" id="print_segundoapellido"></td>
      </tr>

      <tr>
        <td class="td_h">cédula</td>
        <td class="td_h">rif</td>
        <td class="td_h">estado civil</td>
        <td class="td_h">sexo</td>
      </tr>
      <tr>
        <td id="print_ced"></td>
        <td id="print_rif"></td>
        <td id="print_estatocivil"></td>
        <td id="print_sexo"></td>
      </tr>
      <tr>
        <td class="td_h">fecha de nacimiento</td>
        <td class="td_h">edad</td>
        <td class="td_h">tipo de sangre</td>
        <td class="td_h">lateralidad</td>
      </tr>
      <tr>
        <td id="print_nacimiento"></td>
        <td id="print_edad"></td>
        <td id="print_tiposangre"></td>
        <td id="print_lateralidad"></td>
      </tr>
      <tr>
        <td class="td_h" colspan="4">discapacidad</td>
      </tr>
      <tr>
        <td id="print_discapacidad" colspan="4"></td>
      </tr>
    </tbody>

  </table>
  <!-- fin datos personales -->
<h5>DIRECCIÓN ACTUAL DE RESIDENCIA</h5>
<table>
  <tbody>
  <tr>
    <td class="td_h" style="width:293.33px">estado</td>
    <td class="td_h" style="width:293.33px">municipio</td>
    <td class="td_h" style="width:293.33px">párroquia</td>
  </tr>
  <tr>
    <td id="print_estado"></td>
    <td id="print_municipio"></td>
    <td id="print_parroquia"></td>
  </tr>
  <tr>
    <td class="td_h" colspan="3">direccion</td>
  </tr>
  <tr>
    <td id="print_direccion" colspan="3"></td>
  </tr>
</tbody>
</table>
<!-- fin datos de residencia -->
<h5>Carga Familiar</h5>
<table>
  <tbody id="tb_familiar">
    <tr>
      <td class="td_h" style="width:176px;">nombre completo</td>
      <td class="td_h" style="width:176px;">cédula</td>
      <td class="td_h" style="width:176px;">parentesco</td>
      <td class="td_h" style="width:176px;">fecha de nacimiento</td>
      <td class="td_h" style="width:88px;">edad</td>
      <td class="td_h" style="width:88px;">sexo</td>
    </tr>
    <tr>
      <td id="print_parent_nombre1"></td>
      <td id="print_parent_cedula1"></td>
      <td id="print_parent_parentesco1"></td>
      <td id="print_parent_nacimiento1"></td>
      <td id="print_parent_edad1"></td>
      <td id="print_parent_sexo1"></td>
    </tr>


  </tbody>
</table>
<!-- Fin carga familiar -->
<h5>persona de contacto en caso de emergencia</h5>
<table>
  <tbody>
     <tr>
      <td class="td_h" style="width:293px;">nombre completo</td>
      <td class="td_h" style="width:293px;">Relación</td>
      <td class="td_h" style="width:293px;">teléfono</td>
     </tr>
     <tr>
       <td id="print_contac_nombre"></td>
       <td id="print_contac_relacion"></td>
       <td id="print_contac_telf"></td>
     </tr>
  </tbody>
</table>

</div>

<br>

<div class="firma_left">
  <p id="print_empleado_firma" style="margin:0px !important;"></p>
  <span class="calificativo">empleado</span>
</div>
<!-- <div class="firma_right">
  <p style="margin:0px !important;">Guzmán desc</p>
  <span class="calificativo">supervisor</span>
</div> -->

<div class="clearfix"></div>


<div id="footer" >

  <hr>
  <center><p>Av José Antonio Anzoátegui, Km 97
Anaco, Estado Anzoátegui - Venezuela</p>
  <p>Telf.(0282) 400.7000; 424.58.59 -Fax(0282) 424.11.89
    www.evergreenservice.net e-mail:info@evergreenservice.net</p>
</center>
</div>

</div>

@stop
