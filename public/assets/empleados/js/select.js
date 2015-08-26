	var estado_update=false;
	var error_ced=false;
	var error_rif=false;  //variable para conocer si se actualiza o se inserta un empleado
	var error_edad=false;
	var error_form=false;
	var tem_ced='';
	var tem_rif='';
	var id_update='';
	var increment = 1;
	var validator;
	var family_total_f = "";
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
	$.getJSON('/jornada/estados', function( estados ){
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
			url: '/jornada/municipios',
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
			url: '/jornada/parroquias',
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
		 id = '#'+$(this).parent().parent().attr("id");
		 trid = id.substring(12);
		 trid = '#tr'+trid;
		 // console.log(trid);
		$(id).next().detach();//borrando en script
		// delete fecha+increment;
		$(trid).remove();

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
	 increment = parseInt($('#n_familiar').val());

	  console.log(family_total_f);
	  console.log("incre "+increment);
	 // Retringuiendo el tamaño de la carga familiar
	 if(increment < 5 || family_total_f < 5){
	 $('#mensaje_max_family').addClass('hide'); //ocultando mensaje de error de max familiar

     increment ++;
     // console.log(increment);
    $('#n_familiar').val(increment);
	// increment ++;
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
        html = html + '<input type="text" class="form-control ced_familiar" name="ced_familiar'+increment+'" id="ced_familiar'+increment+'" placeholder="ingrese la cédula del familiar" title="Ingrese la cédula del familiar" >';
        html = html + '</div>';
        // parentesco

        html = html + '<div class="col-sm-3">';
        html = html + '<label for="parentesco'+increment+'" class="control-label">Parentesco</label>';
        html = html + '<select name="parentesco'+increment+'" id="parentesco'+increment+'" class="form-control parentesco" required title="¿Cuál es su parentesco?">';
        html = html + '<option value="">-</option>';
        html = html + '<option value="Hijo">Hijo</option>';
        html = html + '<option value="Hija">Hija</option>';
        html = html + '<option value="Esposo/a">Esposo/a</option>';
        html = html + '<option value="Concubino/a">Concubino/a</option>';
        html = html + '</select>';

        html = html + '</div> ';

        // sexo
        html = html + '<div class="col-sm-3">';
        html = html + ' <label for="sexop'+increment+'" class="control-label">Sexo</label>';
        html = html + '<select required class="form-control sexop" id="sexop'+increment+'" name="sexop'+increment+'" >';
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


  //       html = html + '</script>';
        html = html + '<div>';

        // ========Generando tabla familiar =====
        	fami = '<tr class="tr" id="tr'+increment+'">'
			fami = fami + '<td class="print_parent_nombre" id="print_parent_nombre'+increment+'">psd</td>';
			fami = fami + '<td class="print_parent_cedula" id="print_parent_cedula'+increment+'">psd</td>';
			fami = fami + '<td class="print_parent_parentesco" id="print_parent_parentesco'+increment+'"></td>';
			fami = fami + '<td class="print_parent_nacimiento" id="print_parent_nacimiento'+increment+'"></td>';
			fami = fami + '<td class="print_parent_edad" id="print_parent_edad'+increment+'"></td>';
			fami = fami + '<td class="print_parent_sexo" id="print_parent_sexo'+increment+'"></td>';
			fami = fami + '</tr>';

			$('#tb_familiar').append(fami);


    $('#parentescoAdd').append(html);


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
                    format: "DD-MM-YYYY",
                    maxDate: dateToday
                });

	// =========================fin======================

  	// dateToday esta variable ya está declarada en el html
    // generando scrip para que funcione el calendario

      $('#script').append(script);
	// console.log('boton');
}else //condición contraria restricción carga familiar
{
	family_total_f = family_total_f -1; //restando max familiar para edit js
	console.log("else famili "+family_total_f);
max_mensaje_familia = '<br> <div class="alert alert-warning alert-dismissible" role="alert">';
max_mensaje_familia = max_mensaje_familia + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
max_mensaje_familia = max_mensaje_familia +  '<span aria-hidden="true">&times;</span>';
max_mensaje_familia = max_mensaje_familia +  '</button>';
max_mensaje_familia = max_mensaje_familia +  '<strong>Alerta !!!</strong> Excedíste el número de familiares permitidos. (<b>Aceptamos 5 cargas familiares a lo sumo</b>)';
max_mensaje_familia = max_mensaje_familia +    '</div>';

$('#mensaje_max_family').removeClass('hide');
$('#mensaje_max_family').empty();
$('#mensaje_max_family').append(max_mensaje_familia);
}//fin if restringuiendo la carga familiar

