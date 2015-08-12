	var estado_update=false;
	var error_ced=false;
	var error_rif=false; 	//variable para conocer si se actualiza o se inserta un empleado
	var tem_ced='';
	var tem_rif='';
	var id_update='';
	var increment = 1;

jQuery(document).ready(function() {
resetn_nfamiliar();

// ================GRAN ATRACO=================
jQuery('form').find('input[type=text], input[type=radio], input[type=checkbox], select, textarea').each(function(){
		  jQuery(this).change(function(){
				jQuery(this).val($.trim($(this).val()));

				 	if (jQuery(this).val().match(/([\<])([^\>]{1,})*([\>])/i) == null)
				 	{}
					else
					{
						jQuery(this).val('');
					}
		  });
	});
// ================GRAN ATRACO=================


	//Al iniciar mandamos consultar todos los paises que se mantienen en nuestra base de datos atravez de la ruta paises
	$.getJSON('estados', function( estados ){
		$('#estado').html('');
		$('#estado').append($('<option></option>').text('Seleccione un estado....').val(''));
		$.each(estados, function(i) {
			// console.log(estados[i].nombre);
			$('#estado').append("<option value=\""+estados[i].id+"\">"+estados[i].nombre+"<\/option>");
		});
		//$('#estado').select2();
	});

    //Cargando el municipio al cambiar el estado
	$("#estado").change( function(event) {
		$.ajax({
			url: 'municipios',
			type: 'POST',
			data: 'estado=' + $("#estado option:selected").val(),
		}).done(function ( municipio ){


			$('#municipio').html('');
			$('#municipio').append($('<option></option>').text('Seleccione un municipo').val(''));
			$.each(municipio, function(i) {
				 $('#municipio').append("<option value=\""+municipio[i].id+"\">"+municipio[i].nombre+"<\/option>");
			});
			// $('#estado').select2();
		});
	});


	 //Cargando la parroquia al cambiar el municipio
	$("#municipio").change( function(event) {
		// console.log('si');
		var str =  $('#form-update-data').serialize();
		$.ajax({
			url: 'parroquias',
			type: 'POST',
			data: str,
		}).done(function ( parroquia ){


			$('#parroquia').html('');
			$('#parroquia').append($('<option></option>').text('Seleccione una parroquia').val(''));
			$.each(parroquia, function(i) {
				// console.log(parroquia[i]);
				 $('#parroquia').append("<option value=\""+parroquia[i].id+"\">"+parroquia[i].nombre+"<\/option>");
			});
			// $('#estado').select2();
		});
	});

// =============== btn remove parentesco ===============
$('#parentescoAdd').on("click","#rmfa",function(e){
	e.preventDefault();
	// $(id).remove();
	if(increment>1){
		var id = '#'+$(this).parent().parent().attr("id");
		$(id).next().remove();//borrando en script
		$(id).remove();//borrando en div entero del familiar


		// increment--;
		var n = parseInt($('#n_familiar').val());
		$('#n_familiar').val(n-1);

		// console.log($('div.cuenta').size());

		update_familiar();
	}
});
// =============== btn remove parentesco ===============

// Boton add parentesco
$('#add_parentesco').click(function(e){
	increment ++;
	e.preventDefault();

	var html = '<div id="groupfamily'+increment+'" class="form-group cuenta"><hr><div class="btn_familiar"><a href="javascript:;" id="rmfa" class="btn btn-danger">';
		html = html + '<i class="fa fa-trash-o"></i></a></div><div class="col-sm-12">';
        html = html + '<center><span id="label_family'+increment+'" class="label label-primary label_family">Familiar # </span></center>';
        html = html + '</div>';
        html = html + '<div class="col-sm-4"><label id="nombre_family'+increment+'" for="fullname'+increment+'" class="control-label">Nombres </label>';
        html = html + '<input type="text" class="form-control fullname" name="fullname'+increment+'" id="fullname'+increment+'" placeholder="Nombres del familiar " title="Ingrese el nombre del familiar" required>';
        html = html + '</div>';
        // apellido
        html = html + '<div class="col-sm-4">';
        html = html + '<label for="apellidofamiliar'+increment+'" class="control-label">Apellidos</label>';
        html = html + '<input type="text" class="form-control apellidofamiliar" name="apellidofamiliar'+increment+'" id="apellidofamiliar'+increment+'" placeholder="Apellido del familiar '+increment+'" title="Ingrese el apellido del familiar" required>';
        html = html + '</div>';
        // cedula
        html = html + '<div class="col-sm-3">';
        html = html + '<label for="ced_familiar'+increment+'" class="control-label">cédula</label>';
        html = html + '<input type="text" class="form-control ced_familiar" name="ced_familiar'+increment+'" id="ced_familiar'+increment+'" placeholder="ingrese la cédula del familiar" title="Ingrese la cédula del familiar" required>';
        html = html + '</div>';
        // parentesco

        html = html + '<div class="col-sm-3">';
        html = html + '<label for="parentesco'+increment+'" class="control-label">Parentesco</label>';
        html = html + '<input type="text" class="form-control parentesco" name="parentesco'+increment+'" id="parentesco'+increment+'" placeholder="Ingrese el parentesco" title="¿Cuál es su parentesco?" required>';
        html = html + '</div> ';
        // sexo
        html = html + '<div class="col-sm-3">';
        html = html + ' <label for="sexop'+increment+'" class="control-label">Sexo</label>';
        html = html + '<select class="form-control sexop" id="sexop'+increment+'" name="sexop'+increment+'" >';
        html = html + '<option value="">-</option>';
        html = html + '<option value="1">Femenino</option>';
        html = html + '<option value="2">Masculino</option>';
        html = html + '</select>';
        html = html + '</div>';
        // fecha de nacimiento
        html = html + '<div class="col-sm-3">';
        html = html + '<label for="nacimientop'+increment+'" class=" control-label">Fecha de nacimiento</label>';
        html = html + '<div class="input-group date nacimientocontrolp" id="nacimientocontrolp'+increment+'" >';
        html = html + '<input type="text" class="form-control nacimientop" id="nacimientop'+increment+'" name="nacimientop'+increment+'" placeholder="Fecha de nacimiento" title="Necesitamos saber cuando nació su familiar" >';
        html = html + '<span class="input-group-addon">';
        html = html + '<span class="glyphicon glyphicon-calendar"></span>';
        html = html + '</span>';
        html = html + '</div></div> ';
        // edad
        html = html + '<div class="col-sm-2">';
        html = html + '<label class="control-label">Edad</label>';
        html = html + '<br><br>';
        html = html + '<span id="edadempleadofamilia'+increment+'" class="label label-success edadempleadofamilia"></span>';
        html = html + '</div>';
        //
        html = html + '</div>';
        // scrip
        html = html + '<div id="script'+increment+'" class="scriptf">';
        html = html + '<script type="text/javascript">';
        html = html + '$(function () {';
        // datatimepicker
        html = html + '$("#nacimientocontrolp'+increment+'").datetimepicker({';
        html = html + 'locale: "en",';
        html = html + 'format: "YYYY-DD-MM",';
        html = html + 'maxDate: dateToday';
        html = html + '});';

        // html = html + '';
        // html = html + '';
        // html = html + '';
        // html = html + '';
        // html = html + '';
        // html = html + '';
        // html = html + '';
        // html = html + '';
        html = html + '});';

        html = html + '</script>';
        html = html + '<div>';


    $('#parentescoAdd').append(html);
    var n = parseInt($('#n_familiar').val());
    	n= n+1;
    $('#n_familiar').val(n);
    update_familiar();


    // ==============scripts fecha==============
     var script = "<script type='text/javascript'>";
    	script = script + "$(function () {";
    	script = script + "";
    	script = script + "";
    	script = script + "";
    	script = script + "";
        script = script + "});";
        script = script + "</script>";
        $("#nacimientocontrolp1").datetimepicker({
                    locale: "en",
                    format: "YYYY-DD-MM",
                    maxDate: dateToday
                });

	// =========================fin======================

  	// dateToday esta variable ya está declarada en el html
    // generando scrip para que funcione el calendario

      $('#script').append(script);
	// console.log('boton');
});
// =======================Fin add btn parentesco========================


// =============Metodos reglas de validacion==============
  jQuery.validator.addMethod("noSpace", function(value, element) {
  return value.indexOf(" ") < 0 && value != "";
}, "No space please and don't leave it empty");

// =============Metodos reglas de validacion==============


// Validando el formulario con jquery validator
$('#btn_update').click(function(){
	// console.log('validar');
	$('#form-update-data').validate({
		 rules: {
		    ced: {
		      required: true,
		      number: true,
		      min:0,
		      minlength:5,
		      maxlength:15
		      // noSpace:true
		    },
		    rif:{
		    	number:true,
		    	min:0,
		    	minlength:5,
		    	maxlength:15
		    }
		  },
		submitHandler: function() {
    // do other things for a valid form
		    // alert("perfecto!!!");
		    if(error_ced ==false && error_rif ==false){
		    	// console.log('No hay error');
		    	btn_guardar();
		    }

		  },
	  	errorPlacement: function(error, element) {
		    if (element.attr("name") == "nacimiento"  ) {
		      error.insertAfter(".nacimientocontrol");
		    }else if(element.attr("name") == "centro" ){
		    error.insertAfter("#centro_radio");
		    }else if(element.attr("name") == "nacimientop"+increment ){
		    error.insertAfter("#nacimientocontrolp"+increment);
		    }
		     else {
		      error.insertAfter(element);
		    }
	  	}
	});

});
// Fin validando el formulario con jquery validator

// Detectando el check centro de trabajo
// $('#radios_centro').click(function(){

// 	console.log($('#centroOpcion4').hasClass('active'));
// });
$('input[name="centro"]').change(function(){
//
var valor = $('input[name="centro"]:checked').val();
if(valor==4){

	$('#nombre_otro_centro').removeClass('hide');
}else{
	$('#input_otro_centro').val('');
	$('#centroOpcion4').val('4');//retornando a su valor original
	$('#nombre_otro_centro').addClass('hide');
}

});


//fin detectanto el check centro de trabajo
// Asignado el valor al nuevo centro
$('#input_otro_centro').change(function(){
	$('#centroOpcion4').val($(this).val());

});
// Fin asig valor al nuevo centro

// Detectando el check discapacidad
$("input[name='discap']").change(function() {

        if($("input[name='discap']:checked").val()==1) {
            // console.log("Está activado");
            $('#div_discapacidad').removeClass('hide');
        } else {
            // console.log("No está activado");
            $('#div_discapacidad').addClass('hide');
            $('#discapacidad').val('');
        }
    });
// Fin detectando check discapacidad

// Detectando el check carga familiar
$("input[name='family']").change(function() {
	// console.log($("input[name='family']:checked").val());
        if($("input[name='family']:checked").val()==1) {
            // console.log("Está activado");
            $('#carga_familiar').removeClass('hide');
            // Activar que sean requeridos
            $("#fullname1").attr('required','required');
            $("#parentesco1").attr('required','required');
            $("#nacimientop1").attr('required','required');
            $("#sexop1").attr('required','required');

            // console.log('full');
        } else {
            // console.log("No está activado");
            $('#carga_familiar').addClass('hide');
            $('#fullname1').val('');
            $('#parentesco1').val('');
            // Desactivar que sean requeridos
            $("#fullname1").removeAttr('required');
            $("#parentesco1").removeAttr('required');
            $("#nacimientop1").removeAttr('required');
            $("#sexop1").removeAttr('required');

        }
    });
// Fin detectando check carga familiar



// Validar que no exista la ced de un empleado dependiendo de la varibale estado_update

	// Validando cedula
	$('#ced').change(function(){
		validarced();
		var str =  $('#form-update-data').serialize();
console.log(str);
	});
	$('#tipo_ced').change(function(){
		validarced();
	});

	// Fin Validando cedula

// Validando rif
	$('#rif').change(function(){
		validarrif();
	});
	$('#tipo_rif').change(function(){
		validarrif();
	});
	// Fin Validando rif



// Validar que no exista la ced de un empleado dependiendo de la varibale estado_update

// bton reset
$('#btn_reset').click(function(){
	// Resetando las valiables js creadas
	 estado_update=false;
	 error_ced=false;
	 error_rif=false;
	 tem_ced='';
	 tem_rif='';
	 id_update='';
	 increment = 1;

	 $('#parentescoAdd').empty();   // Borrando cargas familiaresd extras
	 $('#btn_update').text('Agregar registro');   // Colocando el texto inicial al botón add
	 $('#btn_print').addClass('disabled'); // Bloqueando btn imprimir
	 // Borrando cualquier mensaje de ced y rif quedados en el dom
	 $('#existerif').remove();
	 $('#existe').remove();
	 // Desactivando todos los radios del centro seleccionado
	 $('#radios_centro > label').removeClass('active');
	 // Bloquear carga familiar
	 $("#carga_familiar").find(":input").prop("disabled",false);
	 $("#carga_familiar").find("a").removeClass("disabled");
	 // console.log('bloqueado');
});
// Fin btn reset


// btn Imprimir
$('#btn_print').click(function(){
	$('#print_f').append('<form id="gen_pdf" action="pdf" method="post"></form>');
	$('#gen_pdf').append('<input type="hidden" id="id_registro" name="id_registro" value="'+id_update+'">');
	$("#gen_pdf").submit();
});
// fin btn Imprimir


});//fin funcion main


