
<html lang="es"  class="no-js">
<head>
    <meta charset="utf-8">
    <title>{{$data->title}} | Evergreen Services</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="/assets/empleados/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/animate.css">
    <link rel="stylesheet" href="/assets/empleados/css/prettyPhoto.css">
    <link rel="stylesheet" href="/assets/empleados/css/owl.carousel.css">
    <link rel="stylesheet" href="/assets/empleados/css/main.css">
    <link rel="stylesheet" href="/assets/empleados/css/responsive.css">
    <!-- // <script src="/assets/empleados/js/vendor/modernizr-2.6.2.min.js"></script> -->
</head>

<body>
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
                                <li><a href="/salir">Salir</a></li>
                            @endif

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


@yield('js')

</body>
</html>