family_total_f = parseInt(family_total_f) + 1; // aumentando el max familiar


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
		    	error_form = false;
		    	btn_guardar();
		    }

		  },
	  	errorPlacement: function(error, element) {
	  		error_form = true;
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
// console.log(valor);
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
            $("#n_familiar").val('1');
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
            $("#fullname1").removeAttr('required');
            $("#parentesco1").removeAttr('required');
            $("#nacimientop1").removeAttr('required');
            $("#sexop1").removeAttr('required');
            $("#edadempleadofamilia1").addClass('hide');
            $("#n_familiar").val('0');

        }
    });
// Fin detectando check carga familiar



// Validar que no exista la ced de un empleado dependiendo de la varibale estado_update

	// Validando cedula
	$('#ced').change(function(){
		validarced();
		var str =  $('#form-update-data').serialize();
// console.log(str);
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
		// Bloqueando o activando el input deacuerdo el estado del tipo rif
		if($(this).val()!=0){
			$('#rif').attr('disabled',false);

		}else{
			$('#rif').val('');
			$('#rif').attr('disabled',true);
			$('#rif').removeClass('error');
			$('#rif-error').remove();

		}
		// Bloqueando o activando el input deacuerdo el estado del tipo rif
		validarrif();
	});
	// Fin Validando rif

// test add nuevo familiar


// Validar que no exista la ced de un empleado dependiendo de la varibale estado_update

