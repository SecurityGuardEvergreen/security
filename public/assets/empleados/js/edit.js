$(function(){
var contar_edit =0;
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


	// ===============Asignar la antiguedad======================
	antiguedadEdit = $('#anti').val();

	if(antiguedadEdit!=""){
	añoanti_edit = antiguedadEdit.substring(6, 10);
	mesanti_edit = antiguedadEdit.substring(3, 5);
	diaantiedit = antiguedadEdit.substring(0, 2);

	tiempoedit= calcular_tiempo(diaantiedit,mesanti_edit,añoanti_edit);

	if(tiempoedit[0]==0){

	mensajeedit = 'El empleado tiene '+tiempoedit[1]+' trabajando con nosotros.';
	}else{
	mensajeedit = 'El empleado está en su '+tiempoedit[1]+' con nosotros.';
	}
	$('#antigueadad').removeClass('hide');

	msj_antigueadadEdit ="<h5><span class='label label-primary'>";
	msj_antigueadadEdit = msj_antigueadadEdit + mensajeedit + "</span></h5>";
	$('#antigueadad').append(msj_antigueadadEdit);
	}


// ===============Fin signar la antiguedad===================

//============Asignado tipo de contrato============
$('#tipo_contrato').val($('#tipocontrato_edit').val());
//============Fin Asignado tipo de contrato============
	// ==================Asignando prefi cédula===============
	cedprefi_edit = $('#cedprefi_edit').val();
	$('#tipo_ced option:eq('+cedprefi_edit+')').prop('selected', true);
	// ==================Fin Asignando prefi cédula===========

	// ==================Asignando prefi rif===============
	rifprefi_edit = $('#rifprefi_edit').val();
	$('#tipo_rif').val(rifprefi_edit);
	if(rifprefi_edit!=0){
		$('#rif').attr('disabled',false);
	}
	// ==================Fin Asignando prefi rif===========

	// ==================Asignando estado civil===============
	edo_civil_edit = $('#edo_civil_edit').val();
	// $('#edo_civil option:eq('+edo_civil_edit+')').prop('selected', true);
	$('#edo_civil').val(edo_civil_edit);
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
	  	// console.log(estado_edit)
		$('#estado').val(estado_edit);

		// ===========Asignando municipio===========
		$.ajax({
			url: '/gde/jornada/municipios',
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
					url: '/gde/jornada/parroquias',
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


	  }, 900);
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
		    	cambio_valor = false; // Variable origin select.js para controlar si se abandona la pág
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

// // Boton ver registros
// $('#registros').click(function(){
// 	cerro_pag = false;
// 	window.location.href = '../registros';
// });
// // Boton ver registros

// // Boton ir a staff
// $('#staff').click(function(){
// 	cerro_pag = false;
// 	window.location.href = '/jornada/staff'
// });
// // Boton ir a staff

// Bloquear campos
bloquear();
// fin bloquear campos

// ===========Check la edición===========
$('#edit').click(function(){
	contar_edit++;
	$('#mensaje_edit').html('');
	$('#edit').html('');
	$('#edit').append('Procesando...');
	$('#mensaje_edit').append('<p><i class="fa fa-refresh fa-spin"></i> Procesando...</p>'); 
	// console.log('contando '+contar_edit);
	id_edit = $('#id_update_empleado').val();

	// verificando si se está editando el registro
	$.ajax({
        type: 'post',
        async: false,
        url: '/gde/jornada/verificar_edit/'+id_edit
        }).done(function(response){

        	
        	if(response==0){
        		if(contar_edit >1){

        		mensaje = "<strong>Notificación!!!.</strong> El registro fue actualizado ";
				mensaje = mensaje +"recientemente y recargaremos la página en segundos.";
				// mensaje = mensaje + "para ver .";

				mensaje_edit ="<div class='alert alert-success alert-dismissible' role='alert'>";
				mensaje_edit = mensaje_edit + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
				mensaje_edit = mensaje_edit + mensaje + "</div>";
				$('#mensaje_edit').html('');    			
				$('#mensaje_edit').append(mensaje_edit);   		
					setInterval(actualizar_edit, 3000);
        		}else{
        			$.ajax({
		        type: 'post',
		        async: false,
		        url: '/gde/jornada/editando/'+id_edit
		        });
		        edit = true;
		        desbloquear();
		        cambio_valor = true;
		        $('#mensaje_edit').html('');
				$('#edit').html('');
				$('#edit').append('Editando');
				$('#edit').addClass('disabled');
        		}
        		
        	}else{
        		$('#edit').html('');
				$('#edit').append('Editar');

        		mensaje = "<strong>Uy, el registro está en edición!!!.</strong> El usuario <strong>";
        		mensaje = mensaje + response[0].name +"</strong> lo está modificando. Vuelva a verificar mas tarde ";
        		mensaje = mensaje + "para comprobar que ya puede editarlo.";

        		mensaje_edit ="<div class='alert alert-warning alert-dismissible' role='alert'>";
    			mensaje_edit = mensaje_edit + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    			mensaje_edit = mensaje_edit + mensaje + "</div>";
    			$('#mensaje_edit').html('');
    			$('#mensaje_edit').append(mensaje_edit);
        		// $('#edit').removeClass('active'); 
        	}

        });

	
});
// ===========Fin Check la edición===========

});
//===================================================== 
//================== FIN MAIN FUNCTION ================
//===================================================== 

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
			url: '/gde/jornada/save',
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
				window.location.href = '/gde/jornada/edit/'+tipo_ced+ced;

			},100
			);


		});
	// Fin ajax

}
// ============ FIN Btn guardar cambios empleado============

// ===Btn Pdf====
$('#btn_print_pdfEdit').click(function(){
	url = "/gde/jornada/pdf";
	id_empleado=$('#id_update_empleado').val();
	form = $('<form action="' + url + '" method="post" target="_blank">' +
  '<input type="hidden" name="id_empleado" value="' + id_empleado + '" />' +
  '</form>');
$('#pdf').append(form);
form.submit();
});

// ===Btn Pdf====

// =================Bloquear y desbloquear campos=================
function bloquear(){
 $("#form-update-data :input[type='text']").attr('disabled',true);
 $("#form-update-data select").attr('disabled',true);
 $("#form-update-data :input[type='radio']").parent().addClass('disabled');
 $("#form-update-data a").addClass('disabled');
 $("#form-update-data button").addClass('disabled');
 $('#btn_print_pdfEdit').removeClass('disabled'); // Desbloqueando el btn pdf
 $('#nuevo_registro').removeClass('disabled'); // Desbloqueando el btn nuevo registro

}
function desbloquear(){
 $("#form-update-data :input[type='text']").attr('disabled',false);
 $("#form-update-data select").attr('disabled',false);
 $("#form-update-data :input[type='radio']").attr('disabled',false);
 $("#form-update-data :input[type='radio']").parent().removeClass('disabled');
 $("#form-update-data a").removeClass('disabled');
 $("#form-update-data button").removeClass('disabled');
}
// =================Bloquear y desbloquear campos=================

// Recargar la página si estuvoi actualñizada
function actualizar_edit(){
		location.reload();
}
//Fin recargar la página si estuvoi actualñizada 