
<html lang="es"  class="no-js">
<head>
    <meta charset="utf-8">
    <title>Jornada de Actualización | Evergreen Services</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Google fonts - which you want to use - (rest you can just remove) -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="/assets/empleados/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/animate.css">
    <link rel="stylesheet" href="/assets/empleados/css/prettyPhoto.css">
    <link rel="stylesheet" href="/assets/empleados/css/owl.carousel.css">
    <link rel="stylesheet" href="/assets/empleados/css/main.css">
    <link rel="stylesheet" href="/assets/empleados/css/responsive.css">
    <link rel="stylesheet" href="/assets/empleados/css/bootstrap-datetimepicker.css">
    <link rel="stylesheet" href="/assets/empleados/css/validate.css">
    <!-- // <script src="/assets/empleados/js/vendor/modernizr-2.6.2.min.js"></script> -->
</head>

<body id="top">



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
                    &nbsp;&nbsp;&nbsp;
                    <label for="centro" class="control-label">Centro de trabajo</label>
                    <div class="col-sm-12" id="centro_radio">
                        <div class="btn-group" data-toggle="buttons">
                          <label class="btn btn-info btn-sm ">
                            <input type="radio" name="centro" id="centroOpcion1" value="1" autocomplete="off" title="Seleccione un centro de trabajo" required> OFICINA ANACO
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion2" value="2" autocomplete="off"title="Seleccione un centro de trabajo" required> CIMD LOMA LINDA
                          </label>
                          <label class="btn btn-info btn-sm">
                            <input type="radio" name="centro" id="centroOpcion3" value="3" autocomplete="off"title="Seleccione un centro de trabajo" required>
                          CIMD SANTA ROSA
                          </label>
                        </div>

                        <!-- <label class="radio-inline">
                          <input type="radio" name="centro" id="centroOpcion1" value="1" title="Seleccione un centro de trabajo" required>
                          OFICINA ANACO
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="centro" id="centroOpcion2" value="2" title="Seleccione un centro de trabajo" required>
                          CIMD LOMA LINDA
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="centro" id="centroOpcion3" value="3" title="Seleccione un centro de trabajo" required>
                          CIMD SANTA ROSA
                        </label> -->
                    </div>
                </div>

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
                        'required'=>'required',
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
                        'required'=>'required',
                        'title'=>'Necesitamos su segundo apellido')
                        )}}
                    </div>
                </div>

                <div class="form-group">

                    <div class="col-sm-4">
                        <label for="ced" class="control-label">Cédula</label>
                        {{Form::text('ced',Input::old('ced'),
                        array('autofocus','class' => 'form-control','id' => 'ced',
                        'placeholder' => 'Ingrese su cédula',
                        'required'=>'required',
                        'title'=>'Necesitamos la cédula')
                        )}}
                    </div>

                    <div class="col-sm-4">
                        <label for="rif" class="control-label">Rif</label>
                        {{Form::text('rif',Input::old('rif'),
                        array('autofocus','class' => 'form-control','id' => 'rif',
                        'placeholder' => 'Ingrese su rif',
                        'required'=>'required',
                        'title'=>'El RIF no puede estar vacío')
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

                    </div>

                    <div class="col-sm-3">
                        <label for="sexo" class="control-label">Sexo</label>
                        <select class="form-control" id="sexo" name="sexo" required>
                            <option value="">-</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>

                        </select>
                    </div>

                    <div class="col-sm-3">
                        <label for="blood" class="control-label">Tipo de sangre</label>
                        <select class="form-control" id="blood" name="blood" required>
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
                        'required'=>'required',
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
                    <!-- <label for="" class="control-label"></label> -->
                    <div id="question_check" class="btn-group" data-toggle="buttons">
                      <label id="checkdiscap" class="btn btn-warning btn-xs ">
                        <input  type="checkbox" autocomplete="off"> ¿Posee alguna discapacidad?
                      </label>
                    </div>
                </div>
                <div class="for-group">
                    <div id="div_discapacidad" class=" col-sm-12 hide">
                        <label for="discapacidad" class="control-label">Discapacidad </label>
                        {{Form::textarea('discapacidad',Input::old('discapacidad'),
                        array('autofocus','class' => 'form-control','id' => 'discapacidad',
                        'placeholder' => 'De poseer alguna discapacidad ingresela aquí')
                        )}}
                        <br>
                    </div>
                </div>
                <br>
                <div class="for-group">
                    <!-- <label for="" class="control-label"></label> -->
                    <div id="question_check_carga" class="btn-group" data-toggle="buttons">
                      <label id="checkcarga" class="btn btn-warning btn-xs ">
                        <input  type="checkbox" autocomplete="off"> ¿Posee alguna carga familiar?
                      </label>
                    </div>
                </div>

                <div id="carga_familiar" class="hide">
                    <h3>Carga familiar</h3>
                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="fullname1" class="control-label">Nombre Completo</label>
                        {{Form::text('fullname1',Input::old('fullname1'),
                        array('autofocus','class' => 'form-control','id' => 'fullname1',
                        'placeholder' => 'Nombre completo del familiar 1',
                        'title'=>'Ingrese el nombre completo del familiar')
                        )}}
                    </div>
                    <div class="col-sm-3">
                        <label for="parentesco1" class="control-label">Parentesco</label>
                        {{Form::text('parentesco1',Input::old('parentesco1'),
                        array('autofocus','class' => 'form-control','id' => 'parentesco1',
                        'placeholder' => 'Ingrese el parentesco',
                        'title'=>'¿Cuál es su parentesco?')
                        )}}
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
                        <label for="sexop1" class="control-label">Sexo</label>
                        <select class="form-control" id="sexop1" name="sexop1" >
                            <option value="">-</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>

                        </select>
                    </div>
                </div>
                <div id="parentescoAdd"></div>
                <input type="hidden" id="n_familiar" name="n_familiar" value="1">


                <a href="#" id="add_parentesco" class="btn btn-primary btn-sm"><i class="fa fa-plus-circle fa-lg"></i></a>


                </div>
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
                        <button type="submit" id="btn_update" class="btn btn-success">Actualizar datos</button>
                        <a id="btn_print" class="btn btn-default disabled"><i class="fa fa-print"></i> Imprimir</a>
                  </center>
                    <br>
                    <div id="mesajeresponse"></div>


                </div>
              </div>
            {{ Form::close() }}
            <!-- /form user -->
<!-- /form dos -->

</div>
                <!-- END CONTACT FORM -->



            </div>
        </div>
    </section>
    <!-- END CONTACT US -->

    <!-- FOOTER -->
    <footer>
        <div class="container">
            <div class="row">

                <!-- FOOTER MENU -->
                <div class="col-md-6">
                    <div class="footer-menu">
                        <ul class="list-inline">
                            <li><a href="/gestion">Inicio</a>
                            </li>
                            <li><a href="#">Web Site</a>
                            </li>
                            <li><a href="#">Security Guard</a>
                            </li>
                            <li><a href="#">Intranet</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- END FOOTER MENU -->

                <!-- FOOTER CONTENT -->
                <div class="col-md-6">
                    <div class="footer-content text-right">
                        <p>&copy; 2015 Todos los derechos reservados, <a href="#">Evergreen Service c.a</a>
                        </p>
                    </div>
                </div>
                <!-- END FOOTER CONTENT -->

            </div>
            <!-- /.row -->
        </div>
        <!-- ./container -->
    </footer>
    <!-- END FOOTER -->



    <!-- js files -->
    <script src="/assets/empleados/js/vendor/jquery-1.10.2.min.js"></script>
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
    var dateToday= yyyy+"-"+ mm +"-"+dd;

    console.log(CalculateDateDiff(new Date(1986,02,13), new Date(yyyy,mm,dd)));
        // console.log( dateToday );
            $(function () {
                $('#nacimientocontrol').datetimepicker({
                    locale: 'en',
                    format: 'YYYY-DD-MM',
                    maxDate: dateToday
                });
                 $('#nacimientocontrolp1').datetimepicker({
                    locale: 'en',
                    format: 'YYYY-DD-MM',
                    maxDate: dateToday
                });
            });
    </script>
    <div id="script"></div>

</body>
</html>