// bton reset
$('#btn_reset').click(function(){
	// Resetando las valiables js creadas
	 estado_update=false;
	 error_ced=false;
	 error_rif=false;
	 error_edad=false;
	 tem_ced='';
	 tem_rif='';
	 id_update='';
	 increment = 1;

	 if(error_form){
	 	validator.resetForm();
	 }

	 $('#mensaje_max_family').addClass('hide'); //ocultando mensaje de max familiar
	 $('#parentescoAdd').empty();   // Borrando cargas familiaresd extras
	 $('#btn_update').text('Agregar registro');   // Colocando el texto inicial al botón add
	 $('#btn_print_f').addClass('disabled'); // Bloqueando btn imprimir
	 // Borrando cualquier mensaje de ced y rif quedados en el dom
	 $('#existerif').remove();
	 $('#existe').remove();
	 // Desactivando todos los radios del centro seleccionado
	 $('#radios_centro > label').removeClass('active');
	 // Bloquear carga familiar
	 $("#carga_familiar").find(":input").prop("disabled",false);
	 $("#carga_familiar").find("a").removeClass("disabled");
	 // console.log('bloqueado');
	 $('#edadempleadofamilia1').text('');
	 $('#erroredadempleado').text('');
	 $('#edadempleado').text('');
	 $('#rif').attr('disabled',true); // bloqueando campo rif
});
// Fin btn reset




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
			$('#btn_print_f').removeClass('disabled');
		}
		if(response.update){
			alertTipo = 'alert-info';
			mensaje = response.mensaje;
			// Activar btn imprimir
			$('#btn_print_f').removeClass('disabled');
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

// Otro edad
/*----------Funcion para obtener la edad------------*/
function calcular_edad(fecha) {
var fechaActual = new Date()
var diaActual = fechaActual.getDate();
var mmActual = fechaActual.getMonth() + 1;
var yyyyActual = fechaActual.getFullYear();
FechaNac = fecha.split("/");
var diaCumple = FechaNac[0];
var mmCumple = FechaNac[1];
var yyyyCumple = FechaNac[2];
//retiramos el primer cero de la izquierda
if (mmCumple.substr(0,1) == 0) {
mmCumple= mmCumple.substring(1, 2);
}
//retiramos el primer cero de la izquierda
if (diaCumple.substr(0, 1) == 0) {
diaCumple = diaCumple.substring(1, 2);
}
var edad = yyyyActual - yyyyCumple;

//validamos si el mes de cumpleaños es menor al actual
//o si el mes de cumpleaños es igual al actual
//y el dia actual es menor al del nacimiento
//De ser asi, se resta un año
if ((mmActual < mmCumple) || (mmActual == mmCumple && diaActual < diaCumple)) {
edad--;
}
return edad;
}
//

// Función calcular tiempo en la empresa
function calcular_tiempo(dia,mes,año){
	primerdia= 0;
	 hoy = new Date()

	 curday = hoy.getDate();;
	 curmon = hoy.getMonth() + 1;;
	 curyear = hoy.getFullYear();;
	 calday = dia;
	 calmon = mes;
	 calyear = año;


	 curd = new Date(curyear,curmon-1,curday);
	 cald = new Date(calyear,calmon-1,calday);

	 diff =  Date.UTC(curyear,curmon-1,curday,0,0,0)
		 - Date.UTC(calyear,calmon-1,calday,0,0,0);

	 dife = datediff(curd,cald);

	if(dife[0]==1 && dife[1] ==1 && dife[2]==1){
		edad =dife[0]+" año, "+dife[1]+" mes, y "+dife[2]+" día";
	}else if(dife[0]==1 && dife[1] ==1 && dife[2]>0){
		edad =dife[0]+" año, "+dife[1]+" mes, y "+dife[2]+" días";
	}else if(dife[0]==1 && dife[1] >0 && dife[2]==1){
		edad =dife[0]+" año, "+dife[1]+" meses, y "+dife[2]+" día";
	}else if(dife[0]==1 && dife[1] >0 && dife[2]>0){
		edad =dife[0]+" año, "+dife[1]+" meses, y "+dife[2]+" días";
	}else if(dife[0]>0 && dife[1] ==1 && dife[2]==1){
		edad =dife[0]+" años, "+dife[1]+" mes, y "+dife[2]+" día";
	}else if(dife[0]>0 && dife[1] ==1 && dife[2]>0){
		edad =dife[0]+" años, "+dife[1]+" mes, y "+dife[2]+" días";
	}else if(dife[0]>0 && dife[1] >0 && dife[2]==1){
		edad =dife[0]+" años, "+dife[1]+" meses, y "+dife[2]+" día";
	}else if(dife[0]>0 && dife[1] >0 && dife[2]>0){
		edad =dife[0]+" años, "+dife[1]+" meses, y "+dife[2]+" días";
	}else if(dife[0]==1 && dife[1] ==1 && dife[2]==0){
		edad =dife[0]+" año y "+dife[1]+" mes ";
	}else if(dife[0]==1 && dife[1] >0 && dife[2]==0){
		edad =dife[0]+" año y "+dife[1]+" meses ";
	}else if(dife[0]>0 && dife[1] ==1 && dife[2]==0){
		edad =dife[0]+" años y "+dife[1]+" meses ";
	}else if(dife[0]>0 && dife[1] >0 && dife[2]==0){
		edad =dife[0]+" años y "+dife[1]+" meses ";
	}else if(dife[0]==1 && dife[1] ==0 && dife[2]==1){
		edad =dife[0]+" año y "+dife[2]+" día";
	}else if(dife[0]==1 && dife[1] ==0 && dife[2]>0){
		edad =dife[0]+" año y "+dife[2]+" días";
	}else if(dife[0]>0 && dife[1] ==0 && dife[2]==1){
		edad =dife[0]+" años y "+dife[2]+" día";
	}else if(dife[0]>0 && dife[1] ==0 && dife[2]>0){
		edad =dife[0]+" años y "+dife[2]+" días";
	}else if(dife[0]==1 && dife[1] ==0 && dife[2]==0){
		edad = dife[0]+" año";
	}else if(dife[0]>0 && dife[1] ==0 && dife[2]==0){
		edad = dife[0]+" años";
	}else if(dife[0]==0 && dife[1] ==1 && dife[2]==1){
		edad =dife[1]+" mes, y "+dife[2]+" día";
	}else if(dife[0]==0 && dife[1] ==1 && dife[2]>0){
		edad =dife[1]+" mes, y "+dife[2]+" días";
	}else if(dife[0]==0 && dife[1] >0 && dife[2]==1){
		edad =dife[1]+" meses, y "+dife[2]+" día";
	}else if(dife[0]==0 && dife[1] >0 && dife[2]>0){
		edad =dife[1]+" meses, y "+dife[2]+" días";
	}else if(dife[0]==0 && dife[1] ==1 && dife[2]==0){
		edad =dife[1]+" mes";
	}else if(dife[0]==0 && dife[1] >0 && dife[2]==0){
		edad =dife[1]+" meses";
	}else if(dife[0]==0 && dife[1] ==0 && dife[2]==1){
		edad =dife[2]+" día";
	}else if(dife[0]==0 && dife[1] ==0 && dife[2]>0){
		edad =dife[2]+" días";
	}else{
		edad = "primer día de trabajo";
		primerdia=1;
	}

	 return [primerdia,edad];



}

function datediff(date1, date2)
{
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
	 y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
    if (d1 < d2)
    {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2)
    {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}
function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
      setDate(-2);
      return getDate();
    }
}

