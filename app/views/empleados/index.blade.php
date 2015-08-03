
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
    <script src="/assets/empleados/js/vendor/modernizr-2.6.2.min.js"></script>
</head>

<body id="top">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade ybrowser</a> to improve your experience.</p>
    <![endif]-->




    <!-- PORTFOLIO -->




    <!-- GET TRIAL -->
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
                    <label for="centro" class="col-sm-2 control-label">Centro de trabajo</label>
                    <div class="col-sm-10">

                        <label class="radio-inline">
                          <input type="radio" name="centro" id="centroOpcion1" value="1" required>
                          OFICINA ANACO
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="centro" id="centroOpcion2" value="2" required>
                          CIMD LOMA LINDA
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="centro" id="centroOpcion3" value="3" required>
                          CIMD SANTA ROSA
                        </label>
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
                        <div class='input-group date' id='nacimientocontrol'>
                                    {{Form::text('nacimiento',Input::old('nacimiento'),
                                    array('autofocus','class' => 'form-control','id' => 'nacimiento',
                                    'placeholder' => 'Fecha de nacimiento',
                                    'required'=>'required',
                                    'title'=>'Necesitamos su fecha de nacimiento')
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
                            <option value="femenino">Femenino</option>
                            <option value="masculino">Masculino</option>

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
                        <label for="ced" class="control-label">Lateralidad</label>
                        <select class="form-control" id="edo_civil" name="edo_civil" required>
                            <option value="">-</option>
                            <option value="diestro">Diestro</option>
                            <option value="siniestro">Siniestro</option>
                            <option value="ambidiestro">Ambidiestro</option>

                     </select>
                    </div>
                </div>


                <div class="form-group">

                    <div class="col-sm-4">
                        <label for="telf" class="control-label">N° Teléfono Fijo</label>
                        {{Form::text('telf',Input::old('telf'),
                        array('autofocus','class' => 'form-control','id' => 'telf',
                        'placeholder' => 'Ingrese su teléfono')
                        )}}
                    </div>

                    <div class="col-sm-4">
                        <label for="telf_movil" class="control-label">N° Teléfono Movil</label>
                        {{Form::text('telf_movil',Input::old('telf_movil'),
                        array('autofocus','class' => 'form-control','id' => 'telf_movil',
                        'placeholder' => 'Ingrese su teléfono',
                        'required'=>'required',
                        'title'=>'Necesitamos su número de telefono')
                        )}}
                    </div>
                    <div class="col-sm-4">
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
                        <select class="form-control" id="estado" name="estado" required></select>
                    </div>

                    <div class="col-sm-4">
                        <label for="municipio" class="control-label">Municipio</label>
                        <select class="form-control" id="municipio" name="municipio" required>
                            <option value="">-Seleccione un municipio</option>

                     </select>
                    </div>

                    <div class="col-sm-4">
                        <label for="parroquia" class="control-label">Parroquia</label>
                        <select class="form-control" id="parroquia" name="parroquia" required>
                            <option value="">-Seleccione parroquia</option>

                     </select>
                    </div>
                </div>


                <div class="form-group">
                    <label for="address" class="col-sm-1 control-label">Dirección</label>
                    <div class="col-sm-11">
                        {{Form::text('address',Input::old('address'),
                        array('autofocus','class' => 'form-control','id' => 'address',
                        'placeholder' => 'Ingrese su dirección completa')
                        )}}
                    </div>
                </div>

                <div class="for-group">

                    <div class=" col-sm-12">
                        <label for="discapacidad" class="control-label">Discapacidad </label>
                        {{Form::textarea('discapacidad',Input::old('discapacidad'),
                        array('autofocus','class' => 'form-control','id' => 'discapacidad',
                        'placeholder' => 'De poseer alguna discapacidad ingresela aquí')
                        )}}
                        <br>
                    </div>
                </div>
                <h3>Carga familiar</h3>
                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="fullname1" class="control-label">Nombre Completo</label>
                        {{Form::text('fullname1',Input::old('fullname1'),
                        array('autofocus','class' => 'form-control','id' => 'fullname1',
                        'placeholder' => 'Nombre completo del familiar 1')
                        )}}
                    </div>
                    <div class="col-sm-4">
                        <label for="parentesco1" class="control-label">Parentesco</label>
                        {{Form::text('parentesco1',Input::old('parentesco1'),
                        array('autofocus','class' => 'form-control','id' => 'parentesco1',
                        'placeholder' => 'Ingrese el parentesco')
                        )}}
                    </div>
                    <div class="col-sm-2">
                        <label for="edadp1" class="control-label">Edad</label>
                        {{Form::text('edadp1',Input::old('edadp1'),
                        array('autofocus','class' => 'form-control','id' => 'edadp1',
                        'placeholder' => 'Ingrese la edad')
                        )}}
                    </div>

                    <div class="col-sm-2">
                        <label for="sexop1" class="control-label">Sexo</label>
                        <select class="form-control" id="sexop1" name="sexop1" required>
                            <option value="">-</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>

                        </select>
                    </div>
                </div>

                <div id="parentescoAdd"></div>
                <input type="hidden" id="n_familiar" name="n_familiar" value="1">


                <a href="#" id="add_parentesco" class="btn btn-primary btn-xs">Otro familiar</a>


              <div class="form-group">
                <div class="col-sm-12 ">
                  <center>
                        <button type="submit" class="btn btn-success">Actualizar datos</button>
                        <a  class="btn btn-default "> <i class="fa fa-print"></i></a>
                  </center>

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
    <script src="/assets/empleados/js/select.js"></script>

    <script type="text/javascript">
            $(function () {
                $('#nacimientocontrol').datetimepicker({
                    locale: 'en',
                     format: 'DD/MM/YYYY'
                });
            });
        </script>

</body>
</html>
