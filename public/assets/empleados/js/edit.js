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

// =============Determinando sexo family dinamic ==============
tam_family=$('#cant_family').val();
if(tam_family>0){
	
	for (var i = 1; i <= tam_family; i++) {
		$('#sexop'+i).val($('#edit_sexop'+i).val());
		
	};
}
// ============= Fin Determinando sexo family dinamic =========

// ==========Agregando familiar============
generarscript();
// ==========Fin Agregando familiar========

// ================= Determinando la edad dinámica de los familiares ==============

if(tam_family>0){
	for (var i = 1; i <= tam_family; i++) {
		
    fecha = $('#nacimientop'+i).val();
	año = fecha.substring(6, 10);
	mes = fecha.substring(3, 5);
	dia = fecha.substring(0, 2);
	años = calcular_edad(dia+'/'+mes+'/'+año);

	$('#edadempleadofamilia'+i).removeClass('hide');
	$('#edadempleadofamilia'+i).text(años+' años');

	}
}

// ================= Fin determinando la edad dinámica de los familiares ==========

// ==================Botn borrar ====================
var id_eliminar = [];
$('#parentescoAdd').on("click","#rmfa",function(){
	id_eliminar.push($(this).parent().prev().val()); // capturando el id del familiar a eliminar 
	console.log(id_eliminar);
	// Borrando del dom
	remover_id = $(this).parent().parent().attr('id'); 
	$('#'+remover_id).remove();


});
// ==================Botn borrar ====================

});//fin main function 

// ============Function Generar script==============
function generarscript(){
	// Generando el script
$('#parentescoAdd div.scriptf').each(function(index){

	 mas = index+1;
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
// ============Function Generar script==============