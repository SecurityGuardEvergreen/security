<!DOCTYPE html>

<html class="no-js overthrow-enabled" lang="es">


<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Security Guard Panel</title>



 
    <meta charset="utf-8" content="text/html" http-equiv="content-type">
    <meta content="ie=edge,chrome=1" http-equiv="x-ua-compatible">  
    <link href="/assets/admin/img/favi.png" rel="shortcut icon">
  

</head>

<body data-section="settings" data-content="devices" class="">

    <app class="">
        <header class="nano" id="main-navigation">
            <div class="nano-content overthrow">
                <div class="display-table">
                    <div class="display-row">
                        <a class="brand" data-placement="right" data-toggle="tooltip" href="#" id="logo" title="" data-original-title="Back to home">
                            <div class="isotipo"></div>
                            <div class="logotipo"></div>
                        </a>
                    </div>
                    <div class="display-row is-flex">
                        <div class="display-cell">
                            <ul class="nav nav-primary" id="nav-main">
                                <li>
                                    <a class="{{Session::get('m_monitoring')}}" data-navigation="section" href="/admin/monitoring" id="nav-primary-devices">
                                        <i class="fa fa-bitbucket fa-rotate-180"></i>
                                        <span>monitoring</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-navigation="section" href="/admin/system" id="nav-primary-settings" class="{{Session::get('m_system')}}">
                                        <i class="icon-settings"></i>
                                        <span>system</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="feedback js-request-contact {{Session::get('m_reports')}}" href="/admin/reports">
                                        <i class="fa fa-bar-chart-o "></i>
                                        <span>reports</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="display-row">
                        <ul class="nav nav-primary" id="nav-options">
                            <li>
                                <a data-dont-push="true" href="/admin/help" target="blank">
                                    <i class="icon-help {{Session::get('m_help')}}"></i>
                                    <span>help</span>
                                </a>
                            </li>
                            <li>
                                <a class="logout" href="/logout" title="Logout">
                                    <i class="icon-logout"></i>
                                    <span>logout</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>

        <main>
            <header>
                <a class="btn btn-hover js-show-menu pull-left"><i class="icon-menu"></i></a>

                <div class="logotipo"></div>
            </header>

            <div id="onboarding-container"></div>

            @yield('content')

            <div class="overlay"></div>
            <!-- Modal menu lateral pequeño -->

        </main>
    </app>

    <!-- <script src="./PREY_ Gestión de dispositivos_files/mapbox.js"></script> -->

    <script>
        var body = document.body,
            timer;

        window.addEventListener('scroll', function() {
            clearTimeout(timer);
            if (!body.classList.contains('disable-hover')) {
                body.classList.add('disable-hover')
            }

            timer = setTimeout(function() {
                body.classList.remove('disable-hover')
            }, 500);
        }, false);
    </script>

    <!-- ===============Css===================
    =======================================-->
     <!-- <link href="/assets/admin/asset/css/bootstrap-switch.css" rel="stylesheet"> -->

    <!-- <link href="/assets/admin/asset/css/custom.css" rel="stylesheet"> -->
    <link href="/assets/admin/asset/css/bootstrap.css" rel="stylesheet">
    <link href="/assets/admin/css/normalize.css" rel="stylesheet">
    <link href="/assets/admin/css/css" rel="stylesheet" type="text/css">
    <link href="/assets/admin/asset/font-awesome/css/font-awesome.css" rel="stylesheet">    
    <link rel="stylesheet" href="/assets/admin/asset/css/bootstrap-table.css">
    <!-- ===============/Css===================
    =======================================-->

    <!-- ====================JS=========================
=================================================== -->
<script src="/assets/admin/js/jquery-1.11.3.min.js"></script>
<script src="/assets/admin/js/bootstrap.min.js"></script>

<script src="/assets/admin/js/highlight.js"></script>
<script src="/assets/admin/js/bootstrap-switch.js"></script>
<!-- <script src="/assets/admin/js/main.js"></script> -->
<script src="/assets/admin/js/bootstrap-table.js"></script>
<script src="/assets/admin/js/bootstrap-table-es-MX.js"></script>
<!-- ====================/JS=========================
=================================================== -->

  <!--  <script src="/assets/admin/js/js.js"></script> -->
   
   <script src="/assets/admin/js/custom.js"></script>
<script src="/assets/admin/js/systemmain_user.js"></script>

</body>

</html>