// ============================================================================
// ============================== Funciones ===================================
// ============================================================================

function btn_guardar(){
	// ============Btn guardar empleado============
var mensaje ='';
var alertTipo='';
var ajaxIco = "<i class='fa fa-spinner fa-pulse fa-lg'></i> <p>Generando solicitud...</p>"
$('#mensajeajax').append(ajaxIco);



// console.log('actualizando...');
var str =  $('#form-update-data').serialize();
console.log(estado_update);
console.log(str);
		$.ajax({
			url: 'procesar',
			type: 'POST',
			data: str+"&id="+id_update,
		}).done(function ( response ){
		$('#mensajeajax').html('');//Borrando el mensaje ajax
		 // console.log(response.update);
		 estado_update=true;

		 if(id_update==''){
		 	id_update = response.insertedId;
		 }

		 tem_ced = $('#ced').val();
		 tem_rif = $('#rif').val();
		 console.log(id_update);
		 console.log(estado_update);
		 console.log(tem_ced);
		 console.log(tem_rif);
		if(response.insert){
			alertTipo= 'alert-success';
			mensaje = response.mensaje;
			// Activar btn imprimir
			$('#btn_print').removeClass('disabled');
		}
		if(response.update){
			alertTipo = 'alert-info';
			mensaje = response.mensaje;
			// Activar btn imprimir
			$('#btn_print').removeClass('disabled');
		}


		var mensajerespuestaOk ="<div class='alert "+alertTipo+" alert-dismissible' role='alert'>";
    		mensajerespuestaOk = mensajerespuestaOk + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    		mensajerespuestaOk = mensajerespuestaOk + mensaje + "</div>";
    		// console.log(mensajerespuestaOk);
		$('#mesajeresponse').append(mensajerespuestaOk);

		// Cambiando el text del boton update
		$('#btn_update').text('Actualizar registro');

		// Bloqueando carga familiar
		$("#carga_familiar").find(":input").prop("disabled",true);
	 	$("#carga_familiar").find("a").addClass("disabled");

		});
	// Fin ajax

}