// Fin función calcular tiempo en la empresa

function validarced(){
	error_ced = false;

		if(estado_update==true){
			$('#existe').remove();
			if($('#ced').val() != tem_ced){ //evaluando si es igual a lo 	que ya habia insertado
			var ced_insert = $('#ced').val();
			var tipo = $('#tipo_ced').val();

			$.ajax({
			url: '/jornada/empleado_cd',
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
			url: '/jornada/empleado_cd',
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
			url: '/jornada/empleado_rif',
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
			url: '/jornada/empleado_rif',
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
	 mas = index +2;
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','groupfamily'+mas);

});

// Label familiar
$('#parentescoAdd span.label_family').each(function(index){

	 if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }

	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','label_family'+mas);
	$('#label_family'+mas).attr('name','label_family'+mas);
	$('#label_family'+mas).text('Familiar # '+mas);

});

// Nombre
$('#parentescoAdd input.fullname').each(function(index){

	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','fullname'+mas);
	$('#fullname'+mas).attr('name','fullname'+mas);
	$('#fullname'+mas).attr('placeholder','Nombres del familiar '+mas);

});

// Apellido
$('#parentescoAdd input.apellidofamiliar').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','apellidofamiliar'+mas);
	$('#apellidofamiliar'+mas).attr('name','apellidofamiliar'+mas);
	$('#apellidofamiliar'+mas).attr('placeholder','Apellidos del familiar up '+mas);

});

// Cedula
$('#parentescoAdd input.ced_familiar').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','ced_familiar'+mas);
	$('#ced_familiar'+mas).attr('name','ced_familiar'+mas);
	$('#ced_familiar'+mas).attr('placeholder','Ingrese la cédula up '+mas);

});

// parentesco
$('#parentescoAdd select.parentesco').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','parentesco'+mas);
	$('#parentesco'+mas).attr('name','parentesco'+mas);
	$('#parentesco'+mas).attr('placeholder','Ingrese el parentesco up '+mas);

});

// sexo sexop
$('#parentescoAdd select.sexop').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');

	$('#'+id_temp).attr('name','sexop'+mas);
	$('#'+id_temp).attr('id','sexop'+mas);
	$('#sexop'+mas).attr('placeholder','Ingrese el parentesco up '+mas);

});

