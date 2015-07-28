@extends('admin.index')

@section('title')
@stop

@section('content')

<main>
		<section>			
			<aside class="primary" id="aside">
				<view class="panel">
					<header>
						<span id="nav-left-ico"  style="  margin: 0px;"  ><a href="#"><i class="fa fa-bars nano-icon fa-2x"></i></a></span>
						<h1>SYSTEM</h1>
					</header>
					
					<article class="nano">
						<div class="nano-content">
						
						<a class="row-area" href="/admin/system/users">
							<div class="area-title active">
								<span class="folder"><i id="" class="fa fa-user  fa-3x"></i></span>
								<h4>USERS</h4>
								<span class="angle-right-station"><i class="fa fa-angle-right fa-3x"></i></span>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title ">
								<span class="folder"><i id="" class="fa fa-users  fa-3x"></i></span>
								<h4>GROUPS</h4>
								<span class="angle-right-station"><i class="fa fa-angle-right fa-3x"></i></span>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title ">
								<span class="folder"><i id="" class="fa fa-home  fa-3x"></i></span>
								<h4>ZONES</h4>
								<span class="angle-right-station"><i class="fa fa-angle-right fa-3x"></i></span>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title ">
								<span class="folder"><i id="" class="fa fa-sitemap  fa-3x"></i></span>
								<h4>STATIONS</h4>
								<span class="angle-right-station"><i class="fa fa-angle-right fa-3x"></i></span>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title ">
								<span class="folder"><i id="" class="fa fa-calendar  fa-3x"></i></span>
								<h4>SCHEDULE</h4>
								<span class="angle-right-station"><i class="fa fa-angle-right fa-3x"></i></span>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title ">
								<span class="folder"><i id="" class="fa fa-globe  fa-3x"></i></span>
								<h4>AREA</h4>
								<span class="angle-right-station"><i class="fa fa-angle-right fa-3x"></i></span>
							</div>
							</a>	
							
							
						</div>
					</article>
				</view>
			
			</aside>
			<content id="contenido" class="contenido ">
				<div class="row">
				<a id="arrow-top-left" href="#"><i  class="fa fa-angle-left top-ico fa-3x  "></i></a>
					<h1 class="title-contenido"><i class="fa  fa-users fa-2x"></i> USERS</h1>
				</div>
				<!-- Breadcrumbs -->
				<ol class="breadcrumb">
				  <li>System</li>
				  <li><a href="/admin/system/">Users</a></li>
				  			 
				</ol>
				<!-- Fin Breadcrumbs -->
				<div class="row" style="margin-left: 0px;padding-bottom: 15px;background-color: white;">
					

					<div style="padding-right:30px;" class="col-md-12 ">
								<div class="table-responsive ">
						<!-- Fin tabla prueba -->
						<table data-toggle="table"
						    data-url="/admin/data_user"
						    data-search="true"
							data-show-refresh="true"
							data-show-columns="true"
							data-query-params="queryParams"
							data-pagination="true"
							data-classes="table table-hover"
						       >
						    <thead>
						    <tr>			
										<th data-field="name" data-sortable="true">NOMBRE</th>
										<th data-field="nickname" data-sortable="true">NICKNAME</th>
										<th data-field="telf" data-sortable="true">TELÉFONO PERSONAL</th>
										<th data-field="ext" data-sortable="true">Ext</th>
										<th class="col-xs-1" data-field="email" data-sortable="true">EMAIL</th>
										<th data-field="address" data-sortable="true">DIRECCIÓN</th>
										<th data-field="type" data-sortable="true">TIPO DE USUARIO</th>
									</tr>
						    </thead>
						</table>

						</div>
						</div>
						
				</div>
					
					
					
				
			</content>
		</section>
	</main>
	@stop