// Calcular fecha
function CalculateDateDiff(dateFrom, dateTo) {
    var difference = (dateTo - dateFrom);

    var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    difference -= years * (1000 * 60 * 60 * 24 * 365);
    var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
    difference -= months *(1000 * 60 * 60 * 24 * 30.4375);
 //    var days = Math.floor(difference / (24*60*60*1000));

 //    var oneDay = 24*60*60*1000;
    // var firstDate = new Date(dateFrom);
	// var secondDate = new Date(dateTo);

	// var diffDays = 	Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	// console.log(dateFrom);
    var dif = '';
    if (years > 0)
        // dif = years + ' años ';
    dif = years;

    // if (months > 0) {
    //     if (years > 0) dif += ' y ';
    //     dif += months + ' meses';
    // }

    return dif;
}

//
function validarced(){
	error_ced = false;

		if(estado_update==true){
			$('#existe').remove();
			if($('#ced').val() != tem_ced){ //evaluando si es igual a lo 	que ya habia insertado
			var ced_insert = $('#ced').val();
			var tipo = $('#tipo_ced').val();

			$.ajax({
			url: 'empleado_cd',
			type: 'POST',
			data: 'ced='+ced_insert+'&tipo='+tipo,
				}).done(function ( response ){
				 if(response.data.length!=0){
				 	var error="<span id='existe' style='float:left;margin-top:5px' class='label label-danger'>Ésta cédula ya existe en el sistema y no se puede actualizar desde este módulo</span>";
				 	$(error).insertAfter('#ced');
				 	error_ced = true;
				 }

				});
			// Fin ajax

			}
		}
		else //para la inserción
		{
			$('#existe').remove();
			var ced_insert = $('#ced').val();
			var tipo = $('#tipo_ced').val();

			$.ajax({
			url: 'empleado_cd',
			type: 'POST',
			data:  'ced='+ced_insert+'&tipo='+tipo,
				}).done(function ( response ){
				 if(response.data.length!=0){
				 	var error="<span id='existe' style='float:left;margin-top:5px' class='label label-danger'>Ésta cédula ya existe en el sistema</span>";
				 	$(error).insertAfter('#ced');
				 	error_ced = true;
				 }


				});
			// Fin ajax

		}
}
// Fin validar ced
function validarrif(){

		error_rif =false;
		if(estado_update==true){
			$('#existerif').remove();
			if($('#rif').val() != tem_rif){ //evaluando si es igual a lo 	que ya habia insertado
			var rif_insert = $('#rif').val();
			var tipo = $('#tipo_rif').val();
			$.ajax({
			url: 'empleado_rif',
			type: 'POST',
			data: 'rif='+rif_insert+'&tipo='+tipo,
				}).done(function ( response ){
				 if(response.data.length!=0){
				 	var error="<span id='existerif' style='float:left;margin-top:5px' class='label label-danger'>Ést RIF ya existe en el sistema y no se puede actualizar desde este módulo</span>";
				 	$(error).insertAfter('#rif');
				 	error_rif =true;
				 }

				});
			// Fin ajax

			}
		}
		else //para la inserción
		{
			$('#existerif').remove();
			var rif_insert = $('#rif').val();
			var tipo = $('#tipo_rif').val();
			$.ajax({
			url: 'empleado_rif',
			type: 'POST',
			data: 'rif='+rif_insert+'&tipo='+tipo,
				}).done(function ( response ){
				 if(response.data.length!=0){
				 	var error="<span id='existerif' style='float:left;margin-top:5px' class='label label-danger'>Éste RIF ya existe en el sistema</span>";
				 	$(error).insertAfter('#rif');
				 	error_rif =true;
				 }

				});
			// Fin ajax

		}
}