// div nacimiento nacimientocontrolp
$('#parentescoAdd div.nacimientocontrolp').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','nacimientocontrolp'+mas);
	$('#nacimientocontrolp'+mas).attr('name','nacimientocontrolp'+mas);

});
// Naciemiento
$('#parentescoAdd input.nacimientop').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','nacimientop'+mas);
	$('#nacimientop'+mas).attr('name','nacimientop'+mas);
	$('#nacimientop'+mas).attr('placeholder','Fecha de naciemiento up '+mas);

});

// label edad
$('#parentescoAdd span.edadempleadofamilia').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	$('#'+id_temp).attr('id','edadempleadofamilia'+mas);


});

//======Re-asignando imrpimir=====
$('#tb_familiar tr.tr').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','tr'+mas);
});

// nombre
$('#tb_familiar td.print_parent_nombre').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','print_parent_nombre'+mas);
});
// cedula
$('#tb_familiar td.print_parent_cedula').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','print_parent_cedula'+mas);
});
// parentesco
$('#tb_familiar td.print_parent_parentesco').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','print_parent_parentesco'+mas);
});
// nacimiento
$('#tb_familiar td.print_parent_nacimiento').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','print_parent_nacimiento'+mas);
});
// edad
$('#tb_familiar td.print_parent_edad').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','print_parent_edad'+mas);
});
// sexo
$('#tb_familiar td.print_parent_sexo').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');
	 $('#'+id_temp).attr('id','print_parent_sexo'+mas);
});



// Generando el script
$('#parentescoAdd div.scriptf').each(function(index){
	if($('#cant_family').length>0){
	 	mas = 1 + index;
	 }else{
	 	mas = index +2;
	 }
	 id_temp = $(this).attr('id');

	$('#'+id_temp).empty();

	$('#'+id_temp).attr('id','script'+mas);
	 script ='';
	    script = script + '<script type="text/javascript">';
        script = script + '$(function () {';
        // datatimepicker
        script = script + '$("#nacimientocontrolp'+mas+'").datetimepicker({';
        script = script + 'locale: "es",';
        script = script + 'format: "DD-MM-YYYY",';
        script = script + 'maxDate: dateToday';
        script = script + '})';
        script = script + '.on("dp.change", function(e) {';
        // script = script + 'var fecha'+mas+'="";';
        script = script + 'fecha'+mas+' = $("#nacimientocontrolp'+mas+'").data("date");';
        script = script + '$("#edadempleadofamilia'+mas+'").addClass("hide");';
        script = script + 'if(fecha'+mas+'!=""){';
        script = script + ' año = fecha'+mas+'.substring(6, 10);';
        script = script + ' mes = fecha'+mas+'.substring(3, 5);';
        script = script + ' dia = fecha'+mas+'.substring(0, 2);';
        script = script + ' años = calcular_edad(dia+"/"+mes+"/"+año);';
        script = script + 'if(años>1){';
        script = script + '$("#edadempleadofamilia'+mas+'").removeClass("hide");';
        script = script + '$("#edadempleadofamilia'+mas+'").text(años+" años");';
        script = script + '}else if(años<1){';
        script = script + '$("#edadempleadofamilia'+mas+'").removeClass("hide");';
        script = script + '$("#edadempleadofamilia'+mas+'").text("Bebé sin el año cumplido");';
        script = script + '}';
        script = script + 'else if(años==1){';
        script = script + '$("#edadempleadofamilia'+mas+'").removeClass("hide");';
        script = script + '$("#edadempleadofamilia'+mas+'").text(años+" año");';
        script = script + '}';
        script = script + '}';
        script = script + '});';

        script = script + '});';

        script = script + '</script>';

	$('#script'+mas).append(script);
	// $('#nacimientop'+mas).attr('placeholder','Fecha de naciemiento up '+mas);

});


}

