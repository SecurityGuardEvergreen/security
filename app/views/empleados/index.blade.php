
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
                   <!--  <form action="#" method="post" class="contact-form  wow fadeInLeft">

                        <div class="form-group">
                            <input type="text" required class="form-control" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <input type="email" required class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="text" required class="form-control" placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <textarea required class="form-control" rows="5" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="pull-left send-button button">Actualizar datos</button>
                    </form> -->

                    <!-- Form dos -->
                    {{ Form::open(array(
                                'url'  => '/',
                                'method' => 'get', 
                                'class' => 'form-horizontal',
                                'name'=>'form-update-data',
                                'id'=>'form-update-data')) }}

                                    <div class="form-group">
                                        <label for="centro" class="col-sm-2 control-label">Centro de trabajo</label>
                                        <div class="col-sm-10">                                           
                                            
                                            <label class="radio-inline">
                                              <input type="radio" name="centro" id="centroOpcion1" value="1"> 
                                              OFICINA ANACO
                                            </label>
                                            <label class="radio-inline">
                                              <input type="radio" name="centro" id="centroOpcion2" value="2"> 
                                              CIMD LOMA LINDA
                                            </label>
                                            <label class="radio-inline">
                                              <input type="radio" name="centro" id="centroOpcion3" value="3"> 
                                              CIMD SANTA ROSA
                                            </label>
                                        </div>                                         
                                    </div>

                                    <div class="form-group">
                                        <label for="name" class="col-sm-1 control-label">Nombre</label>
                                        <div class="col-sm-4">
                                            {{Form::text('name',Input::old('name'),
                                            array('autofocus','class' => 'form-control','id' => 'name',
                                            'placeholder' => 'Ingrese su nombre')
                                            )}}
                                        </div> 
                                        <label for="secondname" class="col-sm-2 control-label">Segundo nombre</label>
                                        <div class="col-sm-5">
                                            {{Form::text('secondname',Input::old('secondname'),
                                            array('autofocus','class' => 'form-control','id' => 'secondname',
                                            'placeholder' => 'Ingrese su segundo nombre')
                                            )}}
                                        </div>                                                                              
                                    </div>

                                    <div class="form-group">
                                        <label for="lastname" class="col-sm-1 control-label">Apellido</label>
                                        <div class="col-sm-4">
                                            {{Form::text('lastname',Input::old('lastname'),
                                            array('autofocus','class' => 'form-control','id' => 'lastname',
                                            'placeholder' => 'Ingrese su apellido')
                                            )}}
                                        </div> 
                                        <label for="lastname" class="col-sm-2 control-label">Segundo apellido</label>
                                        <div class="col-sm-5">
                                            {{Form::text('lastname2',Input::old('lastname2'),
                                            array('autofocus','class' => 'form-control','id' => 'lastname2',
                                            'placeholder' => 'Ingrese su segundo apellido')
                                            )}}
                                        </div>                                                                              
                                    </div>

                                    <div class="form-group">
                                        <label for="ced" class="col-sm-1 control-label">Cédula</label>
                                        <div class="col-sm-3">
                                            {{Form::text('ced',Input::old('ced'),
                                            array('autofocus','class' => 'form-control','id' => 'ced',
                                            'placeholder' => 'Ingrese su cédula')
                                            )}}
                                        </div>
                                        <label for="rif" class="col-sm-1 control-label">Rif</label>
                                        <div class="col-sm-3">
                                            {{Form::text('rif',Input::old('rif'),
                                            array('autofocus','class' => 'form-control','id' => 'rif',
                                            'placeholder' => 'Ingrese su rif')
                                            )}}
                                        </div>

                                        <label for="edo_civil" class="col-sm-1 control-label">Estado civil</label>
                                        <div class="col-sm-3">
                                            <select class="form-control" id="edo_civil" name="edo_civil">
                                                <option value="">-</option>
                                                <option value="soltero">Soltero/a</option>
                                                <option value="casado">Casado/a</option>
                                                <option value="divorciado">Divorciado/a</option>
                                                <option value="viudo">Viudo/a</option>
                                                
                                            </select>
                                        </div> 
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label for="nacimiento" class="col-sm-1 control-label">Nacimiento</label>
                                        <div class="col-sm-2">                                            
                                            <div class='input-group date' id='nacimientocontrol'>
                                                        {{Form::text('nacimiento',Input::old('nacimiento'),
                                                        array('autofocus','class' => 'form-control','id' => 'nacimiento',
                                                        'placeholder' => 'Fecha de nacimiento')
                                                        )}}
                                                        <span class="input-group-addon">
                                                            <span class="glyphicon glyphicon-calendar"></span>
                                                        </span>
                                                    </div>
                                        </div>  
                                        
                                        <label for="sexo" class="col-sm-1 control-label">Sexo</label>
                                        <div class="col-sm-2">
                                            <select class="form-control" id="sexo" name="sexo">
                                                <option value="">-</option>
                                                <option value="femenino">Femenino</option>
                                                <option value="masculino">Masculino</option>
                                                
                                            </select>
                                        </div>
                                         
                                        <label for="blood" class="col-sm-1 control-label">Tipo de sangre</label>
                                        <div class="col-sm-2">
                                            <select class="form-control" id="blood" name="blood">
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
                                        
                                        <label for="ced" class="col-sm-1 control-label">Lateralidad</label>
                                        <div class="col-sm-2">
                                            <select class="form-control" id="edo_civil" name="edo_civil">
                                                <option value="">-</option>
                                                <option value="diestro">Diestro</option>
                                                <option value="siniestro">Siniestro</option>
                                                <option value="ambidiestro">Ambidiestro</option>
                                                
                                         </select> 
                                        </div>
                                    </div>
                                                                       
                                    
                                    <div class="form-group">
                                        <label for="telf" class="col-sm-1 control-label">N° Teléfono Fijo</label>
                                        <div class="col-sm-4">
                                            {{Form::text('telf',Input::old('telf'),
                                            array('autofocus','class' => 'form-control','id' => 'telf',
                                            'placeholder' => 'Ingrese su teléfono')
                                            )}}
                                        </div> 
                                        <label for="telf_movil" class=" col-sm-offset-1 col-sm-2 control-label">N° Teléfono Movil</label>
                                        <div class="col-sm-4">
                                            {{Form::text('telf_movil',Input::old('telf_movil'),
                                            array('autofocus','class' => 'form-control','id' => 'telf_movil',
                                            'placeholder' => 'Ingrese su teléfono')
                                            )}}
                                        </div>                                         
                                        
                                    </div>
                                    <div class="form-group">
                                        <label for="estado" class="col-sm-1 control-label">Estado</label>
                                        <div class="col-sm-3">
                                            <select class="form-control" id="estado" name="estado"></select> 
                                        </div> 
                                        <label for="municipio" class="col-sm-1 control-label">Municipio</label>
                                        <div class="col-sm-3">
                                            <select class="form-control" id="municipio" name="municipio">
                                                <option value="">-Seleccione un municipio</option>
                                               
                                         </select> 
                                        </div>
                                        <label for="parroquia" class="col-sm-1 control-label">Parroquia</label>
                                        <div class="col-sm-3">
                                            <select class="form-control" id="parroquia" name="parroquia">
                                                <option value="">-Seleccione parroquia</option>
                                               
                                         </select> 
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="ciudad" class="col-sm-1 control-label">Ciudad</label>
                                        <div class="col-sm-5">
                                            <select class="form-control" id="ciudad" name="ciudad">
                                                <option value="">-Seleccione una ciudad</option>
                                                
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
                                         <label for="discapacidad" class="col-sm-2 control-label">Discapacidad </label>
                                        <div class=" col-sm-10">
                                            {{Form::textarea('discapacidad',Input::old('discapacidad'),
                                            array('autofocus','class' => 'form-control','id' => 'discapacidad',
                                            'placeholder' => 'De poseer alguna discapacidad ingresela aquí')
                                            )}}
                                            <br>
                                        </div>  
                                    </div>
                                    
                                    
                                  <div class="form-group">
                                    <div class="col-sm-12 ">
                                      <center>
                                            <button type="submit" class="btn btn-success">Actualizar datos</button>
                                            <button type="submit" class="btn btn-default "> <i class="fa fa-print"></i></button>
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