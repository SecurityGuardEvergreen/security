<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="/assets/admin/img/favi.png" rel="shortcut icon">
	<title>Security Guard Panel</title>
	<link href="/assets/admin/asset/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>   

<div class="row">

<div id="nav-left" class="col-xs-6 col-md-1 left nav-left .nano-content">
		 <span  >
		 <a href="#" id="nav-left-ico-close">
		 <i class="fa fa-close fa-lg"></i>
		 </a></span>
		 <div class="navbar-header">					
		  <a class="navbar-brand" href="/admin">
			<img alt="Security Guard" src="/assets/admin/img/logodos.svg" >
		  </a>
		</div>
		<ul class="nav nav-pills nav-stacked " >
			<li id="menu_monitoring" class="{{Session::get('m_monitoring')}}">
				<a class="monitoring" href="/admin/monitoring">
				<i class="fa fa-bitbucket fa-2x fa-rotate-180"></i><br>
				<span>monitoring</span>
				</a>
			</li> 
			<li id="menu_system" class="{{Session::get('m_system')}}">
				<a class="system" href="/admin/system">
				<i class="fa fa-cog fa-2x "></i>
				<br>
				<span>system</span>
				</a>
			</li>
			<li id="menu_reports" class="{{Session::get('m_reports')}}">
				<a class="reports" href="/admin/reports">
				<i class="fa fa-bar-chart-o fa-2x "></i>
				<br>
				<span>reports</span>
				</a>
			</li> 			
		</ul>
		<!-- /nav -->
		
		<footer class="bottom">			
		<ul class="nav nav-pills nav-stacked " >
			<li class="{{Session::get('m_help')}}">
				<a class="help" href="/admin/help">
				<i class="fa fa-info-circle "></i><br>
				<span style="clear:both">help</span>
				</a>
			</li>
			<li>
				<a class="logout" href="/logout">
				<i class="fa fa-sign-out fa-2x "></i><br>
				<span>logout </span>
				</a>
			</li> 
		</ul>
		</footer>
	</div>



@yield('content')

</div><!--/row  -->

	
	<!-- ===============Css===================
	=======================================-->
	 <link href="/assets/admin/asset/css/bootstrap-switch.css" rel="stylesheet">

	<link href="/assets/admin/asset/css/custom.css" rel="stylesheet">
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
<script src="/assets/admin/js/main.js"></script>
<script src="/assets/admin/js/bootstrap-table.js"></script>
<script src="/assets/admin/js/bootstrap-table-es-MX.js"></script>
<!-- ====================/JS=========================
=================================================== -->
<script src="/assets/admin/js/custom.js"></script>
<script src="/assets/admin/js/systemmain_user.js"></script>
</body>
</html>