// resetenado el valor de n_familiar
function resetn_nfamiliar(){
	$('#n_familiar').val(1);
}
//========= Fin resetenado el valor de n_familiar=============

function update_familiar(){

$('div.cuenta').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','groupfamily'+mas);

});

// Label familiar
$('#parentescoAdd span.label_family').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','label_family'+mas);
	$('#label_family'+mas).attr('name','label_family'+mas);
	$('#label_family'+mas).text('Familiar # '+mas);

});

// Nombre
$('#parentescoAdd input.fullname').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','fullname'+mas);
	$('#fullname'+mas).attr('name','fullname'+mas);
	$('#fullname'+mas).attr('placeholder','Nombres del familiar '+mas);

});

// Apellido
$('#parentescoAdd input.apellidofamiliar').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','apellidofamiliar'+mas);
	$('#apellidofamiliar'+mas).attr('name','apellidofamiliar'+mas);
	$('#apellidofamiliar'+mas).attr('placeholder','Apellidos del familiar up '+mas);

});

// Cedula
$('#parentescoAdd input.ced_familiar').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','ced_familiar'+mas);
	$('#ced_familiar'+mas).attr('name','ced_familiar'+mas);
	$('#ced_familiar'+mas).attr('placeholder','Ingrese la cédula up '+mas);

});

