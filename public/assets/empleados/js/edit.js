$(function(){
	// ============== asignando el centro ================
	radio= $("input[name=centro]");
	radio_edit = $('#centro_edit').val();
	centro=false;

	for (var i = 0; i < radio.length; i++) {
		if(radio[i].defaultValue==radio_edit){

			$('#'+radio[i].id).parent().addClass('active');
			centro = true;
			radio[i].defaultChecked = true;
		}
	}
	// Caso de que no se consiga el centro
	if(centro==false){
		$('#centroOpcion4').attr('checked','checked');
		$('#centroOpcion4').parent().addClass('active');
		$('#nombre_otro_centro').removeClass('hide');
		$('#input_otro_centro').val(radio_edit);
		$('#centroOpcion4').val(radio_edit);

	}

	// ============== Fin asignando el centro ================

	// ==================Asignando prefi cédula===============
	cedprefi_edit = $('#cedprefi_edit').val();
	$('#tipo_ced option:eq('+cedprefi_edit+')').prop('selected', true);
	// ==================Fin Asignando prefi cédula===========

	// ==================Asignando prefi rif===============
	rifprefi_edit = $('#rifprefi_edit').val();
	$('#tipo_rif').val(rifprefi_edit);
	// ==================Fin Asignando prefi rif===========

	// ==================Asignando estado civil===============
	edo_civil_edit = $('#edo_civil_edit').val();
	$('#edo_civil option:eq('+edo_civil_edit+')').prop('selected', true);
	// ==================Fin Asignando estado civil===========

	// ===============Asignar edad======================
	fecha = $('#nacimiento').val();
	año = fecha.substring(6, 10);
	mes = fecha.substring(3, 5);
	dia = fecha.substring(0, 2);
	años = calcular_edad(dia+'/'+mes+'/'+año);

	$('#edadempleado').removeClass('hide');
	$('#erroredadempleado').addClass('hide');
	$('#edadempleado').text(años+' años');

// ===============Fin signar edad===================

	// ==================Asignando sexo===============
	sexo_edit = $('#sexo_edit').val();
	$('#sexo option:eq('+sexo_edit+')').prop('selected', true);
	// ==================Fin Asignando sexo===========

	// ==================Asignando tipo de sangre===============
	sangre_edit = $('#sangre_edit').val();
	$('#blood').val(sangre_edit);
	// ==================Fin Asignando tipo de sangre===========

	// ==================Asignando lateralidad===============
	lateralidad_edit = $('#lateralidad_edit').val();
	$('#lateralidad').val(lateralidad_edit);
	// ==================Fin Asignando lateralidad===========

	// ==================Asignando nivel educación ===============
	niveledu_edit = $('#niveledu_edit').val();
	$('#educacion').val(niveledu_edit);
	// ==================Fin Asignando nivel educación ===========

	// ==================Asignando cargo ===============
	cargo_edit = $('#cargo_edit').val();
	$('#cargo').val(cargo_edit);
	// ==================Fin Asignando cargo ===========

	// ==================Asignando estado ===============

	setTimeout(
	  function()
	  {
	  	estado_edit = $('#estado_edit').val();
		$('#estado').val(estado_edit);

		// ===========Asignando municipio===========
		$.ajax({
			url: '/jornada/municipios',
			type: 'POST',
			data: 'estado=' + $("#estado option:selected").val(),
		}).done(function ( municipio ){


			$('#municipio').html('');
			$('#municipio').append($('<option></option>').text('Seleccione un municipo').val(''));
			$.each(municipio, function(i) {
				 $('#municipio').append("<option value=\""+municipio[i].id+"\">"+municipio[i].nombre+"<\/option>");
			});

			// Seleccionar el municipio
			municipio_edit = $('#municipio_edit').val();
			$('#municipio').val(municipio_edit);
			// Fin seleccionar el municipio

			// NEXT parroquias
				// ==================Asignando parroquia ===========
				$.ajax({
					url: '/jornada/parroquias',
					type: 'POST',
					data: 'municipio=' + $("#municipio option:selected").val(),
				}).done(function ( parroquia ){


					$('#parroquia').html('');
					$('#parroquia').append($('<option></option>').text('Seleccione una parroquia').val(''));
					$.each(parroquia, function(i) {
						// console.log(parroquia[i]);
						 $('#parroquia').append("<option value=\""+parroquia[i].id+"\">"+parroquia[i].nombre+"<\/option>");
					});

					// Seleccionar el parroquia
					parroquia_edit = $('#parroquia_edit').val();
					$('#parroquia').val(parroquia_edit);
					// Fin seleccionar el parroquia

				});// fin ajax
			// ==================Fin Asignando parroquia ===========


		});//fin ajax
		// ===========Fin Asignando municipio=======


	  }, 600);
	// ==================Fin Asignando estado ===========

// ==========Discapacidad=============
discp = $.trim($('#discapacidad_edit').val());
if(discp!=''){
	$('#checkdiscap').addClass('active');
	$('#checkdiscap').next().removeClass('active');
	$('#checkdiscap :first-child').defaultChecked = true;
	$('#div_discapacidad').removeClass('hide');
	discapacidad_edit = $('#discapacidad_edit').val();
	$('#discapacidad').val(discapacidad_edit);

}

// ==========Fin Discapacidad=========

// ===============Carga Familiar==================
if($('#carga_edit').val()!= 0){
	$('#checkcarga').addClass('active');
	$('#checkcarga').next().removeClass('active');
	$('#checkcarga :first-child').defaultChecked = true;
	$('#carga_familiar').removeClass('hide');
}

// ===============Fin Carga Familiar==============

// Asignado valiable para controlar el max familiar
family_total_f = $('#cant_family').val();
// Asignado valiable para controlar el max familiar

// =============Determinando sexo y parentesco family dinamic ==============
tam_family=$('#cant_family').val();
$('#n_familiar').val(tam_family);
// console.log($('#n_familiar').val());
if(tam_family>0){

	for (var i = 1; i <= tam_family; i++) {
		$('#sexop'+i).val($('#edit_sexop'+i).val());
		$('#parentescoEdit'+i).val($('#edit_parentesco'+i).val());
		

	};
}
// ============= Fin Determinando sexo family dinamic =========

// ==========Agregando familiar============
generarscript();
// ==========Fin Agregando familiar========

// ================= Determinando la edad dinámica de los familiares ==============

if(tam_family>0){
	for (var i = 1; i <= tam_family; i++) {

    fecha = $('#nacimientopEdit'+i).val();
	año = fecha.substring(6, 10);
	mes = fecha.substring(3, 5);
	dia = fecha.substring(0, 2);
	años = calcular_edad(dia+'/'+mes+'/'+año);

	$('#edadempleadofamiliaEdit'+i).removeClass('hide');
	$('#edadempleadofamiliaEdit'+i).text(años+' años');

	}
}

// ================= Fin determinando la edad dinámica de los familiares ==========

// ==================Botn borrar el familiar  ====================
var id_eliminar = [];
$('#parentescoAdd').on("click","#rmfaedit",function(){
	family_total_f = family_total_f -1;
	console.log('borrar');
	console.log(family_total_f);

	n_borrar = $(this).parent().parent().attr('id');
	n_borrar = n_borrar.substring(11,12);
	id_eliminar.push($(this).parent().prev().val()); // capturando el id del familiar a eliminar
	responsemsg = confirm("\u00bfEst\u00e1  seguro de borrar el registro? ");
	if(responsemsg){
		console.log(id_eliminar);
		$('#dele').val(id_eliminar);
	// Borrando del dom
		remover_id = $(this).parent().parent().attr('id');
		$('#'+remover_id).remove();
		$('#print_'+n_borrar).remove();
	}



});
// ==================Botn borrar ====================


// Validando el formulario con jquery validator
$('#btn_save').click(function(){
	// console.log('validar');
validator = $('#form-update-data').validate({
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
		    if(error_ced ==false && error_rif ==false && error_edad==false){
		    	// console.log('No hay error');

		    	btn_guardar_cambios();
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



});//fin main function

// ============Function Generar script==============
function generarscript(){
	// Generando el script
$('#parentescoAdd div.scriptEdit').each(function(index){

	 mas = index+1;
	 id_temp = $(this).attr('id');
	 // console.log(id_temp);
	$('#'+id_temp).empty();
	$('#'+id_temp).attr('id','scriptEdit'+mas);
	 script ='';
	    script = script + '<script type="text/javascript">';
        script = script + '$(function () {';
        // datatimepicker
        script = script + '$("#nacimientocontrolpEdit'+mas+'").datetimepicker({';
        script = script + 'locale: "es",';
        script = script + 'format: "DD-MM-YYYY",';
        script = script + 'maxDate: dateToday';
        script = script + '})';
        script = script + '.on("dp.change", function(e) {';
        // script = script + 'var fecha'+mas+'="";';
        script = script + 'fecha'+mas+' = $("#nacimientocontrolpEdit'+mas+'").data("date");';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").addClass("hide");';
        script = script + 'if(fecha'+mas+'!=""){';
        script = script + ' año = fecha'+mas+'.substring(6, 10);';
        script = script + ' mes = fecha'+mas+'.substring(3, 5);';
        script = script + ' dia = fecha'+mas+'.substring(0, 2);';
        script = script + ' años = calcular_edad(dia+"/"+mes+"/"+año);';
        script = script + 'if(años>1){';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").removeClass("hide");';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").text(años+" años");';
        script = script + '}else if(años<1){';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").removeClass("hide");';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").text("Bebé sin el año cumplido");';
        script = script + '}';
        script = script + 'else if(años==1){';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").removeClass("hide");';
        script = script + '$("#edadempleadofamiliaEdit'+mas+'").text(años+" año");';
        script = script + '}';
        script = script + '}';
        script = script + '});';

        script = script + '});';

        script = script + '</script>';

	$('#scriptEdit'+mas).append(script);
	// $('#nacimientop'+mas).attr('placeholder','Fecha de naciemiento up '+mas);

});
}
// ============Function Generar script==============

// ============Btn guardar cambios empleado============
function btn_guardar_cambios(){

var mensaje ='';
var alertTipo='';
var ajaxIco = "<i class='fa fa-spinner fa-pulse fa-lg'></i> <p>Generando solicitud...</p>"
$('#mensajeajax').append(ajaxIco);



// console.log('actualizando...');
var str =  $('#form-update-data').serialize();

console.log(str);
		$.ajax({
			url: '/jornada/save',
			type: 'POST',
			data: str,
		}).done(function ( response ){
			console.log(response.Mensaje);
		$('#mensajeajax').html('');//Borrando el mensaje ajax


		if(response.Update_empleado){
			alertTipo= 'alert-success';
			mensaje = response.Mensaje;

		}



		mensajerespuestaOk ="<div class='alert "+alertTipo+" alert-dismissible' role='alert'>";
    		mensajerespuestaOk = mensajerespuestaOk + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    		mensajerespuestaOk = mensajerespuestaOk + mensaje + "</div>";
    		// console.log(mensajerespuestaOk);
		$('#mesajeresponse').append(mensajerespuestaOk);


		setTimeout(
			function(){

				tipo_ced = $('#tipo_ced option:selected').text();
				ced = $('#ced').val();
				console.log(tipo_ced+ced); 
				// location.reload();
				window.location.href = '/jornada/edit/'+tipo_ced+ced;

			},100
			);


		});
	// Fin ajax

}
// ============ FIN Btn guardar cambios empleado============
