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
						<h1>&aacute;reas</h1>
					</header>
					<footer >
					<p class="text-left" id="account-info">3/4 Áreas Activas</p>
					<div class="progress">
					  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
						75% Complete (active)
					  </div>
					</div>
					</footer>
					<article class="nano">
						<div class="nano-content">
							<a class="row-area " href="#">
							<div class="area-title active">									
								<div class="alert"><span style="color:#E83E00 !important;"><i class="fa fa-exclamation-triangle fa-2x"></i></span></div>
								<i class="fa fa-globe fa-5x nano-icon"></i>
								<i id="arrow-right-view-area" class="fa fa-angle-right right-ico fa-5x  "></i>
								
								<h1 class="title">Santa Rosa</h1>
								<p><i class="fa fa-clock-o"></i><b> Last view:</b> hace 11 hrs</p>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title">									
								<i class="fa fa-globe fa-5x nano-icon fa"></i>
								<h1 class="title">Loma Linda</h1>
								<p><i class="fa fa-clock-o"></i><b> Last view:</b> hace 11 hrs</p>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title">									
								<i class="fa fa-globe fa-5x nano-icon fa"></i>
								<h1 class="title">Anaco</h1>
								<p><i class="fa fa-clock-o"></i><b> Last view:</b> hace 11 hrs</p>
							</div>
							</a>
							<a class="row-area" href="#">
							<div class="area-title">									
								<i class="fa fa-globe fa-5x nano-icon fa"></i>
								<h1 class="title">Anaco</h1>
								<p><i class="fa fa-clock-o"></i><b> Last view:</b> hace 11 hrs</p>
							</div>
							</a>
							
						</div>
					</article>
				</view>
			
			</aside>
			<content id="contenido" class="contenido ">
				<div class="row">

				<a id="arrow-top-left" href="#"><i  class="fa fa-angle-left top-ico fa-3x  "></i></a>
					<h1 class="title-contenido"><i class="fa fa-cube fa-cube fa-2x"></i> &Aacute;REA [Santa Rosa]</h1>
				</div>
				<div class="row" style="margin-left: 0px;padding-bottom: 15px;background-color: white;">
					<div class="col-md-4">
						<div class="col-md-2"><i class="fa fa-user fa-2x"></i></div>
						<div class="col-md-10">
						<h4 style="margin-top:0px;margin-bottom:0px; color:#000;border-bottom:1px solid #80848B;">AREA MANAGER</h4>
						<p>NAME</p>
						<b style="color:#000">SALAZAR DIEGO</b>
						<p>EXT</p>
						<b style="color:#000">291</b>
						</div>
					</div>
					<div class="col-md-4">
						<div class="col-md-2"><i class="fa fa-user-secret fa-2x"></i></div>
						<div class="col-md-10">
						<h4 style="margin-top:0px;margin-bottom:0px; color:#000;border-bottom:1px solid #80848B;">SUPERVISOR</h4>
						<p>QUANTITY</p>
						<b style="color:#000">2</b>
						</div>
					</div>
					<div class="col-md-4">
						<div class="col-md-2"><i class="fa fa-volume-up fa-2x"></i></div>
						<div class="col-md-10">
						<h4 style="margin-top:0px;margin-bottom:0px; color:#000;border-bottom:1px solid #80848B;">ALARM</h4>
						<p>QUANTITY</p>
						<b style="color:#000">4</b>
						</div>
					</div>
					</div>
					<!-- Btn Check list -->
					<div style="margin-left: 0px; " class="row">
					          <div class="col-sm-6 col-lg-4">
							<span><i class="fa fa-list-alt fa-2x"></i></span>
							<span><i class="fa fa-list-ul fa-2x"></i></span>
							<p>
							  <input id="switch-state" type="checkbox" name="my-checkbox" checked>
							</p>
							</div>
						  
						 
					</div> 
					  <br>
					
					<!-- Panel -->
					
					<div class="box col-md-4">
						<div class="box-header brown-background">						
						  <div class="title">
							<a href="./zones.html" style="font-size:0.8em"><i class="fa fa-home fa-lg"></i> Zone 1</a>
						  </div>
						  <div class="actions">
							<a style="color: #f0ad4e;" href="#"><i class="fa fa-warning fa-2x"></i>
							</a>
						  </div>
						</div>
						<div class="box-content clearfix">
						 <br>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">05</h3>
								<small>zones</small>
							  <div class="icon-center fa fa-sitemap fa-3x align-right" ></div>
						  </div>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">07</h3>
							  <small>GUARDS</small>
							  <div class="icon-center fa fa-users fa-3x align-right"></div>
						  </div>
						</div>
					  </div>
					  
					  <!-- Panel -->
					  <div class="box col-md-4">
						<div class="box-header brown-background">						
						  <div class="title">
							<a  href="./zones.html" style="font-size:0.8em"><i class="fa fa-home fa-lg"></i> Zone 2</a>
						  </div>
						  <div class="actions">
							<a style="color: #5CB85C;" href="#"><i class="fa fa-check-circle fa-2x"></i>
							</a>
						  </div>
						</div>
						<div class="box-content clearfix">
						 <br>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">05</h3>
								<small>zones</small>
							  <div class="icon-center fa fa-sitemap fa-3x align-right" ></div>
						  </div>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">07</h3>
							  <small>GUARDS</small>
							  <div class="icon-center fa fa-users fa-3x align-right"></div>
						  </div>
						</div>
					  </div>
					  
					  <!-- Panel -->
					  <div class="box col-md-4">
						<div class="box-header brown-background">						
						  <div class="title">
							<a  href="./zones.html" style="font-size:0.8em"><i class="fa fa-home fa-lg"></i> Zone 3</a>
						  </div>
						  <div class="actions">
							<a style="color: #D9534F;" href="#"><i class="fa fa-life-ring fa-2x"></i>
							</a>
						  </div>
						</div>
						<div class="box-content clearfix">
						 <br>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">05</h3>
								<small>STATIONS</small>
							  <div class="icon-center fa fa-sitemap fa-3x align-right" ></div>
						  </div>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">07</h3>
							  <small>GUARDS</small>
							  <div class="icon-center fa fa-users fa-3x align-right"></div>
						  </div>
						</div>
					  </div>
					  
					  <!-- Panel -->
					  <div class="box col-md-4">
						<div class="box-header brown-background">						
						  <div class="title">
							<a  href="./zones.html" style="font-size:0.8em"><i class="fa fa-home fa-lg"></i> Zone 4</a>
						  </div>
						  <div class="actions">
							<a style="color: #f0ad4e;" href="#"><i class="fa fa-warning fa-2x"></i>
							</a>
						  </div>
						</div>
						<div class="box-content clearfix">
						 <br>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">05</h3>
								<small>STATIONS</small>
							  <div class="icon-center fa fa-sitemap fa-3x align-right" ></div>
						  </div>
						  <div class="box-contentK box-statistic col-sm-6">
								<h3 class="title text-grey">07</h3>
							  <small>GUARDS</small>
							  <div class="icon-center fa fa-users fa-3x align-right"></div>
						  </div>
						</div>
					  </div>
					  <hr>
					

					<!-- /paneles -->
					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive hide">
								<!-- Tabla prueba -->
					<table id="table"  data-search="true"
						data-show-refresh="true"
						data-show-columns="true"
						data-query-params="queryParams"
						data-pagination="true"
						data-classes="table table-hover">
						 <thead>
						<tr>			
							<th data-field="ZONE" data-sortable="true">ZONE</th>
							<th data-field="STATIONS" data-sortable="true">STATIONS</th>
							<th data-field="GUARDS" data-sortable="true">GUARDS</th>
							<th class="col-xs-1" data-field="ALERT" data-sortable="true">ALERT</th>
							<th data-field="VIEW" data-sortable="true">VIEW</th>
						</tr>
						</thead>
					</table>

					<!-- Fin tabla prueba -->
					  
					</div>
						</div>
					</div>
					
				
			</content>
		</section>
	</main>



	
@stop
<!-- / content -->