// parentesco
$('#parentescoAdd input.parentesco').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','parentesco'+mas);
	$('#parentesco'+mas).attr('name','parentesco'+mas);
	$('#parentesco'+mas).attr('placeholder','Ingrese el parentesco up '+mas);

});

// sexo sexop
$('#parentescoAdd select.sexop').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','sexop'+mas);
	$('#sexop'+mas).attr('name','sexop'+mas);
	$('#sexop'+mas).attr('placeholder','Ingrese el parentesco up '+mas);

});

// div nacimiento nacimientocontrolp
$('#parentescoAdd div.nacimientocontrolp').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','nacimientocontrolp'+mas);
	$('#nacimientocontrolp'+mas).attr('name','nacimientocontrolp'+mas);

});
// Naciemiento
$('#parentescoAdd input.nacimientop').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','nacimientop'+mas);
	$('#nacimientop'+mas).attr('name','nacimientop'+mas);
	$('#nacimientop'+mas).attr('placeholder','Fecha de naciemiento up '+mas);

});

// label edad
$('#parentescoAdd span.edadempleadofamilia').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','edadempleadofamilia'+mas);


});

// Generando el script
$('#parentescoAdd div.scriptf').each(function(index){
	var mas = index +2;
	var id_temp = $(this).attr('id');
	$('#'+id_temp).empty();
	$('#'+id_temp).attr('id','script'+mas);
	var script ='';
	    script = script + '<script type="text/javascript">';
        script = script + '$(function () {';
        // datatimepicker
        script = script + '$("#nacimientocontrolp'+mas+'").datetimepicker({';
        script = script + 'locale: "en",';
        script = script + 'format: "YYYY-DD-MM",';
        script = script + 'maxDate: dateToday';
        script = script + '})';
        script = script + '.on("dp.change", function(e) {';
        script = script + 'var fecha'+mas+' = $("#nacimientocontrolp'+mas+'").data("date");';
        script = script + '$("#edadempleadofamilia'+mas+'").addClass("hide");';
        script = script + 'if(fecha'+mas+'!=""){';
        script = script + 'var año = fecha'+mas+'.substring(0, 4);';
        script = script + 'var mes = fecha'+mas+'.substring(5, 7);';
        script = script + 'var dia = fecha'+mas+'.substring(8, 10);';
        script = script + 'var años = CalculateDateDiff(new Date(año,dia,mes), new Date(yyyy,dd,mm));';
        script = script + 'if(años>17){';
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('hide');";
        script = script + "$('#edadempleadofamilia"+mas+"').addClass('label-success');";
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('label-danger');";
        script = script + "$('#edadempleadofamilia"+mas+"').text(años+' años');";
        script = script + "} else if(años==1){";
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('hide');";
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('label-success');";
        script = script + "$('#edadempleadofamilia"+mas+"').addClass('label-danger');";
        script = script + "$('#edadempleadofamilia"+mas+"').text(años+' año no es una edad para trabajar');";
        script = script + "}else if(años>1){";
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('hide');";
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('label-success');";
        script = script + "$('#edadempleadofamilia"+mas+"').addClass('label-danger');";
        script = script + "$('#edadempleadofamilia"+mas+"').text(años+' años no es una edad para trabajar');";
        script = script + "}else if(años<1){";
        script = script + "$('#edadempleadofamilia"+mas+"').removeClass('hide');";
        script = script + "$('#edadempleadofamilia"+mas+"').addClass('label-danger');";
        script = script + "$('#edadempleadofamilia"+mas+"').text('un bebé no puede trabajar');";
        script = script + '}';
        script = script + '}';
        script = script + '});';

        script = script + '});';

        script = script + '</script>';

	$('#script'+mas).append(script);
	// $('#nacimientop'+mas).attr('placeholder','Fecha de naciemiento up '+mas);

});


}

