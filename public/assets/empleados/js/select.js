var estado_update=false;  	//variable para conocer si se actualiza o se inserta un empleado
	var tem_ced=''; 
	var tem_rif='';
	var id_update='';
	var increment = 1;  

jQuery(document).ready(function() {
	
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



// Boton add parentesco
$('#add_parentesco').click(function(e){
	increment ++;
	e.preventDefault();
	var html = "<div class='form-group'>";
	html = html + "<div class='col-sm-4'>";
	html = html + "<label for=fullname"+increment+" class=control-label>Nombre Completo</label>";
	html = html + "<input class='form-control' type='text'  id='fullname"+increment+"' name='fullname"+increment+"' placeholder='Nombre completo del familiar "+increment+"' title='Ingrese el nombre completo del familiar' required>";
	html = html + "</div>";
	// Segundo div parentesco
	html = html + "<div class='col-sm-3'>";
	html = html + "<label for=parentesco"+increment+" class=control-label>Parentesco</label>";
	html = html + "<input class='form-control' type='text' id='parentesco"+increment+"' name='parentesco"+increment+"' placeholder='Ingrese el parentesco' title='¿Cuál es su parentesco?' required>";
	html = html + "</div>";
	// Tercer div edad
	html = html + "<div class='col-sm-3'>";
	html = html + "<label for='nacimientop"+increment+"' class='control-label'>Fecha de nacimiento</label>";
	html = html + "<div class='input-group date' id='nacimientocontrolp"+increment+"' >"
	html = html + "<input class='form-control' type='text' id='nacimientop"+increment+"' name='nacimientop"+increment+"' placeholder='Fecha de nacimiento' title='Necesitamos saber cuando nació su familiar' required>";
	html = html + "<span class='input-group-addon'>";
	html = html + "<span class='glyphicon glyphicon-calendar'></span>";
	html = html + "</span>";
	html = html + "</div>";
	html = html + "</div>";
	// cuarto div sexo
	html = html + "<div class='col-sm-2'>";
	html = html + "<label for=sexop"+increment+" class=control-label>Sexo</label>";
	html = html + "<select class='form-control' id='sexop"+increment+"' name='sexop"+increment+"' required>";
	html = html + "<option value=''>-</option>";
	html = html + "<option value='1'>Femenino</option>";
	html = html + "<option value='2'>Masculino</option>";
	html = html + "</select>";
	html = html + "</div>";
		//
	html = html + "</div>";

    $('#parentescoAdd').append(html);
    $('#n_familiar').val(increment);
    
  	// dateToday esta variable ya está declarada en el html
    // generando scrip para que funcione el calendario
    var script = 		"<script type='text/javascript'>";
    	script = script + "$(function () {";
    	script = script + "$('#nacimientocontrolp"+increment+"').datetimepicker({";
    	script = script + "locale: 'en',";
    	script = script + "format: 'YYYY-DD-MM',";
    	script = script + "maxDate: '"+dateToday+"' ";
        script = script + "});});";
        script = script + "</script>";
        
      $('#script').append(script);
	// console.log('boton');
});



// Validando el formulario con jquery validator
$('#btn_update').click(function(){
	// console.log('validar');
	$('#form-update-data').validate({
		submitHandler: function() {
    // do other things for a valid form
		    // alert("perfecto!!!");
		    btn_guardar();
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

// Detectando el check discapacidad
$("#question_check").click(function() {
	// console.log('click check');
        if(!$("#checkdiscap").hasClass('active')) {
            // console.log("Está activado");
            $('#div_discapacidad').removeClass('hide');
        } else {
            // console.log("No está activado");
            $('#div_discapacidad').addClass('hide');
        }
    });
// Fin detectando check discapacidad

// Detectando el check carga familiar
$("#question_check_carga").click(function() {
	// console.log('click check');
        if(!$("#checkcarga").hasClass('active')) {
            // console.log("Está activado");
            $('#carga_familiar').removeClass('hide');
            // Activar que sean requeridos
            $("#fullname1").attr('required','required');
            $("#parentesco1").attr('required','required');
            $("#nacimientop1").attr('required','required');
            $("#sexop1").attr('required','required');
           
            console.log('full');
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

	// actualizar evaluacion
	$('#ced').change(function(){

		
		if(estado_update==true){
			if($(this).val() != tem_ced){ //evaluando si es igual a lo 	que ya habia insertado
			console.log('NUpdate');
			}
		}
		else //para la inserción
		{	var ced_insert = $(this).val();
			console.log(ced_insert);
			$.ajax({
			url: 'empleado_cd',
			type: 'POST',
			data: 'ced='+ced_insert,
				}).done(function ( response ){
				 console.log(response);
				

				});
			// Fin ajax			

		}
		// console.log('Estado');
		// console.log(estado_update);
	});


// Validar que no exista la ced de un empleado dependiendo de la varibale estado_update


});//fin funcion main



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
			data: str,
		}).done(function ( response ){
		$('#mensajeajax').html('');//Borrando el mensaje ajax
		 // console.log(response.update);
		 estado_update=true;
		 id_update = response.insertedId;
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
			alertTipo = 'alert-danger';
			mensaje = response.mensaje;
			// Activar btn imprimir
			$('#btn_print').removeClass('disabled');
		}


		var mensajerespuestaOk ="<div class='alert "+alertTipo+" alert-dismissible' role='alert'>";
    		mensajerespuestaOk = mensajerespuestaOk + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    		mensajerespuestaOk = mensajerespuestaOk + mensaje + "</div>";
    		// console.log(mensajerespuestaOk);
		$('#mesajeresponse').append(mensajerespuestaOk);

		});
	// Fin ajax

}
