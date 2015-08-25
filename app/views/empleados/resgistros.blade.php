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
function nameFormatter(value) {
    return '<a href="edit/' + value + '">' + value + '</a>';
}

	window.actionEvents = {
    'click .edit': function (e, value, row, index) {
        // alert('You click edit icon, row: ' + JSON.stringify(row));
        // alert('Paciencia estamos trabajando !!!')
        
        window.location.href = 'edit/'+row.full_ced;
    },
    'click .remove': function (e, value, row, index) {
        // alert('You click remove icon, row: ' + JSON.stringify(row));
        borrar = confirm("\u00bfEst\u00e1  seguro de borrar el registro? ");
        if(borrar){
        	
			eliminarregistro(row.id);

			$('#tabla_registros').bootstrapTable('remove', {
		            field: 'id',
		            values: [row.id]
		        });
		    

        }
        // console.log(value, row, index);
    }
};

// $('.dropdown-menu first-child').addClass('hide');
// console.log($('.dropdown-menu'));

</script>


@stop

@section('content')
<style type="text/css">
	.ced{
		width: 0.3%;
	}
	.upper{
		text-transform: capitalize;
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
<div class="row">
	<div class="col-sm-12 ">
		<div class="container" id="mesajeresponse"></div>
		<center>
			<a href="/jornada/staff" class="btn btn-success">Nuevo registro</a>
		</center>
	</div>
</div>
<div class="container">
	<div class="row">
	<div class="col-md-12">
		<div class="table-responsive">
<!-- Fin tabla prueba -->

<!-- Btn borrar  -->
<div id="toolbar" class="btn-group">

    <button id="remove" type="button" class="btn btn-danger" disabled>
        <i class="glyphicon glyphicon-trash"></i>
    </button>
</div>
<!-- Btn borrar  -->
		<table id="tabla_registros" data-toggle="table"
		    data-url="data_empleados"
		    data-search="true"
		    data-show-refresh="true"
		    data-show-columns="true"
		    data-query-params="queryParams"
		    data-pagination="true"
		    data-classes="table table-hover"
		    data-click-to-select="true"
		    data-toolbar="#toolbar"

		    >
		    <thead>
		    <tr>
		    	<th data-field="state" data-checkbox="true"></th>
		    	<th data-field="apellido" data-sortable="true">Apellido</th>
	            <th data-field="nombre" data-sortable="true">Nombre</th>		            
	            <th class="upper" data-field="full_ced" data-sortable="true" data-formatter="nameFormatter">Cédula</th>
	            <th data-field="cargo" data-sortable="true">Cargo</th>
	            <th data-field="centro" data-sortable="true">Centro de trabajo</th>
	            <th data-field="created_at" data-sortable="true">Creado</th>
	            <th data-field="updated_at" data-sortable="true">Actualizado</th>	            
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


<script>
    var $table = $('#tabla_registros'),
        $remove = $('#remove'),
        selections = [];

    $(function () {
        
        
        $table.on('check.bs.table uncheck.bs.table ' +
                'check-all.bs.table uncheck-all.bs.table', function () {
            $remove.prop('disabled', !$table.bootstrapTable('getSelections').length);

            // save your data, here just save the current page
            selections = getIdSelections();
            // console.log(selections);
            // push or splice the selections if you want to save all data selections
        });


        $table.on('expand-row.bs.table', function (e, index, row, $detail) {
            if (index % 2 == 1) {
                $detail.html('Loading from ajax request...');
                $.get('LICENSE', function (res) {
                    $detail.html(res.replace(/\n/g, '<br>'));
                });
            }
        });
        $table.on('all.bs.table', function (e, name, args) {
            // console.log(name, args);
        });
        $remove.click(function () {
            var ids = getIdSelections();
            borrar = confirm("\u00bfEst\u00e1  seguro de borrar el registro? ");
			if(borrar){

				eliminarregistro(ids);


				$table.bootstrapTable('remove', {
		            field: 'id',
		            values: ids
		        });
		        $remove.prop('disabled', true);
			}
           
        });
        $(window).resize(function () {
            $table.bootstrapTable('resetView', {
                height: getHeight()
            });
        });
    });

    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function (row) {
            return row.id
        });
    }

    function responseHandler(res) {
        $.each(res.rows, function (i, row) {
            row.state = $.inArray(row.id, selections) !== -1;
        });
        return res;
    }

    function detailFormatter(index, row) {
        var html = [];
        $.each(row, function (key, value) {
            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
        });
        return html.join('');
    }

    function operateFormatter(value, row, index) {
        return [
            '<a class="like" href="javascript:void(0)" title="Like">',
            '<i class="glyphicon glyphicon-heart"></i>',
            '</a>  ',
            '<a class="remove" href="javascript:void(0)" title="Remove">',
            '<i class="glyphicon glyphicon-remove"></i>',
            '</a>'
        ].join('');
    }

    window.operateEvents = {
        'click .like': function (e, value, row, index) {
            alert('You click like action, row: ' + JSON.stringify(row));
        },
        'click .remove': function (e, value, row, index) {
            $table.bootstrapTable('remove', {
                field: 'id',
                values: [row.id]
            });
        }
    };

    function totalTextFormatter(data) {
        return 'Total';
    }

    function totalNameFormatter(data) {
        return data.length;
    }

    function totalPriceFormatter(data) {
        var total = 0;
        $.each(data, function (i, row) {
            total += +(row.price.substring(1));
        });
        return '$' + total;
    }

    function getHeight() {
        return $(window).height() - $('h1').outerHeight(true);
    }
    function eliminarregistro(ids){
    	$.ajax({
					url: '/jornada/deleteempleado',
					type: 'POST',
					data: 'ids='+ ids,
					beforeSend:function(){
						wait = '<center><i class="fa fa-spinner fa-pulse fa-lg"></i> <p>Generando solicitud...</p></center>';
						$('#mesajeresponse').append(wait);
					}
				}).done(function ( respuesta ){
					$('#mesajeresponse').empty();

					mensaje = respuesta.mensaje;
					alert = respuesta.alert;
					
					mensajerespuestaOk ="<div class='alert alert-"+alert+" alert-dismissible' role='alert'>";
    				mensajerespuestaOk = mensajerespuestaOk + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    				mensajerespuestaOk = mensajerespuestaOk + mensaje + "</div>";
    				// console.log(mensajerespuestaOk);
					$('#mesajeresponse').append(mensajerespuestaOk);
					
				});
    }
</script>

@stop
<!-- Fin content -->
