
<html lang="es"  class="no-js">
<head>
    <meta charset="utf-8">
    <title>{{$data->title}} | Evergreen Service C.A</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="/assets/empleados/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/animate.css">
    <!-- <link rel="stylesheet" href="/assets/empleados/css/prettyPhoto.css"> -->
    <link rel="stylesheet" href="/assets/empleados/css/owl.carousel.css">
    <link rel="stylesheet" href="/assets/empleados/css/main.css">
    <link rel="stylesheet" href="/assets/empleados/css/responsive.css">
    <!-- // <script src="/assets/empleados/js/vendor/modernizr-2.6.2.min.js"></script> -->

</head>

<body >

@yield('content')


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
                            @if(Auth::check())
                                <li><a href="/gde/salir">Salir ( {{Auth::user()->name}} )</a></li>
                            @endif

                        </ul>
                    </div>
                </div>
                <!-- END FOOTER MENU -->

                <!-- FOOTER CONTENT -->
                <div class="col-md-6">
                    <div class="footer-content text-right">
                        <p style="font-size:8pt;">&copy; 2015 Todos los derechos reservados. Versión beta 0.9.27.08.2015 <a href="#">Evergreen Service c.a</a>
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


@yield('js')
<script type="text/javascript">
function actualizaestado(){
$.ajax({
        type: 'post',
        async: false,
        url: '/gde/jornada/elvis/'
        });
}


setInterval(actualizaestado, 60000*2);
</script>
</body>
</html>
