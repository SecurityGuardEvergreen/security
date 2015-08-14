@extends('empleados.base')

@section('js')
<!-- ==========table=========== -->
<link rel="stylesheet" href="/assets/admin/asset/css/bootstrap-table.css">
<script src="/assets/admin/js/bootstrap-table.js"></script>
<script src="/assets/admin/js/bootstrap-table-es-MX.js"></script>
<!-- ===========table========= -->
<style type="text/css">
	.ml10 {
    margin-left: 10px;
}
</style>

<script type="text/javascript">

	function actionFormatter(value, row, index) {
    return [
        '<a class="edit ml10" href="javascript:void(0)" title="Edit">',
        '<i class="glyphicon glyphicon-edit"></i>',
        '</a>',
        '<a class="remove ml10" href="javascript:void(0)" title="Remove">',
        '<i class="glyphicon glyphicon-remove"></i>',
        '</a>'
    ].join('');
}

	window.actionEvents = {
    'click .edit': function (e, value, row, index) {
        // alert('You click edit icon, row: ' + JSON.stringify(row));
        alert('Paciencia estamos trabajando !!!')
        console.log(row.ci);
    },
    'click .remove': function (e, value, row, index) {
        // alert('You click remove icon, row: ' + JSON.stringify(row));
        alert('Paciencia estamos trabajando !!!')
        console.log(value, row, index);
    }
};
</script>


@stop

@section('content')
<style type="text/css">
	.ced{
		width: 0.3%;
	}
</style>
<section id="get-trial" class="section text-center">
    <div class="container">
        <h2 style="color:#fff;" class="section-title">Registros !!!</h2>
        <br>
        <h4 class="wow fadeInLeft" data-wow-duration="1s">

            Aquí definiremos los banners de los registros
        </h4>
    </div>
</section>

<br><br>

<div class="container">
	<div class="row">
	<div class="col-md-12">
		<div class="table-responsive ">
<!-- Fin tabla prueba -->
			<table data-toggle="table"
			    data-url="data_empleados"
			    data-search="true"
			    data-show-refresh="true"
			    data-show-columns="true"
			    data-query-params="queryParams"
			    data-pagination="true"
			    data-classes="table table-hover"
			       >
			    <thead>
			    <tr>            
		            <th data-field="nombre" data-sortable="true">Nombre</th>
		            <th data-field="apellido" data-sortable="true">Apellido</th>
		            <th class="ced" data-field="sigla_ced" data-sortable="true">Tipo</th>
		            <th data-field="ci" data-sortable="true">Cédula</th>
		            <th data-field="cargo" data-sortable="true">Cargo</th>
		            <th data-field="centro" data-sortable="true">Centro de trabajo</th>
		            <th data-field="estado" data-sortable="true">Estado</th>
		            <th data-field="municipio" data-sortable="true">Municipio</th>
		            <th data-field="parroquia" data-sortable="true">Parroquia</th>
		            <th data-field="rif" data-sortable="true" data-formatter="actionFormatter" data-events="actionEvents">Acción</th>
		        </tr>
			    </thead>
			</table>

		</div>
	</div>
	</div>
	<!-- /row -->

</div>

<script src="/assets/empleados/js/vendor/jquery-1.11.1.js"></script>
<script src="/assets/empleados/js/plugins.js"></script>
<script src="/assets/empleados/js/bootstrap.min.js"></script>
<script src="/assets/empleados/js/wow.min.js"></script>
<script src="/assets/empleados/js/prettyPhoto.js"></script>
<script src="/assets/empleados/js/owl.carousel.min.js"></script>

@stop
<!-- Fin content -->